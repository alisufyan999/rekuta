// app/components/ServiceDetails/AboutSection.tsx
type Props = {
    title: string;
    paragraphs: string[];
    ctaText: string;
    image: string;
    stats?: { analysisTotal: string; vacancies: string };
  };
  
  export default function AboutSection({
    title,
    paragraphs,
    ctaText,
    image,
    stats,
  }: Props) {
    return (
      <section className="section-padding pt-0">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left copy */}
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold lh-sm mb-3">{title}</h2>
  
              {paragraphs.map((p, i) => (
                <p key={i} className="text-secondary mb-3">
                  {p}
                </p>
              ))}
  
              <a href="#contact" className="btn btn-primary rounded-pill px-4 mt-2">
                {ctaText}
              </a>
            </div>
  
            {/* Right image with floating chips */}
            <div className="col-lg-6">
              <div className="pah-wrap position-relative mx-auto">
                <img src={image} alt="" className="img-fluid pah-person" />
              </div>
            </div>
            {/* /right */}
          </div>
        </div>
      </section>
    );
  }
  