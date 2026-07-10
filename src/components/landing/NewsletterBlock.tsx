"use client";

import { FormEvent, useState } from "react";
import { Mail, Send, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { useMessages } from "@/i18n/LanguageProvider";

export default function NewsletterBlock() {
  const { knowledge, common } = useMessages();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <ScrollReveal y={28}>
      <div className="conversion-newsletter">
        <div className="conversion-newsletter-glow" aria-hidden />
        <div className="conversion-newsletter-inner">
          <div className="conversion-newsletter-copy">
            <span className="conversion-newsletter-eyebrow">
              <Sparkles
                className="conversion-newsletter-eyebrow-icon"
                strokeWidth={1.75}
                aria-hidden
              />
              {common.newsletterLabel}
            </span>
            <h3 className="conversion-newsletter-title">{knowledge.newsletterTitle}</h3>
            <p className="conversion-newsletter-lead">{knowledge.newsletterSubtitle}</p>
          </div>

          <div className="conversion-newsletter-action">
            {submitted ? (
              <p className="conversion-newsletter-success" role="status">
                <Mail className="h-5 w-5 shrink-0" aria-hidden />
                {common.newsletterSuccess}
              </p>
            ) : (
              <form className="conversion-newsletter-form" onSubmit={onSubscribe}>
                <div className="conversion-newsletter-field">
                  <Mail
                    className="conversion-newsletter-field-icon"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <input
                    id="newsletter-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    aria-label="Email for newsletter"
                    placeholder={common.enterEmail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="conversion-newsletter-input"
                  />
                </div>
                <button type="submit" className="conversion-newsletter-submit">
                  <span>{common.subscribe}</span>
                  <Send className="conversion-newsletter-submit-icon" strokeWidth={2} aria-hidden />
                </button>
              </form>
            )}
            <p className="conversion-newsletter-note">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
