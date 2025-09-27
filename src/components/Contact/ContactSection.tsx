"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: send to your API route
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    console.log("Contact form:", data);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    e.currentTarget.reset();
    alert("Thanks! We’ll get in touch soon.");
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-start">
          {/* LEFT: copy + info tiles */}
          <div className="col-lg-6">
            <h2 className="display-5 lh-sm mb-3">
              Why Reach Out to Rekuta?
            </h2>

            <p className="text-secondary mb-4">
              Whether you’re an employer seeking the right talent or a
              professional looking for your next opportunity, we’d love to hear
              from you. Our AI-powered recruitment platform makes hiring faster,
              fairer, and more effective. Get in touch today and let’s shape the
              future of work together.
            </p>

            <div className="d-grid gap-3">
              {/* Phone */}
              <div className="contact-tile d-flex align-items-center p-3 rounded-4">
                <span className="tile-icon me-3 d-inline-flex align-items-center justify-content-center rounded-3">
                  {/* phone svg */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6.6 3.7c.5-.5 1.3-.5 1.8 0l1.8 1.8c.4.4.5 1 .2 1.5l-1 1.8c-.1.2-.1.5 0 .7 1 2 2.6 3.7 4.6 4.6.2.1.5.1.7 0l1.8-1c.5-.3 1.1-.2 1.5.2l1.8 1.8c.5.5.5 1.3 0 1.8l-1.2 1.2c-.9.9-2.3 1.2-3.5.7-5-2-9-6-11-11-.5-1.2-.2-2.6.7-3.5l1.2-1.2Z" fill="#fff"/>
                  </svg>
                </span>
                <div>
                  <div className="fw-semibold">Phone</div>
                  <div className="text-secondary small">+43 123 456 789 , +12 123 456 789</div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-tile d-flex align-items-center p-3 rounded-4">
                <span className="tile-icon me-3 d-inline-flex align-items-center justify-content-center rounded-3">
                  {/* mail svg */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M20 5H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 2-8 5L4 7h16Z" fill="#fff"/>
                  </svg>
                </span>
                <div>
                  <div className="fw-semibold">Email</div>
                  <div className="text-secondary small">support@rekuta.at , email@rekuta.at</div>
                </div>
              </div>

              {/* Location */}
              <div className="contact-tile d-flex align-items-center p-3 rounded-4">
                <span className="tile-icon me-3 d-inline-flex align-items-center justify-content-center rounded-3">
                  {/* map pin svg */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="#fff"/>
                  </svg>
                </span>
                <div>
                  <div className="fw-semibold">Location</div>
                  <div className="text-secondary small">abc Building, abc Street , abc City , abc Country</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="col-lg-6">
            <div className="contact-panel p-3 p-md-4 rounded-4 shadow-sm">
              <h4 className="text-white mb-3">Get in Touch</h4>

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Row 1: name + email */}
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="name" className="form-label visually-hidden">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control form-pill"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label visually-hidden">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control form-pill"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="mt-3">
                  <label htmlFor="company" className="form-label visually-hidden">
                    Company / Organization (optional)
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="form-control form-pill"
                    placeholder="Company / Organization (optional)"
                  />
                </div>

                {/* Subject */}
                <div className="mt-3">
                  <label htmlFor="subject" className="form-label visually-hidden">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="form-control form-pill"
                    placeholder="Subject"
                  />
                </div>

                {/* Message */}
                <div className="mt-3">
                  <label htmlFor="message" className="form-label visually-hidden">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control form-pill form-textarea"
                    placeholder="Message"
                    rows={5}
                  />
                </div>

                {/* Submit */}
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-dark w-100 form-submit rounded-pill fw-semibold"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}
