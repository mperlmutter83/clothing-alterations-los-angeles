import { NextRequest, NextResponse } from "next/server";

// Forwards leads to the Yes Crew CRM form endpoint for this business.
// The provider is resolved there from the opaque form_key — never spoofable.
// The key stays server-side via CRM_FORM_KEY (never shipped to the browser).
const CRM_FORM_URL = `https://yescrew-dashboard.vercel.app/api/forms/${process.env.CRM_FORM_KEY}/submit`;

// "Looking for Work" applicants are emailed directly to Mike in addition to
// landing in the CRM. Uses the shared Resend account (verified sender: yesidoinc.com).
const NOTIFY_TO = "yescrewnetwork@gmail.com";
const FROM = "Clothing Alterations Los Angeles <info@yesidoinc.com>";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function notifyWorkApplicant(opts: {
  name: string;
  phone: string;
  email: string | null;
  serviceNeeded: string | null;
}): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY not set" };

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;color:#111;">
      <h2 style="margin:0 0 12px;">New work applicant — clothingalterationslosangeles.com</h2>
      <p><strong>Name:</strong> ${escapeHtml(opts.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(opts.phone)}</p>
      ${opts.email ? `<p><strong>Email:</strong> ${escapeHtml(opts.email)}</p>` : ""}
      ${opts.serviceNeeded ? `<p><strong>Details:</strong> ${escapeHtml(opts.serviceNeeded)}</p>` : ""}
      <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
      <p style="font-size:13px;color:#888;">Reply directly to this email to respond to the applicant.</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: NOTIFY_TO,
        replyTo: opts.email || undefined,
        subject: `New work applicant — ${opts.name} (clothingalterationslosangeles.com)`,
        html,
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend send failed:", res.status, errText);
      return { ok: false, error: `Resend ${res.status}: ${errText}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("Resend send error:", err);
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      name,
      email,
      phone,
      service,
      message,
      submission_id,
      elapsed_ms,
      company_website,
    } = body;

    // Support both contracts: the original firstName/lastName form and the
    // single-name payload used by the Looking for Work form.
    const fullName =
      name || [firstName, lastName].filter(Boolean).join(" ").trim();

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const isWorkApplicant = service === "Looking for Work";

    const serviceNeeded = service
      ? [
          `Service: ${service}`,
          message ? `Details: ${message}` : null,
          "Source: clothingalterationslosangeles.com",
        ]
          .filter(Boolean)
          .join(" | ")
      : message || null;

    const crmResponse = await fetch(CRM_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fullName,
        email,
        phone,
        service_needed: serviceNeeded,
        submission_id,
        elapsed_ms,
        company_website, // honeypot passthrough
      }),
    });

    // Work applicants always get emailed to Mike — even if the CRM hiccups,
    // no job seeker is lost.
    let emailResult: { ok: boolean; error?: string } | null = null;
    if (isWorkApplicant) {
      emailResult = await notifyWorkApplicant({
        name: fullName,
        phone,
        email: email || null,
        serviceNeeded,
      });
    }
    const emailed = emailResult?.ok ?? false;

    if (!crmResponse.ok) {
      console.error("CRM form submit failed:", crmResponse.status);
      if (isWorkApplicant && emailed) {
        return NextResponse.json({ success: true, emailed: true }, { status: 201 });
      }
      return NextResponse.json(
        { error: "Failed to submit lead" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      workApplicantEmailed: isWorkApplicant ? emailed : undefined,
      workApplicantEmailError: emailResult?.error,
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit lead" },
      { status: 500 }
    );
  }
}
