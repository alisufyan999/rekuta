"use client";

import Image from "next/image";
import { useEffect } from "react";

type Logo = { name: string; src: string };

type Props = {
  heading: string;
  row1: Logo[];
  row2: Logo[];
  row3: Logo[];
};

export default function Organization({ heading, row1, row2, row3 }: Props) {
  useEffect(() => {
    // Initialize owl carousel after component mounts
    const initializeCarousel = () => {
      if (typeof window !== 'undefined' && (window as any).$) {
        // Row 1
        (window as any).$('.owl-carousel-1').owlCarousel({
          loop: true,
          autoplay: true,
          autoplayTimeout: 0,
          autoplayHoverPause: false,
          autoplaySpeed: 3000,
          smartSpeed: 2000,
          slideTransition: "linear",
          dots: false,
          nav: false,
          margin: 14,
          responsive: {
            0: { items: 2 },
            480: { items: 3 },
            768: { items: 5 },
            992: { items: 6 },
            1200: { items: 7 },
          },
        });

        // Row 2 (reverse)
        (window as any).$('.owl-carousel-2').owlCarousel({
          loop: true,
          autoplay: true,
          autoplayTimeout: 0,
          autoplayHoverPause: false,
          autoplaySpeed: 3000,
          smartSpeed: 2000,
          slideTransition: "linear",
          dots: false,
          nav: false,
          margin: 14,
          rtl: true, // Right to left
          responsive: {
            0: { items: 2 },
            480: { items: 3 },
            768: { items: 5 },
            992: { items: 6 },
            1200: { items: 7 },
          },
        });

        // Row 3
        (window as any).$('.owl-carousel-3').owlCarousel({
          loop: true,
          autoplay: true,
          autoplayTimeout: 0,
          autoplayHoverPause: false,
          autoplaySpeed: 3000,
          smartSpeed: 2000,
          slideTransition: "linear",
          dots: false,
          nav: false,
          margin: 14,
          responsive: {
            0: { items: 2 },
            480: { items: 3 },
            768: { items: 5 },
            992: { items: 6 },
            1200: { items: 7 },
          },
        });
      }
    };

    // Wait for jQuery to load
    const checkJQuery = setInterval(() => {
      if (typeof window !== 'undefined' && (window as any).$) {
        clearInterval(checkJQuery);
        initializeCarousel();
      }
    }, 100);

    return () => {
      clearInterval(checkJQuery);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .owl-carousel .owl-item {
          opacity: 1;
        }
        
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 7px;
        }
        
        .logo-image {
          width: 80px;
          height: 60px;
          object-fit: contain;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }
        
        .logo-image:hover {
          filter: grayscale(0%);
        }
      `}</style>
      
      <section className="section-padding">
        <div className="container">
          <h2 className="fw-bold display-6 text-center mb-4">
            {heading}
          </h2>

          {/* Row 1 – normal direction */}
          <div className="mb-3">
            <div className="owl-carousel owl-carousel-1 owl-theme">
              {row1.map((item, idx) => (
                <div key={`r1-${idx}`} className="item">
                  <div className="logo-item">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={80}
                      height={60}
                      className="logo-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 – reverse (right -> left) */}
          <div className="mb-3">
            <div className="owl-carousel owl-carousel-2 owl-theme">
              {row2.map((item, idx) => (
                <div key={`r2-${idx}`} className="item">
                  <div className="logo-item">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={80}
                      height={60}
                      className="logo-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 – normal direction */}
          <div>
            <div className="owl-carousel owl-carousel-3 owl-theme">
              {row3.map((item, idx) => (
                <div key={`r3-${idx}`} className="item">
                  <div className="logo-item">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={80}
                      height={60}
                      className="logo-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
