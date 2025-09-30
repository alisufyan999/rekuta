'use client';

import Image from 'next/image';
import { useEffect } from 'react';

// Add this type declaration
declare global {
  interface Window {
    $: any;
  }
}

const Hero = () => {
  useEffect(() => {
    // Initialize Owl Carousel when component mounts
    const initCarousel = () => {
      if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
        window.$('#trusted-logos-carousel').owlCarousel({
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
    const timer = setTimeout(initCarousel, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pb-5">
      <div className="container">
        <div className="hero-wrap p-3 p-md-4">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-card p-4 p-md-5 h-100">
                <span className="badge text-white rounded-pill px-3 py-2 mb-3">
                  Best Recommendation Job
                </span>

                <h1 className="display-5 mb-3">
                  Reach Professional<br />
                  Career Based on AI<br />
                  Technology
                </h1>

                <p className="opacity-75 mb-4">
                  Embracing AI in our work enhances innovation, boosts productivity, and increases
                  job satisfaction. AI tools streamline processes, allowing employees to focus on strategy.
                </p>

                <div className="d-flex gap-3">
                  <a href="#" className="btn btn-dark btn-pill">Get Started Now</a>
                  <a href="#" className="btn btn-outline-light btn-pill">Learn More</a>
                </div>

                <div>
                  <div className="mt-5 mb-4 meduim opacity-75 text-center">
                    <h4>Trusted by Company</h4>
                  </div>
                  <div className="owl-carousel owl-theme" id="trusted-logos-carousel">
                    <div className="item">
                      <Image
                        src="/assets/images/company-logo.png"
                        className="trusted-logo"
                        alt="Company 1"
                        width={120}
                        height={60}
                      />
                    </div>
                    <div className="item">
                      <Image
                        src="/assets/images/company-logo-1.png"
                        className="trusted-logo"
                        alt="Company 2"
                        width={120}
                        height={60}
                      />
                    </div>
                    <div className="item">
                      <Image
                        src="/assets/images/company-logo-2.png"
                        className="trusted-logo"
                        alt="Company 3"
                        width={120}
                        height={60}
                      />
                    </div>
                    <div className="item">
                      <Image
                        src="/assets/images/company-logo-3.png"
                        className="trusted-logo"
                        alt="Company 4"
                        width={120}
                        height={60}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className='bannerFormBg'>
                <div className="card search-card p-3 p-md-4">
                  <div className="d-flex align-items-center mb-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle me-3"
                      style={{ width: '44px', height: '44px' }}
                    >
                      <Image
                        src="/assets/images/Vector.svg"
                        className="w-100"
                        style={{ maxWidth: '1rem' }}
                        alt="AI Icon"
                        width={16}
                        height={16}
                      />
                    </span>
                    <h5 className="mb-0">AI for Recommendation Jobs</h5>
                  </div>
                  <div className="rail mb-3">
                    <ul className="nav nav-pills justify-content-between" id="jobTabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active px-4 py-2"
                          id="remote-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#remote"
                          type="button"
                          role="tab"
                          aria-controls="remote"
                          aria-selected="true"
                        >
                          Remote
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link px-4 py-2"
                          id="freelance-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#freelance"
                          type="button"
                          role="tab"
                          aria-controls="freelance"
                          aria-selected="false"
                        >
                          Freelance
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link px-4 py-2"
                          id="onsite-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#onsite"
                          type="button"
                          role="tab"
                          aria-controls="onsite"
                          aria-selected="false"
                        >
                          Onsite
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Tab panes */}
                  <div className="tab-content" id="jobTabsContent">
                    {/* Remote */}
                    <div
                      className="tab-pane fade show active"
                      id="remote"
                      role="tabpanel"
                      aria-labelledby="remote-tab"
                      tabIndex={0}
                    >
                      <div className="mb-2 small text-muted fw-semibold">Location</div>
                      <select className="form-select mb-3">
                        <option value="bali">Bali Indonesia</option>
                        <option value="karachi">Karachi Pakistan</option>
                        <option value="dubai">Dubai UAE</option>
                        <option value="singapore">Singapore</option>
                      </select>

                      <div className="mb-2 small text-muted fw-semibold">Job Name</div>
                      <select className="form-select mb-4">
                        <option value="ui-ux">UI/UX Designer</option>
                        <option value="frontend">Frontend Engineer</option>
                        <option value="product">Product Manager</option>
                      </select>

                      <button className="btn btn-dark w-100">Search</button>
                    </div>

                    {/* Freelance */}
                    <div
                      className="tab-pane fade"
                      id="freelance"
                      role="tabpanel"
                      aria-labelledby="freelance-tab"
                      tabIndex={0}
                    >
                      <div className="mb-2 small text-muted fw-semibold">Location</div>
                      <select className="form-select mb-3">
                        <option value="bali">Bali Indonesia</option>
                        <option value="lahore">Lahore Pakistan</option>
                        <option value="riyadh">Riyadh KSA</option>
                      </select>

                      <div className="mb-2 small text-muted fw-semibold">Job Name</div>
                      <select className="form-select mb-4">
                        <option value="graphic">Graphic Designer</option>
                        <option value="seo">SEO Specialist</option>
                        <option value="content">Content Writer</option>
                      </select>

                      <button className="btn btn-dark w-100">Search</button>
                    </div>

                    {/* Onsite */}
                    <div
                      className="tab-pane fade"
                      id="onsite"
                      role="tabpanel"
                      aria-labelledby="onsite-tab"
                      tabIndex={0}
                    >
                      <div className="mb-2 small text-muted fw-semibold">Location</div>
                      <select className="form-select mb-3">
                        <option value="bali">Bali Indonesia</option>
                        <option value="islamabad">Islamabad Pakistan</option>
                        <option value="london">London UK</option>
                      </select>

                      <div className="mb-2 small text-muted fw-semibold">Job Name</div>
                      <select className="form-select mb-4">
                        <option value="account">Account Executive</option>
                        <option value="hr">HR Manager</option>
                        <option value="data">Data Analyst</option>
                      </select>

                      <button className="btn btn-dark w-100">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;