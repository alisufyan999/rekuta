'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Services = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container">
        {/* Header / intro */}
        <div className="row g-4 align-items-start">
          <div className="col-lg-6">
            <h2 className="display-4 mb-3">
              Recruiting Across All Career Levels.
            </h2>
            <p className="lead text-muted mb-0">
              We take the time to listen to, and fully connect with, our clients and
              candidates. That's why we're the world's most trusted talent solutions business.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="card card-soft shadow-sm p-4 p-md-5 position-relative services-card">
              <h3 className="h2 mb-3">Recruitment</h3>
              <p className="text-muted mb-4">
                Leverage our specialized industry expertise, and global reach to
                champion your story and connect you with the best professionals who
                will transform your business.
              </p>
              <Link href="#" className="btn btn-primary btn-pill width-fit">Learn More</Link>

              {/* decorative image */}
              <div className="services-illus">
                <Image
                  src="/assets/images/service1.png" /* replace with your file */
                  alt="Recruitment"
                  width={88}
                  height={88}
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Two cards below */}
        <div className="row g-4 mt-2">
          <div className="col-lg-6">
            <div className="card card-soft shadow-sm p-4 p-md-5 position-relative services-card">
              <h3 className="h2 mb-3">Outsourcing</h3>
              <p className="text-muted mb-4">
                Leverage our specialized industry expertise, and global reach to
                champion your story and connect you with the best professionals who
                will transform your business.
              </p>
              <Link href="#" className="btn btn-primary btn-pill width-fit">Learn More</Link>

              {/* decorative image */}
              <div className="services-illus">
                <Image
                  src="/assets/images/service1.png" /* replace */
                  alt="Outsourcing"
                  width={88}
                  height={88}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card-blue shadow-sm p-4 p-md-5 position-relative services-card">
              <h3 className="h2 mb-3">Talent Advisory</h3>
              <p className="mb-4 opacity-75">
                Experience agile recruitment outsourcing solutions tailored to your
                unique requirements, seamlessly scalable to match your evolving needs
                and objectives.
              </p>
              <Link href="#" className="btn btn-light btn-pill text-dark width-fit">Learn More</Link>

              {/* decorative image (light version works on blue) */}
              <div className="services-illus services-illus-light">
                <Image
                  src="/assets/images/service2.png" /* replace */
                  alt="Talent Advisory"
                  width={88}
                  height={88}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
