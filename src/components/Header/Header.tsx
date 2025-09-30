'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/job', label: 'Jobs', isActive: true },
    { href: '/candidate', label: 'Candidate' },
    { href: 'services/service-detail', label: 'Services' },
    { href: '/blog', label: 'Insights' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg bg-white ${isScrolled ? 'fixed-top' : ''}`}
      style={isScrolled ? { zIndex: 1030 } : {}}>
      <div className="container align-items-center">
        <Link className="navbar-brand fw-bold header-logo m-0" href="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mainNav"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="d-none d-lg-flex justify-content-center flex-grow-1">
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
        <div className={`mobile-menu d-lg-none ${isMenuOpen ? 'open' : ''}`} id="mainNav">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Link className="navbar-brand fw-bold header-logo m-0" href="/">
              LOGO
            </Link>
            <button className="close-btn" onClick={toggleMenu}>×</button>
          </div>
          <ul className="navbar-nav gap-3">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  className={`nav-link header-link ${item.isActive ? 'active-dot' : ''}`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/login"
          className="btn btn-link d-none d-lg-inline-flex align-items-center text-decoration-none header-account">
          <FontAwesomeIcon icon={faUser} className="account-circle me-2" />
          <span className="text-dark">My Account</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
