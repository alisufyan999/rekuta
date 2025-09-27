"use client";

import { useEffect } from 'react';

// Add type declarations for jQuery and Owl Carousel
declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}

// Declare $ as a global variable
declare const $: any;

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  tags: string[];
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Morgan Pelissier",
      position: "Marketing Manager",
      company: "Sparkmate",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      tags: ["Sales", "Event organization"]
    },
    {
      id: 2,
      name: "Morgan Pelissier",
      position: "Marketing Manager",
      company: "Sparkmate",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      tags: ["Sales", "Event organization"]
    },
    {
      id: 3,
      name: "Morgan Pelissier",
      position: "Marketing Manager",
      company: "Sparkmate",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      tags: ["Sales", "Event organization"]
    },
    {
      id: 4,
      name: "Morgan Pelissier",
      position: "Marketing Manager",
      company: "Sparkmate",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      tags: ["Sales", "Event organization"]
    },
    {
      id: 5,
      name: "Morgan Pelissier",
      position: "Marketing Manager",
      company: "Sparkmate",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      tags: ["Sales", "Event organization"]
    },
    {
      id: 6,
      name: "Morgan Pelissier",
      position: "Marketing Manager",
      company: "Sparkmate",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
      tags: ["Sales", "Event organization"]
    }
  ];

  useEffect(() => {
    // Load jQuery and Owl Carousel dynamically
    const loadScripts = async () => {
      // Load jQuery
      if (typeof window !== 'undefined' && !window.jQuery) {
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        jqueryScript.async = true;
        document.head.appendChild(jqueryScript);
        
        await new Promise((resolve) => {
          jqueryScript.onload = resolve;
        });
      }

      // Load Owl Carousel CSS
      if (typeof window !== 'undefined' && !document.querySelector('link[href*="owl.carousel"]')) {
        const owlCSS = document.createElement('link');
        owlCSS.rel = 'stylesheet';
        owlCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css';
        document.head.appendChild(owlCSS);
      }

      // Load Owl Carousel JS
      if (typeof window !== 'undefined' && !window.$.fn.owlCarousel) {
        const owlScript = document.createElement('script');
        owlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
        owlScript.async = true;
        document.head.appendChild(owlScript);
        
        await new Promise((resolve) => {
          owlScript.onload = resolve;
        });
      }

      // Initialize carousels after a short delay to ensure DOM is ready
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
          // First carousel — LTR, autoplay, peek next on the right
          $('#testiCarouselLTR').owlCarousel({
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
              0:    { items: 1, stagePadding: 24 },   // phones
              768:  { items: 1, stagePadding: 32 },   // iPad
              1024: { items: 4, stagePadding: 70 },   // iPad Pro / desktop (peek next)
              1366: { items: 4, stagePadding: 90 }    // larger desktop (bigger peek)
            }
          });

          // Second carousel — RTL, autoplay, show first slide half (peek in)
          $('#testiCarouselRTL').owlCarousel({
            loop: true,
            rtl: true,
            startPosition: 1,              // begin on slide 2 so slide 1 peeks
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 900,
            smartSpeed: 650,
            margin: 16,
            dots: true,
            nav: false,
            responsive: {
              0:    { items: 1, stagePadding: 24 },   // phones
              768:  { items: 1, stagePadding: 32 },   // iPad
              1024: { items: 4, stagePadding: 70 },   // iPad Pro / desktop (peek previous on right in RTL)
              1366: { items: 4, stagePadding: 90 }
            }
          });
        }
      }, 100);
    };

    loadScripts();
  }, []);

  return (
    <section className="section-padding">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="display-4 text-center mb-4">Our Testimonials</h2>

          {/* Slider LTR */}
          <div className="owl-carousel owl-theme mb-1" id="testiCarouselLTR">
            {testimonials.map((testimonial) => (
              <div key={`ltr-${testimonial.id}`} className="card testi-card bg-soft rounded-4 p-4">
                <div className="fw-semibold mb-2">{testimonial.name}</div>
                <div className="small mb-3 text-muted">{testimonial.company} • {testimonial.position}</div>
                <p className="mb-4 text-dark">"{testimonial.quote}"</p>
                <div className="d-flex gap-2">
                  {testimonial.tags.map((tag, index) => (
                    <span key={index} className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Slider RTL */}
          <div className="owl-carousel owl-theme" id="testiCarouselRTL">
            {testimonials.map((testimonial) => (
              <div key={`rtl-${testimonial.id}`} className="card testi-card bg-soft rounded-4 p-4 text-start">
                <div className="fw-semibold mb-2">{testimonial.name}</div>
                <div className="small mb-3 text-muted">{testimonial.company} • {testimonial.position}</div>
                <p className="mb-4 text-dark">"{testimonial.quote}"</p>
                <div className="d-flex gap-2 justify-content-start">
                  {testimonial.tags.map((tag, index) => (
                    <span key={index} className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;