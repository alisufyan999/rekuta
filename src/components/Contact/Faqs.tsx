// app/components/Faqs.tsx
export default function Faqs() {
    const left = [
      {
        q: "What is Rekuta?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
        open: true, // first open by default
      },
      { q: "How does Rekuta work?", a: "" },
      { q: "Who can use Rekuta?", a: "" },
      { q: "Is Rekuta better than a traditional recruiter?", a: "" },
      { q: "Does Rekuta use AI fairly?", a: "" },
    ];
  
    const right = [
      { q: "Is my data safe with Rekuta?", a: "" },
      { q: "How fast are job matches?", a: "" },
      { q: "What industries does Rekuta cover?", a: "" },
      { q: "Can job seekers use Rekuta for free?", a: "" },
      { q: "How do I get started?", a: "" },
    ];
  
    return (
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center fw-bold mb-4 mb-md-5">FAQs</h2>
  
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
                          className={`accordion-button ${item.open ? "" : "collapsed"}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded={item.open ? "true" : "false"}
                          aria-controls={collapseId}
                        >
                          {item.q}
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className={`accordion-collapse collapse ${item.open ? "show" : ""}`}
                        aria-labelledby={headingId}
                        data-bs-parent="#faqLeft"
                      >
                        <div className="accordion-body">
                          {item.a || "Answer coming soon."}
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
                          {item.q}
                        </button>
                      </h2>
                      <div
                        id={collapseId}
                        className="accordion-collapse collapse"
                        aria-labelledby={headingId}
                        data-bs-parent="#faqRight"
                      >
                        <div className="accordion-body">
                          {item.a || "Answer coming soon."}
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
  