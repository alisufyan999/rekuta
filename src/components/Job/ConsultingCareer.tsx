'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ConsultingCareer: React.FC = () => {
    return (
        <section className="job-career-section section-padding pt-0">
            <div className="container">
                <div className="row align-items-center g-4">
                    {/* Left: single composite image */}
                    <div className="col-12 col-lg-6 text-center">
                        <div className="job-hero-img-wrap mx-auto">
                            <Image
                                src="/assets/images/job/side1.png"  /* full image with person + cards */
                                alt="Build a rewarding consulting career"
                                width={640}
                                height={520}
                                priority
                                className="img-fluid job-hero-img"
                            />
                        </div>
                    </div>

                    {/* Right: content */}
                    <div className="col-12 col-lg-6">
                        <h2 className="job-title mb-3">
                            Build a rewarding <br /> consulting career with us
                        </h2>

                        <p className="job-lead mb-4">
                            Grow your career and join Robert Half’s national practice of Full-Time Engagement
                            Professionals.
                        </p>

                        <ul className="job-list list-unstyled mb-4">
                            <li className="d-flex gap-2 mb-2">
                                <span className="job-check" aria-hidden><i className="fa-solid fa-check" style={{ color: "#fff" }}></i></span>
                                Work on diverse and challenging projects across a variety of companies, from small and midsize
                                businesses to Fortune 500 firms.
                            </li>
                            <li className="d-flex gap-2">
                                <span className="job-check" aria-hidden><i className="fa-solid fa-check" style={{ color: "#fff" }}></i></span>
                                Leverage your skills and experiences and develop new ones — all as a salaried professional with
                                the benefits of a permanent role.
                            </li>
                        </ul>

                        <Link href="#" className="btn btn-primary btn-pill width-fit">Learn More</Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ConsultingCareer;
