// app/components/CareerCtas.tsx
export default function CareerCtas() {
    const items = [
      {
        title: <>Looking for your next career<br/>move?</>,
        text:
          "Whether you are an expert in Accounting & Finance, Operations, Technology, Human Resources or Sales & Marketing, our staffing agency can match you with the best job for your skills, experience and goals.",
        cta: { label: "Search For Jobs", href: "#" },
      },
      {
        title: <>Ready to bolster your<br/>workforce?</>,
        text:
          "As your trusted recruitment agency in Austin, we are here to help you identify the best talent. By partnering with us, you'll have access to the candidates who have the skills, experience and personality to fit your organization.",
        cta: { label: "Looking to hire?", href: "#" },
      },
      {
        title: <>Ready to outsource your<br/>recruitment?</>,
        text:
          "Our RPO teams work in a truly customer-centric way, combining operational excellence with an agile approach to ensure that you get the very best support where it matters most. Partner with us today.",
        cta: { label: "Request a consultation", href: "#" },
      },
    ];
  
    return (
      <section className="cta-band section-padding mb-5">
        <div className="container">
          <div className="row g-4 g-md-5">
            {items.map(({ title, text, cta }, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="h-100">
                  <h5 className="fw-bold mb-2 lh-sm cta-title">{title}</h5>
                  <p className="text-secondary small mb-3 mb-md-4">{text}</p>
                  <a href={cta.href} className="btn btn-primary rounded-pill px-3 py-2 fw-semibold btn-compact">
                    {cta.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  