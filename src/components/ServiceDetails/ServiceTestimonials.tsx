"use client";

import { useEffect } from "react";

// Global jQuery & Owl declarations
declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}
declare const $: any;

export type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  tags: string[];
};

interface Props {
  row1Testimonials: Testimonial[];
  row2Testimonials: Testimonial[];
}

const ServiceTestimonials = ({ row1Testimonials, row2Testimonials }: Props) => {
  useEffect(() => {
    const loadScripts = async () => {
      if (typeof window !== "undefined" && !window.jQuery) {
        const jqueryScript = document.createElement("script");
        jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        jqueryScript.async = true;
        document.head.appendChild(jqueryScript);
        await new Promise((resolve) => (jqueryScript.onload = resolve));
      }

      if (!document.querySelector('link[href*="owl.carousel"]')) {
        const owlCSS = document.createElement("link");
        owlCSS.rel = "stylesheet";
        owlCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
        document.head.appendChild(owlCSS);
      }

      if (typeof window !== "undefined" && !window.$?.fn?.owlCarousel) {
        const owlScript = document.createElement("script");
        owlScript.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
        owlScript.async = true;
        document.head.appendChild(owlScript);
        await new Promise((resolve) => (owlScript.onload = resolve));
      }

      setTimeout(() => {
        if (window.$?.fn?.owlCarousel) {
          $("#serviceTestiCarouselLTR").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 900,
            smartSpeed: 650,
            margin: 16,
            dots: true,
            nav: false,
            responsive: {
              0: { items: 1, stagePadding: 24 },
              768: { items: 1, stagePadding: 32 },
              1024: { items: 3, stagePadding: 70 },
              1366: { items: 4, stagePadding: 90 },
            },
          });

          $("#serviceTestiCarouselRTL").owlCarousel({
            loop: true,
            rtl: true,
            startPosition: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 900,
            smartSpeed: 650,
            margin: 16,
            dots: true,
            nav: false,
            responsive: {
              0: { items: 1, stagePadding: 24 },
              768: { items: 1, stagePadding: 32 },
              1024: { items: 3, stagePadding: 70 },
              1366: { items: 4, stagePadding: 90 },
            },
          });
        }
      }, 100);
    };

    loadScripts();
  }, []);

  if (!row1Testimonials.length && !row2Testimonials.length) return null;

  return (
    <section className="section-padding">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="display-5 text-center mb-4">What Our Clients Say</h2>

          {/* Row 1 - LTR */}
          {row1Testimonials.length > 0 && (
            <div className="owl-carousel owl-theme mb-4" id="serviceTestiCarouselLTR">
              {row1Testimonials.map((t) => (
                <div key={`ltr-${t.id}`} className="card testi-card bg-soft rounded-4 p-4 text-start">
                  <div className="fw-semibold mb-2">{t.name}</div>
                  <div className="small mb-3 text-muted">{t.company} • {t.position}</div>
                  <p className="mb-4 text-dark">"{t.quote}"</p>
                  <div className="d-flex gap-2 justify-content-start">
                    {t.tags.map((tag, index) => (
                      <span key={index} className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Row 2 - RTL */}
          {row2Testimonials.length > 0 && (
            <div className="owl-carousel owl-theme" id="serviceTestiCarouselRTL">
              {row2Testimonials.map((t) => (
                <div key={`rtl-${t.id}`} className="card testi-card bg-soft rounded-4 p-4 text-start">
                  <div className="fw-semibold mb-2">{t.name}</div>
                  <div className="small mb-3 text-muted">{t.company} • {t.position}</div>
                  <p className="mb-4 text-dark">"{t.quote}"</p>
                  <div className="d-flex gap-2 justify-content-start">
                    {t.tags.map((tag, index) => (
                      <span key={index} className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
