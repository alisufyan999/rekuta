'use client';

import { useEffect } from 'react';

function BootstrapClient() {
  useEffect(() => {
    // Load Bootstrap JavaScript
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    
    // Initialize Owl Carousel after component mounts
    const initOwlCarousel = () => {
      if (typeof window !== 'undefined' && (window as any).$) {
        (window as any).$('#trusted-logos-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: false,
          dots: true,
          autoplay: true,
          autoplayTimeout: 3000,
          responsive: {
            0: {
              items: 2
            },
            600: {
              items: 3
            },
            1000: {
              items: 4
            }
          }
        });
      }
    };

    // Initialize carousel after a short delay to ensure DOM is ready
    setTimeout(initOwlCarousel, 100);
  }, []);

  return null;
}

export default BootstrapClient;
