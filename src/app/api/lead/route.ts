import { NextRequest, NextResponse } from "next/server";

// Forwards leads to the Yes Crew CRM form endpoint for this business.
// The provider is resolved there from the opaque form_key — never spoofable.
// The key stays server-side via CRM_FORM_KEY (never shipped to the browser).
const CRM_FORM_URL = `https://yescrew-dashboard.vercel.app/api/forms/${process.env.CRM_FORM_KEY}/submit`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      submission_id,
      elapsed_ms,
      company_website,
    } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const crmResponse = await fetch(CRM_FORM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`.trim(),
        email,
        phone,
        service_needed: message || null,
        submission_id,
        elapsed_ms,
        company_website, // honeypot passthrough
      }),
    });

    if (!crmResponse.ok) {
      console.error("CRM form submit failed:", crmResponse.status);
      return NextResponse.json(
        { error: "Failed to submit lead" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit lead" },
      { status: 500 }
    );
  }
}
