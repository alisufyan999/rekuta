'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faLocationDot,
  faShieldHalved,
  faDollarSign,
  faBookmark,
  faArrowRight,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

type SimilarRole = {
  id: number;
  title: string;
  time: string;
  mode: string;
  salary: string;
  status: string;
};

const SIMILAR: SimilarRole[] = [
  { id: 1, title: 'Senior Front End Developer', time: '20 Hours Ago', mode: 'Remote Workly', salary: '$3.00 - $4.00', status: 'Actively Recruiting' },
  { id: 2, title: 'Senior Front End Developer', time: '20 Hours Ago', mode: 'Remote Workly', salary: '$3.00 - $4.00', status: 'Actively Recruiting' },
  { id: 3, title: 'Senior Front End Developer', time: '20 Hours Ago', mode: 'Remote Workly', salary: '$3.00 - $4.00', status: 'Actively Recruiting' },
];

const JobDescription: React.FC = () => {
  return (
    <section className="jobdescription-wrap section-padding pt-0">
        <div className="container">
            <div className="row g-4">
            {/* ====================== LEFT: main description ====================== */}
            <div className="col-12 col-lg-8">
            <h2 className="jobdescription-title mb-2">Senior Front End Developer</h2>
            <p className="text-muted jobdescription-intro mb-4">
                We’re looking for a passionate and experienced Senior Front End Developer to join our team.
                You’ll collaborate closely with designers, product managers, and back-end engineers to deliver
                seamless, high-performance user experiences. If you love building clean, scalable, and intuitive
                interfaces, this role is for you.
            </p>

            <hr/>

            {/* Responsibilities */}
            <div className="jobdescription-box mb-4 pb-4">
                <h5 className="jobdescription-subtitle mb-3">Responsibilities</h5>
                <ul className="jobdescription-list mb-0">
                <li>Lead the development of responsive, user-friendly web applications using modern front-end frameworks.</li>
                <li>Collaborate with UI/UX designers to transform designs into functional code.</li>
                <li>Optimize applications for maximum speed, scalability, and cross-browser compatibility.</li>
                <li>Write clean, maintainable, and testable code following best practices.</li>
                <li>Mentor junior developers and provide technical guidance.</li>
                <li>Stay updated on emerging technologies and propose innovative solutions.</li>
                <li>Collaborate with UI/UX designers to transform designs into functional code.</li>
                </ul>
            </div>

            {/* Requirements */}
            <div className="jobdescription-box mb-4 pb-4">
                <h5 className="jobdescription-subtitle mb-3">Requirements</h5>
                <ul className="jobdescription-list mb-0">
                <li>5+ years of experience in front-end development.</li>
                <li>Strong proficiency in JavaScript, TypeScript, React, and modern CSS frameworks.</li>
                <li>Solid understanding of RESTful APIs, GraphQL, and integration best practices.</li>
                <li>Experience with version control (Git) and CI/CD pipelines.</li>
                <li>Knowledge of performance optimization and accessibility standards.</li>
                <li>Excellent problem-solving and communication skills.</li>
                <li>Collaborate with UI/UX designers to transform designs into functional code.</li>
                </ul>
            </div>

            {/* Nice to Have */}
            <div className="jobdescription-box mb-4 pb-4">
                <h5 className="jobdescription-subtitle mb-3">Nice to Have</h5>
                <ul className="jobdescription-list mb-0">
                <li>Familiarity with state management libraries (Redux, Zustand, or Recoil).</li>
                <li>Experience with testing frameworks like Jest, Cypress, or Playwright.</li>
                <li>Knowledge of design systems and component libraries.</li>
                <li>Exposure to cloud environments (AWS, GCP, or Azure).</li>
                </ul>
            </div>

            {/* Why Join Us */}
            <div className="jobdescription-box" style={{borderBottom: 'none'}}>
                <h5 className="jobdescription-subtitle mb-3">Why Join Us?</h5>
                <ul className="jobdescription-list mb-3">
                <li>Opportunity to work on impactful, user-facing applications.</li>
                <li>A collaborative and innovative environment.</li>
                <li>Competitive salary and benefits.</li>
                <li>Remote-friendly with flexible working hours.</li>
                </ul>

                <div className="d-flex flex-wrap align-items-center gap-2 mt-4">
                <button className="btn btn-primary btn-pill width-fit">
                    Apply Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </button>

                <span className="text-muted ms-auto">Like what you see? Share with a friend.</span>
                <div className="d-flex gap-2">
                    <a className="btn jobdescription-share" href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a className="btn jobdescription-share" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a className="btn jobdescription-share" href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
                </div>
            </div>
            </div>

            {/* ====================== RIGHT: similar roles ====================== */}
            <aside className="col-12 col-lg-4">
            <h5 className="jobdescription-aside-title mb-3">Similar Roles</h5>

            <div className="d-grid gap-3">
                {SIMILAR.map((s, i) => (
                <article key={s.id} className="jobdescription-rolecard p-3 p-md-4 rounded-4">
                    <div className="d-flex align-items-start justify-content-between mb-2">
                    <span className="badge jobdescription-badge">Full Time</span>
                    <button className="btn btn-sm jobdescription-save" aria-label="save">
                        <FontAwesomeIcon icon={faBookmark} />
                    </button>
                    </div>

                    <h6 className="jobdescription-role-title mb-1">{s.title}</h6>
                    <p className="text-muted small mb-3">
                    Collaborate with back end developers to improve usability
                    </p>

                    <ul className="list-unstyled jobdescription-rolemeta mb-3">
                    <li><FontAwesomeIcon icon={faClock} className="me-2" />{s.time}</li>
                    <li><FontAwesomeIcon icon={faDollarSign} className="me-2" />{s.salary}</li>
                    <li><FontAwesomeIcon icon={faLocationDot} className="me-2" />{s.mode}</li>
                    <li><FontAwesomeIcon icon={faShieldHalved} className="me-2" />{s.status}</li>
                    </ul>

                    <button className="btn jobdescription-more">More Details</button>
                </article>
                ))}
            </div>
            </aside>
        </div>
        </div>
      
    </section>
  );
};

export default JobDescription;
