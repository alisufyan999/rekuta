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

interface BlogPost {
  id: number;
  image: string;
  day: string;
  month: string;
  category: string;
  shareCount: number;
  title: string;
  description: string;
}

const BlogSlider = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: "/assets/images/blog/blogcard1.png",
      day: "15",
      month: "January",
      category: "Development",
      shareCount: 20,
      title: "Blog Title- Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
    },
    {
      id: 2,
      image: "/assets/images/blog/blogcard1.png",
      day: "15",
      month: "January",
      category: "Development",
      shareCount: 20,
      title: "Blog Title- Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
    },
    {
      id: 3,
      image: "/assets/images/blog/blogcard1.png",
      day: "15",
      month: "January",
      category: "Development",
      shareCount: 20,
      title: "Blog Title- Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
    }
  ];

  useEffect(() => {
    // Load FontAwesome CSS
    if (typeof window !== 'undefined' && !document.querySelector('link[href*="font-awesome"]')) {
      const fontAwesomeCSS = document.createElement('link');
      fontAwesomeCSS.rel = 'stylesheet';
      fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(fontAwesomeCSS);
    }

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

      // Initialize carousel after a short delay to ensure DOM is ready
      setTimeout(() => {
        if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
          $('#insightsCarousel').owlCarousel({
            loop: true,
            margin: 16,
            dots: true,
            nav: true,
            navText: [
              '<i class="fas fa-chevron-left"></i>',
              '<i class="fas fa-chevron-right"></i>'
            ],
            smartSpeed: 550,
            responsive: {
              0:   { 
                items: 1,
                nav: false,
                dots: true
              },
              768: { 
                items: 2,
                nav: true,
                dots: true
              },
              1200:{ 
                items: 3,
                nav: true,
                dots: true
              }
            }
          });
        }
      }, 200);
    };

    loadScripts();
  }, []);

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <h2 className="display-5 text-center mb-4">Talent insights</h2>

        {/* Owl Carousel */}
        <div id="insightsCarousel" className="owl-carousel owl-theme">
          {blogPosts.map((post) => (
            <div key={post.id} className="item">
              <article className="card blog-card rounded-4 p-3 p-md-4">
                <div className="position-relative mb-3">
                  <img 
                    className="w-100 rounded-3 border" 
                    src={post.image} 
                    alt="cover"
                  />
                  <div className="date-badge">
                    <div className="fw-bold lh-1">{post.day}</div>
                    <small className="text-white-50">{post.month}</small>
                  </div>
                </div>

                <div className="small mb-2">
                  <a href="#" className="link-primary text-decoration-none">{post.category}</a>
                  <span className="mx-2 text-muted">•</span>
                  <a href="#" className="link-primary text-decoration-none">Share({post.shareCount})</a>
                </div>

                <h5 className="">{post.title}</h5>
                <p className="text-muted">
                  {post.description}
                </p>

                <a href="#" className="btn btn-dark w-100 rounded-pill py-3">Read This Blog</a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;