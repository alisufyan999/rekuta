// components/ServiceDetails/ServiceFAQs.tsx
import React from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  faqs: FaqItem[];
};

export default function ServiceFAQs({ faqs }: Props) {
  const half = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, half);
  const right = faqs.slice(half);

  return (
    <section className="section-padding pt-0">
      <div className="container">
        <h2 className="text-center display-5 mb-4 mb-md-5">FAQs</h2>
        <div className="row g-3 g-md-4">
          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-6">
            <div className="accordion faq-accordion" id="faqLeft">
              {left.map((item, i) => {
                const collapseId = `left-collapse-${i}`;
                const headingId = `left-heading-${i}`;
                return (
                  <div className="accordion-item" key={i}>
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button ${i === 0 ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={i === 0 ? "true" : "false"}
                        aria-controls={collapseId}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                      aria-labelledby={headingId}
                      data-bs-parent="#faqLeft"
                    >
                      <div className="accordion-body">
                        {item.answer || "Answer coming soon."}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-12 col-lg-6">
            <div className="accordion faq-accordion" id="faqRight">
              {right.map((item, i) => {
                const collapseId = `right-collapse-${i}`;
                const headingId = `right-heading-${i}`;
                return (
                  <div className="accordion-item" key={i}>
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded="false"
                        aria-controls={collapseId}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className="accordion-collapse collapse"
                      aria-labelledby={headingId}
                      data-bs-parent="#faqRight"
                    >
                      <div className="accordion-body">
                        {item.answer || "Answer coming soon."}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
