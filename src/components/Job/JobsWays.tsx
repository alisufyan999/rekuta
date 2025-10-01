'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const JobsWays: React.FC = () => {
  return (
    <section className="job-ways section-padding">
        <div className="container">
            {/* Heading */}
            <div className="text-center mb-4 mb-lg-5">
                <h2 className="job-ways-title mb-2">
                Thousands of jobs. Two easy ways to find them
                </h2>
                <p className="job-ways-subtitle mb-0">Technology and experience on your side</p>
            </div>

            {/* Cards */}
            <div className="row g-4 justify-content-center">
                {/* Upload resume */}
                <div className="col-12 col-md-10 col-lg-5">
                <div className="job-card job-card--light position-relative p-4 p-lg-5 rounded-4 h-100">
                    <h3 className="job-card-title mb-2">Upload your resume</h3>
                    <p className="job-card-text mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                    Aliquam in hendrerit urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut et massa mi. Aliquam in hendrerit urna.
                    </p>
                    <Link href="#" className="btn btn-primary btn-pill width-fit">Upload Your Resume</Link>

                    {/* clip icon */}
                    <div className="job-card-icon">
                    <Image 
                        src="/assets/images/job/icon1.png" 
                        alt="Upload Resume Icon" 
                        width={54} 
                        height={54}
                    />
                    </div>
                </div>
                </div>

                {/* Search jobs */}
                <div className="col-12 col-md-10 col-lg-5">
                <div className="job-card job-card--brand position-relative p-4 p-lg-5 rounded-4 h-100">
                    <h3 className="job-card-title job-card-title--onbrand mb-2">Search available jobs</h3>
                    <p className="job-card-text job-card-text--onbrand mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                    Aliquam in hendrerit urna.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut et massa mi. Aliquam in hendrerit urna.
                    </p>
                    <Link href="#" className="btn btn-light btn-pill text-dark width-fit">Search Jobs</Link>

                    {/* target icon */}
                    <div className="job-card-icon job-card-icon--onbrand">
                    <Image 
                        src="/assets/images/job/icon2.png" 
                        alt="Search Jobs Icon" 
                        width={56} 
                        height={56}
                    />
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    </section>
  );
};

export default JobsWays;
