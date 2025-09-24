// components/ServiceDetails/ServiceSalarySurvey.tsx
import Image from "next/image";

type Props = {
  heading: string;
  subtext: string;
  cta1: string;
  cta2: string;
  avatars: string[];
  label: string;
  image: string;
};

export default function ServiceSalarySurvey({
  heading,
  subtext,
  cta1,
  cta2,
  avatars,
  label,
  image,
}: Props) {
  return (
    <section className="">
      <div className="container">
        <div className="rw-hero position-relative rounded-4 shadow-sm overflow-hidden">
          {/* background rings */}
          <span className="rw-ring rw-ring-1 d-none d-sm-block" />
          <span className="rw-ring rw-ring-2 d-none d-sm-block" />
          <span className="rw-ring rw-ring-3 d-none d-lg-block" />

          <div className="row align-items-center g-4">
            {/* LEFT: text */}
            <div className="col-lg-6">
              <h1 className="display-6 fw-bold text-white mb-2" style={{ whiteSpace: 'pre-line' }}>
                {heading}
              </h1>
              <p className="text-white-50 mb-4">{subtext}</p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a href="#" className="btn btn-light rounded-pill px-4 fw-semibold">{cta1}</a>
                <a href="#" className="btn btn-outline-light rounded-pill px-4 fw-semibold">{cta2}</a>
              </div>

              {/* avatar group + label */}
              <div className="d-flex align-items-center">
                <div className="rw-avatars me-2">
                  {avatars.map((src, idx) => (
                    <img key={idx} src={src} alt={`Avatar ${idx}`} />
                  ))}
                </div>
                <span className="text-white small">{label}</span>
              </div>
            </div>

            {/* RIGHT: image */}
            <div className="col-lg-6">
              <Image
                src={image}
                alt="Salary Survey"
                width={600}
                height={500}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
