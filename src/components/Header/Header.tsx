'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/job', label: 'Jobs', isActive: true },
    { href: '#', label: 'Candidates' },
    { href: 'services/service-detail', label: 'Services' },
    { href: '#', label: 'Insights' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-2">
      <div className="container align-items-center">
        {/* Left: Logo */}
        <Link className="navbar-brand fw-bold header-logo m-0" href="/">
          LOGO
        </Link>

        {/* Mobile toggler */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mainNav"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Center: Nav */}
        <div 
          className={`navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} 
          id="mainNav"
        >
          <ul className="navbar-nav gap-lg-4 gap-3 align-items-lg-center">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link 
                  className={`nav-link header-link ${item.isActive ? 'active-dot' : ''}`} 
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: My Account */}
        <Link 
          href="#" 
          className="btn btn-link d-none d-lg-inline-flex align-items-center text-decoration-none header-account"
        >
          <span className="account-circle me-2"></span>
          <span className="fw-semibold text-dark">My Account</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;