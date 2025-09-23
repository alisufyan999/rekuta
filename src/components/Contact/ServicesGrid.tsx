// app/components/ServicesGrid.tsx
type Item = { title: string; text: string; href: string };

const items: Item[] = [
  {
    title: "Permanent recruitment",
    text:
      "Our expertise lies in identifying permanent candidates across various industries and aligning them with roles that cater to their long-term career aspirations.",
    href: "#",
  },
  {
    title: "Contingent",
    text:
      "We maintain a pool of contingent workers who are ready to strengthen your organization’s capabilities. Whether you need to meet project deadlines, accommodate seasonal.",
    href: "#",
  },
  {
    title: "Volume Recruitment",
    text:
      "For organizations with substantial hiring requirements, we excel in efficiently managing large-scale recruitment projects to ensure that your needs are met.",
    href: "#",
  },
  {
    title: "Executive Search",
    text:
      "Our specialist team of recruiters invests time to understand prospective leaders’ qualities, vision, and capabilities and connects them with like-minded employers.",
    href: "#",
  },
  {
    title: "Market Intelligence",
    text:
      "We provide invaluable market insight and intelligence to keep businesses well-informed about industry trends, salary benchmarks, and the availability of talent.",
    href: "#",
  },
  {
    title: "Salary Benchmarking",
    text:
      "Plan performance reviews and employee onboarding strategies with our data-led compensation benchmarking tool to ensure you retain and attract top talent across Austin.",
    href: "#",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding pb-0">
      <div className="container">
        <div className="row g-3 g-md-4">
          {items.map((item, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div className="svc-card p-3 p-md-4 rounded-4 h-100">
                <h6 className="fw-bold mb-2">{item.title}</h6>
                <p className="mb-3 text-secondary small">{item.text}</p>
                <a href={item.href} className="svc-link text-decoration-none">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
