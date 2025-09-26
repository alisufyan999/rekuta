'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faDollarSign,
  faLocationDot,
  faShieldHalved,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';

const Banner: React.FC = () => {
  return (
    <section className="section-padding">
        <div className="container">
            <div className="jobapplication-card position-relative rounded-4 p-4 p-lg-5">
            {/* bookmark */}
            <button
            className="btn jobapplication-save position-absolute end-0 top-0 translate-middle-y me-3 me-lg-4 mt-3 mt-lg-4"
            aria-label="Save job"
            type="button"
            title="Save"
            >
            <FontAwesomeIcon icon={faBookmark} />
            </button>

            <div className="row align-items-center g-4">
            {/* Left: title, subtitle, action */}
            <div className="col-12 col-lg-6">
                <span className="badge jobapplication-badge mb-3">Full Time</span>

                <h4 className="jobapplication-title mb-1">
                Senior Front End Developer
                </h4>
                <p className="jobapplication-sub mb-3">
                Collaborate with back end developers to improve usability
                </p>

                <button className="btn jobapplication-cta">View Details</button>
            </div>

            {/* Right: meta (2 per row on desktop, stacked on mobile) */}
            <div className="col-12 col-lg-6 text-end">
                <ul className="jobapplication-meta list-unstyled mb-0">
                <li>
                    <FontAwesomeIcon icon={faClock} className="me-2" />
                    20 Hours Ago
                </li>
                <li>
                    <FontAwesomeIcon icon={faDollarSign} className="me-2" />
                    $3.00 – $4.00
                </li>
                <li>
                    <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                    Remote Workly
                </li>
                <li>
                    <FontAwesomeIcon icon={faShieldHalved} className="me-2" />
                    Actively Recruiting
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
      
    </section>
  );
};

export default Banner;
