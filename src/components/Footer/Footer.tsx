"use client";

import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your subscription logic here
    setEmail('');
  };

  return (
    <footer className="footer-dark pt-5 pb-4">
      <div className="container">
        {/* Top lead + subscribe */}
        <div className="row align-items-end g-3 pb-4 mb-4 border-bottom border-secondary-subtle">
          <div className="col-lg-6">
            <h3 className="text-white mb-2">Streamlined Job Search For Success</h3>
            <p className="text-white-50 mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="col-lg-6">
            <form 
              className="d-flex gap-2 justify-content-lg-end subscribeform" 
              onSubmit={handleSubmit}
              id="subscribeform"
            >
              <input 
                type="email" 
                className="form-control form-control-lg rounded-pill bg-dark text-white border-secondary"
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button 
                className="btn btn-light btn-lg rounded-pill fw-semibold px-4" 
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <div className="text-white-50 small mt-2">We promise not spam.</div>
          </div>
        </div>

        {/* Columns */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="text-white mb-3">Find Us</h6>
            <ul className="list-unstyled small text-white-50 mb-3">
              <li className="mb-2">Mon - Sat : 8am - 9pm</li>
              <li className="mb-2">
                <span className="text-white fw-semibold">ABC Building , ABC Country , ABC City</span>
              </li>
            </ul>
            <div className="small text-white-50 mb-1">Project offers</div>
            <div className="fw-semibold mb-3">
              <a className="link-light text-decoration-none" href="mailto:support@rekuta.com">
                support@rekuta.com
              </a>
            </div>
            <div className="small text-white-50 mb-2">Social Media</div>
            <div className="d-flex align-items-center gap-2 social-icons-modern">
              <a href="#" className="text-white-50 text-decoration-none" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <h6 className="text-white mb-3">Our Services</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a className="link-footer" href="#">Talent Sourcing</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">Employer Branding</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">HR Consulting</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">Talent Mapping</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">Recruitment Process</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">Talent Management</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">Skill Training</a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a className="link-footer" href="#">About Company</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">Help Center</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">Affordable Pricing</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">FAQ's</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">Disclaimer</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">Blog & Articles</a>
              </li>
              <li className="mb-2">
                <a className="link-footer" href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-3">
            <h6 className="text-white mb-3">Download Our App</h6>
            <p className="text-white-50 small mb-0">
              Download our App and get extra AI help to find a job that suits you. Hurry Up!!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 pt-3 border-top border-secondary-subtle">
          <div className="d-flex align-items-center gap-3">
            <span className="text-white fs-4">LOGO</span>
            <span className="text-white-50 small">Copyright © 2025 REKUTA. All rights reserved.</span>
          </div>
          <ul className="list-inline m-0 small">
            <li className="list-inline-item">
              <a className="link-footer" href="#">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a className="link-footer" href="#">Terms & Conditions</a>
            </li>
            <li className="list-inline-item">
              <a className="link-footer" href="#">Accessibility Center</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






