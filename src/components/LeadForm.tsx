"use client";

import { useState, useRef } from "react";

interface LeadFormProps {
  heading?: string;
  className?: string;
}

export default function LeadForm({ heading, className = "" }: LeadFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    company_website: "", // honeypot — humans never fill this
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  // Spam-gate metadata (matches CRM expectations)
  const submissionId = useRef<string>(crypto.randomUUID());
  const startedAt = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - startedAt.current,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          company_website: "",
        });
        submissionId.current = crypto.randomUUID();
        startedAt.current = Date.now();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-neutral-300 rounded-lg text-charcoal focus:ring-2 focus:ring-gold focus:border-gold outline-none";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {heading && (
        <h3 className="text-2xl font-bold text-charcoal mb-2">{heading}</h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-charcoal mb-1"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-charcoal mb-1"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-charcoal mb-1"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-charcoal mb-1"
        >
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-charcoal mb-1"
        >
          What do you need altered?
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="e.g. Wedding dress taken in, suit hemmed, zipper replaced..."
          className={inputClass}
        />
      </div>

      {/* Honeypot — invisible to humans, bots fill it */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={formData.company_website}
        onChange={(e) =>
          setFormData({ ...formData, company_website: e.target.value })
        }
        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-gold text-white py-3 px-8 rounded-full font-semibold hover:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Request a Free Quote"}
      </button>

      {status === "success" && (
        <p className="text-green-700 text-center font-medium">
          Thank you! We&apos;ll be in touch shortly.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 text-center font-medium">
          Something went wrong. Please call us at (310) 961-2888.
        </p>
      )}
    </form>
  );
}
