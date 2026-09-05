"use client";

import { useEffect, useRef } from "react";

export default function BookingEmbed({ bookingKey }: { bookingKey?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data?.type === "yescrew:embed:booked") {
        // GA4/GTM conversion event for confirmed bookings inside the iframe.
        const dlWindow = window as unknown as { dataLayer?: Record<string, unknown>[] };
        dlWindow.dataLayer = dlWindow.dataLayer ?? [];
        dlWindow.dataLayer.push({ event: "book_appointment" });
      }
      if (event.data?.type === "yescrew:embed:height" && iframeRef.current) {
        iframeRef.current.style.height = event.data.height + "px";
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  if (!bookingKey) {
    return (
      <p className="text-center text-neutral-600">
        Online booking is loading — please call{" "}
        <a href="tel:+13109612888" className="text-gold font-semibold">
          (310) 961-2888
        </a>{" "}
        to schedule your fitting.
      </p>
    );
  }

  return (
    <iframe
      ref={iframeRef}
      src={`https://yescrew-dashboard.vercel.app/book/${bookingKey}`}
      style={{ width: "100%", border: "none", minHeight: "600px" }}
      title="Book an Alteration Fitting"
    />
  );
}
