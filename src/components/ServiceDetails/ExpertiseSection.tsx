// app/components/ServiceDetails/ExpertiseSection.tsx
import Image from "next/image";

type Props = {
  heading: string;
  items: { title: string; text: string; icon: string }[];
};

export default function ExpertiseSection({ heading, items }: Props) {
  return (
    <section
      className="section-padding areas-section"
    >
      <div className="container">
        <h2 className="text-center text-white display-5 mb-4 mb-md-5">
          {heading}
        </h2>

        <div className="row g-3 g-md-4">
          {items.map((item, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <article className="h-100 bg-white rounded-4 shadow-sm p-3 p-md-4">
                <div className="mb-3">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={44}
                    height={44}
                    priority={i < 4}
                  />
                </div>
                <h6 className="fw-semibold mb-1">{item.title}</h6>
                <p className="text-muted mb-0" style={{ fontSize: ".92rem" }}>
                  {item.text}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
