"use client";
import { FormEvent, useEffect, useRef, useState } from "react";

// Messages are delivered to this inbox through FormSubmit (formsubmit.co).
const INBOX = "info@lookininc.com";

type Status = "idle" | "sending" | "sent" | "error";

// Product pages link here with ?interest=<slug>; the message box is prefilled.
const PREFILL: Record<string, string> = {
  "single-pixel":
    "I am interested in the single-pixel THz-TDS scanner. Please contact me with more information.\n\nSamples and measurements: ",
  "multi-pixel":
    "I am interested in the multi-pixel THz-TDS scanner.\n\nPart or web width:\nLine speed:\nMaterials:\nWhat we need to measure:",
};

const field =
  "w-full rounded-md border border-white/15 bg-ink-700 px-4 py-3 text-base text-white outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";
const label = "mb-2 block text-sm font-medium text-white";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get(
      "interest",
    );
    const text = interest ? PREFILL[interest] : undefined;
    if (text && messageRef.current && !messageRef.current.value) {
      messageRef.current.value = text;
    }
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._honey) return; // a spam bot filled the hidden field
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || String(json.success) !== "true") throw new Error("failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-ink py-20 lg:py-28"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Contact
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Contact us
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mist sm:text-lg">
              Tell us about your material, process or inspection challenge and
              we will get back to you by email.
            </p>

            <dl className="mt-10 space-y-6 text-[15px]">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-fog">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${INBOX}`}
                    className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-accent"
                  >
                    {INBOX}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-fog">
                  Office and lab
                </dt>
                <dd className="mt-1.5 leading-relaxed text-mist">
                  5839 Green Valley Cir., Ste. 205
                  <br />
                  Culver City, CA 90230
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={onSubmit}
            action={`https://formsubmit.co/${INBOX}`}
            method="POST"
            className="rounded-xl border border-white/10 bg-ink-800 p-6 sm:p-9"
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from lookininc.com"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            {/* honeypot: hidden from people, filled in by bots */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="email" className={label}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={field}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className={label}>
                  Company{" "}
                  <span className="font-normal text-fog">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className={field}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={label}>
                  Message
                </label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className={`${field} resize-y`}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-md bg-accent-deep px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent disabled:cursor-wait disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              <p role="status" aria-live="polite" className="text-sm">
                {status === "sent" && (
                  <span className="text-emerald-400">
                    Thank you. Your message has been sent.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-400">
                    Your message could not be sent. Please email us at{" "}
                    <a href={`mailto:${INBOX}`} className="underline">
                      {INBOX}
                    </a>
                    .
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
