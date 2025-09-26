'use client';

import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="section-padding">
        <div className="container">
            <div className="jobdescription-card position-relative rounded-4 p-4 p-lg-5">
            {/* top-right save/bookmark */}
            <button
            className="btn jobdescription-save position-absolute end-0 top-0 translate-middle-y me-3 me-lg-4 mt-3 mt-lg-4"
            aria-label="Save job"
            type="button"
            >
            ♡
            </button>

            <div className="row align-items-center g-4">
            {/* Left: title + subtitle + buttons */}
            <div className="col-12 col-lg">
                <span className="badge jobdescription-type mb-3">Full Time</span>

                <h4 className="jobdescription-title mb-1">
                Senior Front End Developer
                </h4>
                <p className="jobdescription-sub mb-3 mb-lg-4">
                Collaborate with back end developers to improve usability
                </p>

                <button className="btn jobdescription-apply">Apply</button>
            </div>

            {/* Right: meta list */}
            <div className="col-12 col-lg-auto">
                <ul className="jobdescription-meta list-unstyled mb-0">
                <li>⏱ 20 Hours Ago</li>
                <li>💰 $3.00 – $4.00</li>
                <li>📍 Remote Workly</li>
                <li>🛡 Actively Recruiting</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
      
    </section>
  );
};

export default Banner;
