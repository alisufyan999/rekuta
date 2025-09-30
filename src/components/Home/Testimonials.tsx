'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;  // local path under /public
  rating: number;  // 0..5
  quote: string;
  tags: string[];
};

const DATA: Testimonial[] = [
  {
    id: 1,
    name: 'Morgan Pelissier',
    role: 'Sparkmate • Marketing Manager',
    company: 'Sparkmate',
    avatar: '/assets/images/home/testiimg1.png',
    rating: 5,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['Sales', 'Event organization'],
  },
  {
    id: 2,
    name: 'Morgan Pelissier',
    role: 'Sparkmate • Marketing Manager',
    company: 'Sparkmate',
    avatar: '/assets/images/home/testiimg1.png',
    rating: 5,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['Sales', 'Event organization'],
  },
  {
    id: 3,
    name: 'Morgan Pelissier',
    role: 'Sparkmate • Marketing Manager',
    company: 'Sparkmate',
    avatar: '/assets/images/home/testiimg1.png',
    rating: 4,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['Sales', 'Event organization'],
  },
  {
    id: 4,
    name: 'Morgan Pelissier',
    role: 'Sparkmate • Marketing Manager',
    company: 'Sparkmate',
    avatar: '/assets/images/home/testiimg1.png',
    rating: 5,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['Sales', 'Event organization'],
  },
  {
    id: 5,
    name: 'Morgan Pelissier',
    role: 'Sparkmate • Marketing Manager',
    company: 'Sparkmate',
    avatar: '/assets/images/home/testiimg1.png',
    rating: 4,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['Sales', 'Event organization'],
  },
  {
    id: 6,
    name: 'Morgan Pelissier',
    role: 'Sparkmate • Marketing Manager',
    company: 'Sparkmate',
    avatar: '/assets/images/home/testiimg1.png',
    rating: 5,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tags: ['Sales', 'Event organization'],
  },
];

const TestimonialNew: React.FC = () => {
  // Initialize Owl after jQuery + Owl scripts are loaded
  useEffect(() => {
    const start = () => {
      if (typeof window === 'undefined') return;
      const $ = (window as any).jQuery as any;
      if (!$ || !$.fn || !$.fn.owlCarousel) {
        // wait a tick if scripts haven't attached yet
        setTimeout(start, 50);
        return;
      }
      $('.newtesti-owl').owlCarousel({
        loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 900,
            smartSpeed: 650,
            margin: 30,
            dots: false,
            nav: false,
            responsive: {
              0:    { items: 1, stagePadding: 24 },   // phones
              768:  { items: 1, stagePadding: 32 },   // iPad
              1024: { items: 3, stagePadding: 200 },   // iPad Pro / desktop (peek next)
              1366: { items: 3, stagePadding: 200 }    // larger desktop (bigger peek)
            }
      });

      $('.newtesti-owl-two').owlCarousel({
        loop: true,
        rtl: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 900,
            smartSpeed: 650,
            margin: 30,
            dots: false,
            nav: false,
            responsive: {
              0:    { items: 1, stagePadding: 24 },   // phones
              768:  { items: 1, stagePadding: 32 },   // iPad
              1024: { items: 3, stagePadding: 200 },   // iPad Pro / desktop (peek next)
              1366: { items: 3, stagePadding: 200 }    // larger desktop (bigger peek)
            }
      });
    };
    start();
  }, []);

  const renderStars = (count: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <i
        key={i}
        className={`fa-solid fa-star ${i < count ? 'text-warning' : 'text-secondary opacity-50'}`}
        aria-hidden
      />
    ));

  return (
    <>
      {/* Owl CSS via CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
      />

      {/* jQuery + Owl scripts via CDN (loaded after interactive) */}
      <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="afterInteractive" />

      <section className="section-padding">
        <div className="row">
            <div className="col-lg-12 col-sm-12">
                <h2 className="text-center display-5 fw-bold mb-4">Our Testimonials</h2>
            </div>
        </div>
        <div className="row  testimonailsFade">
            <div className="col-lg-12 col-sm-12">
                <div className="newtesti-owl owl-carousel owl-theme">
                    {DATA.map((t) => (
                        <div className="item" key={t.id}>
                        <div className="newtesti-card shadow-sm p-3 p-md-4 rounded-4 h-100">
                            <div className="d-flex align-items-center gap-3 mb-2">
                            <div className="newtesti-avatar">
                                <Image
                                src={t.avatar}
                                alt={t.name}
                                width={44}
                                height={44}
                                className="rounded-circle object-fit-cover"
                                />
                            </div>
                            <div>
                                <div className="fw-semibold small lh-1">{t.name}</div>
                                <div className="text-muted small">{t.role}</div>
                            </div>
                            </div>

                            <div className="newtesti-stars mb-2">{renderStars(t.rating)}</div>

                            <p className="newtesti-quote small mb-3">
                            "{t.quote}"
                            </p>

                            <div className="d-flex flex-wrap gap-2">
                            {t.tags.map((tag, idx) => (
                                <span key={idx} className="newtesti-tag badge rounded-pill">
                                {tag}
                                </span>
                            ))}
                            </div>
                        </div>
                </div>
            ))}
            </div>

            <div className="newtesti-owl-two owl-carousel owl-theme mt-4">
                {DATA.map((t) => (
                    <div className="item" key={t.id}>
                    {/* removed: text-start float-left */}
                    <div className="newtesti-card shadow-sm p-3 p-md-4 rounded-4 h-100">
                        <div className="d-flex align-items-center gap-3 mb-2">
                        <div className="newtesti-avatar">
                            <Image
                            src={t.avatar}
                            alt={t.name}
                            width={44}
                            height={44}
                            className="rounded-circle object-fit-cover"
                            />
                        </div>
                        <div>
                            <div className="fw-semibold small lh-1">{t.name}</div>
                            <div className="text-muted small">{t.role}</div>
                        </div>
                        </div>

                        <div className="newtesti-stars mb-2">{renderStars(t.rating)}</div>

                        <p className="newtesti-quote small mb-3">"{t.quote}"</p>

                        <div className="d-flex flex-wrap gap-2">
                        {t.tags.map((tag, idx) => (
                            <span key={idx} className="newtesti-tag badge rounded-pill">
                            {tag}
                            </span>
                        ))}
                        </div>
                    </div>
                    </div>
                ))}
            </div>

            </div>
        </div>
    
      </section>

      {/* Component-scoped helper styles (keep in global CSS if you prefer) */}
      <style jsx global>{`
        /* ====== Testimonials (newtesti-*) ====== */
        .newtesti-card {
          background: #eef5ff;              /* light blue */
          border: 1px solid #e0ebff;
          transition: background .2s ease, color .2s ease, transform .2s ease;
        }
        .newtesti-card:hover {
          background: #1b5de6;              /* dark blue */
          border-color: #1b5de6;
          color: #ffffff;
          transform: translateY(-2px);
        }
        .newtesti-card:hover .text-muted { color: rgba(255,255,255,.85) !important; }
        .newtesti-card:hover .newtesti-quote { color: rgba(255,255,255,.95) !important; }
        .newtesti-card .fa-star { margin-right: 2px; font-size: .9rem; }
        .newtesti-card:hover .fa-star.text-secondary { color: rgba(255,255,255,.5) !important; }

        .newtesti-tag {
          background: #ffffff;
          color: #0f2b6b;
          border: 1px solid #cfe0ff;
          font-size: .72rem;
          padding: .35rem .6rem;
        }
        .newtesti-card:hover .newtesti-tag {
          background:#e9f0ff;
          color:#0b1f52;
          border-color:#e9f0ff;
        }

        .newtesti-avatar img { display:block; }

        /* Owl dots spacing/tint to match design */
        .newtesti-owl .owl-dots { margin-top: 14px; }
        .newtesti-owl .owl-dot span { width: 8px; height: 8px; background: #c9d8ff; }
        .newtesti-owl .owl-dot.active span { background: #1b5de6; }

        /* Card max width so 4 fit nicely on large screens (Owl responsive handles counts) */
        .newtesti-owl .item { padding: 2px 0; }
        
        .newtesti-owl-two.owl-rtl .newtesti-card {
            direction: ltr;
            text-align: left;
        }

      `}</style>
    </>
  );
};

export default TestimonialNew;
