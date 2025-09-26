'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SignupMain: React.FC = () => {
  const [choice, setChoice] = useState<'employers' | 'candidates' | null>(null);
  const [showForm, setShowForm] = useState(false);

  const openForm = (role: 'employers' | 'candidates') => {
    setChoice(role);
    setShowForm(true);
  };

  return (
    <section className="loginmain-section section-padding">
      <div className="container">
        <div className="row g-4">
          {/* LEFT: Blue intro panel */}
          <div className="col-12 col-lg-6">
            <div className="loginmain-left position-relative rounded-4 p-4 p-md-5 h-100">
              <blockquote className="loginmain-quote mb-4">
                “Discover ideal candidates instantly with Rekuta.ai’s powerful AI.
                Replace outdated ATS systems with one platform that streamlines your
                entire recruitment workflow.”
              </blockquote>

              <ul className="list-unstyled d-grid gap-3 mb-0">
                <li className="d-flex align-items-center gap-3 loginmain-badge">
                  <span className="loginmain-badge-icon">
                    <Image src="/assets/images/login/icon1.png" alt="Award" width={50} height={50} />
                  </span>
                  <div>
                    <div className="fw-semibold text-white">2025 Award</div>
                    <div className="text-white-50">Top 1 UI/UX Designer</div>
                  </div>
                </li>

                <li className="d-flex align-items-center gap-3 loginmain-badge">
                  <span className="loginmain-badge-icon">
                    <Image src="/assets/images/login/icon1.png" alt="Award" width={50} height={50} />
                  </span>
                  <div>
                    <div className="fw-semibold text-white">Product Design Award</div>
                    <div className="text-white-50">Best Mobile UX 2024</div>
                  </div>
                </li>

                <li className="d-flex align-items-center gap-3 loginmain-badge">
                  <span className="loginmain-badge-icon">
                    <Image src="/assets/images/login/icon1.png" alt="Publication" width={50} height={50} />
                  </span>
                  <div>
                    <div className="fw-semibold text-white">UX Publication Feature</div>
                    <div className="text-white-50">Medium: Top UX Article</div>
                  </div>
                </li>
              </ul>

              {/* decorative arcs */}
              <div className="loginmain-arc-1" aria-hidden />
              <div className="loginmain-arc-2" aria-hidden />
              <div className="loginmain-arc-3" aria-hidden />
            </div>
          </div>

          {/* RIGHT: Sign up / Choose account */}
          <div className="col-12 col-lg-6">
            <div className="loginmain-right position-relative rounded-4 p-4 p-md-5 h-100">
              <h3 className="loginmain-title mb-1">Sign up to Rekuta.ai</h3>
              <p className="text-muted mb-4">
                Find the right people. Find the right role. <br className="d-none d-md-inline" />
                Create your account to manage jobs, talent pipelines, and applications.
              </p>

              <div className="mb-3 fw-semibold text-center">Choose Your Account Type</div>

              <div className="row g-3 mb-4">
                {/* Employers */}
                <div className="col-12 col-md-6">
                  <Link
                    href="/employers"
                    onClick={(e) => { e.preventDefault(); openForm('employers'); }}
                    className={
                      'loginmain-option w-100 text-start rounded-4 p-3 p-lg-4 d-block ' +
                      (choice === 'employers' ? 'is-active' : '')
                    }
                  >
                    <div className="text-center align-items-center gap-3 mb-2">
                      <span className="loginmain-option-icon">
                        <Image
                          src="/assets/images/login/emp.png"
                          alt="Employers"
                          width={150}
                          height={150}
                          className="mx-auto"
                        />
                      </span>
                      <div className="fw-semibold">Employers</div>
                    </div>
                    <div className="text-muted small text-center">
                      Hire smarter with AI insights
                    </div>
                  </Link>
                </div>

                {/* Candidates */}
                <div className="col-12 col-md-6">
                  <Link
                    href="/candidates"
                    onClick={(e) => { e.preventDefault(); openForm('candidates'); }}
                    className={
                      'loginmain-option w-100 text-start rounded-4 p-3 p-lg-4 d-block ' +
                      (choice === 'candidates' ? 'is-active' : '')
                    }
                  >
                    <div className="text-center align-items-center gap-3 mb-2">
                      <span className="loginmain-option-icon">
                        <Image
                          src="/assets/images/login/candidate.png"
                          alt="Candidates"
                          width={150}
                          height={150}
                          className="mx-auto"
                        />
                      </span>
                      <div className="fw-semibold">Candidates</div>
                    </div>
                    <div className="text-muted small text-center">
                      Find your next career move
                    </div>
                  </Link>
                </div>
              </div>

              <div className="text-muted small mb-3">
                Experience AI-powered recruitment with Rekuta.ai.
                Smarter hiring for employers; better career matches for candidates.
              </div>

              <button type="button" className="btn btn-primary btn-pill w-100">
                Next <span aria-hidden>›</span>
              </button>

              {/* ========= Overlay Sign Up Form ========= */}
              <div className={`loginmain-formwrap ${showForm ? 'show' : ''}`}>
                <div className="loginmain-formcard rounded-4 p-3 p-md-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="mb-0">{choice === 'employers' ? 'Employer' : 'Candidate'} Sign Up</h6>
                    <button
                      type="button"
                      className="btn btn-sm btn-link text-decoration-none"
                      onClick={() => setShowForm(false)}
                    >
                      Close
                    </button>
                  </div>

                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label small text-muted">Full name</label>
                        <input type="text" className="form-control loginmain-input" placeholder="John Doe" />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label small text-muted">Work email</label>
                        <input type="email" className="form-control loginmain-input" placeholder="you@company.com" />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label small text-muted">Password</label>
                        <input type="password" className="form-control loginmain-input" placeholder="•••••••" />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label small text-muted">Confirm password</label>
                        <input type="password" className="form-control loginmain-input" placeholder="•••••••" />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-pill w-100 mt-3">Sign Up</button>

                    <div className="text-center my-3 text-muted">or</div>

                    <button
                      type="button"
                      className="btn loginmain-google w-100 d-flex align-items-center justify-content-center gap-2"
                    >
                      <Image src="/assets/images/login/googleicon.png" alt="Google" width={18} height={18} />
                      <span>Sign Up With Google</span>
                    </button>

                    <div className="text-center small mt-3">
                      Already have an account? <a href="#" className="text-decoration-none">Sign in</a>
                    </div>
                  </form>
                </div>
              </div>
              {/* ========================================= */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupMain;
