// app/components/ServiceHero.tsx
type Props = {
    eyebrow: string;
    title: string;
    description: string;
  };
  
  export default function ServiceHero({ eyebrow, title, description }: Props) {
    return (
      <section className="section-padding">
        <div className="container">
          <div className="svc-hero position-relative overflow-hidden rounded-4 p-4 p-md-5">
            <span className="svc-sweep svc-sweep-left d-none d-sm-block" aria-hidden />
            <span className="svc-sweep svc-sweep-right d-none d-sm-block" aria-hidden />
  
            <div className="text-center text-white mx-auto" style={{ maxWidth: 980 }}>
              <span className="badge bg-white text-primary-emphasis fw-semibold svc-badge mb-3">
                {eyebrow}
              </span>
  
              <h1 className="svc-title mb-3">{title}</h1>
              <p className="svc-subtext mx-auto mb-0">{description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  