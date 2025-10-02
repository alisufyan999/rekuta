'use client';

import React, { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faFileLines,
  faCloudArrowUp,

} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

type Preview = {
  url?: string;
  name: string;
  type: string;
  sizeKB: number;
  isImage: boolean;
};

function useFilePreview() {
  const [file, setFile] = useState<File | null>(null);

  const preview: Preview | null = useMemo(() => {
    if (!file) return null;
    const isImage = /^image\//.test(file.type);
    return {
      url: isImage ? URL.createObjectURL(file) : undefined,
      name: file.name,
      type: file.type || 'file',
      sizeKB: Math.round(file.size / 1024),
      isImage,
    };
  }, [file]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return { file, setFile, preview, onChange, onDrop, onDragOver };
}

const JobApply: React.FC = () => {
  const resume = useFilePreview();
  const cover = useFilePreview();

  const responsibilities = [
    'Lead the development of responsive, user-friendly web applications using modern front-end frameworks.',
    'Collaborate with UI/UX designers to transform designs into functional code.',
    'Optimize applications for maximum speed, scalability, and cross-browser compatibility.',
    'Write clean, maintainable, and testable code following best practices.',
    'Mentor junior developers and provide technical guidance.',
    'Stay updated on emerging technologies and propose innovative solutions.',
    'Collaborate with UI/UX designers to transform designs into functional code.',
  ];

  const requirements = [
    '5+ years of experience in front-end development.',
    'Strong proficiency in JavaScript, TypeScript, React, and modern CSS frameworks.',
    'Solid understanding of RESTful APIs, GraphQL, and integration best practices.',
    'Experience with version control (Git) and CI/CD pipelines.',
    'Knowledge of performance optimization and accessibility standards.',
    'Excellent problem-solving and communication skills.',
    'Collaborate with UI/UX designers to transform designs into functional code.',
  ];

  const niceToHave = [
    'Familiarity with state management libraries (Redux, Zustand, or Recoil).',
    'Experience with testing frameworks like Jest, Cypress, or Playwright.',
    'Knowledge of design systems and component libraries.',
    'Exposure to cloud environments (AWS, GCP, or Azure).',
  ];

  const whyJoin = [
    'Opportunity to work on impactful, user-facing applications.',
    'A collaborative and innovative environment.',
    'Competitive salary and benefits.',
    'Remote-friendly with flexible working hours.',
  ];

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // submit logic / API here
    alert('Application submitted!');
  };

  return (
    <section className="jobapplication-apply section-padding pt-0">
      <div className="container">
        <div className="row g-4">
          {/* Left: Form panel */}
          <div className="col-12 col-lg-6">
            <div className="jobapplication-panel p-3 p-md-4 rounded-4">
              <h4 className="jobapplication-heading mb-3">Start Your Application</h4>

              <form className="jobapplication-form" onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label jobapplication-label">Full Name (Required)</label>
                  <input className="form-control jobapplication-input" placeholder="John Doe" required />
                </div>

                <div className="mb-3">
                  <label className="form-label jobapplication-label">Email Address (Required)</label>
                  <input type="email" className="form-control jobapplication-input" placeholder="abc@company.com" required />
                </div>

                <div className="mb-3">
                  <label className="form-label jobapplication-label">Phone Number (Optional)</label>
                  <input className="form-control jobapplication-input" placeholder="+123 456 789 74" />
                </div>

                <div className="mb-3">
                  <label className="form-label jobapplication-label">Portfolio / GitHub (Optional)</label>
                  <input className="form-control jobapplication-input" placeholder="myportfolio.com" />
                </div>

                {/* Resume Upload */}
                <div className="mb-3">
                  <label className="form-label jobapplication-label">Resume / CV Upload (Required)</label>
                  <div
                    className="jobapplication-upload text-center p-4"
                    onDrop={resume.onDrop}
                    onDragOver={resume.onDragOver}
                  >
                    {!resume.preview ? (
                      <>
                        <FontAwesomeIcon icon={faCloudArrowUp} className="jobapplication-upload-icon mb-2" />
                        <p className="mb-1">Choose a file or drag &amp; drop it here</p>
                        <p className="text-muted small mb-3">JPEG, PNG, PDF, and DOC formats, up to 50MB</p>
                        <label className="btn btn-primary btn-pill width-fit mb-0" htmlFor="resumeFile">Browse File</label>
                        <input id="resumeFile" type="file" className="visually-hidden" onChange={resume.onChange} required />
                      </>
                    ) : (
                      <div className="jobapplication-preview">
                        {resume.preview.isImage ? (
                          <img src={resume.preview.url} alt={resume.preview.name} className="img-fluid jobapplication-preview-img mb-2" />
                        ) : (
                          <div className="jobapplication-file d-inline-flex align-items-center gap-2 mb-2">
                            <FontAwesomeIcon icon={faFileLines} />
                            <span className="small">{resume.preview.name}</span>
                          </div>
                        )}
                        <div className="text-muted small mb-2">
                          {resume.preview.type} • {resume.preview.sizeKB} KB
                        </div>
                        <div className="d-flex justify-content-center gap-2">
                          <label className="btn jobapplication-btn mb-0" htmlFor="resumeReplace">Replace</label>
                          <input id="resumeReplace" type="file" className="visually-hidden" onChange={resume.onChange} />
                          <button type="button" className="btn btn-outline-secondary" onClick={() => resume.setFile(null)}>Remove</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cover Letter Upload */}
                <div className="mb-3">
                  <label className="form-label jobapplication-label">Cover Letter / Short Introduction (Optional)</label>
                  <div
                    className="jobapplication-upload text-center p-4"
                    onDrop={cover.onDrop}
                    onDragOver={cover.onDragOver}
                  >
                    {!cover.preview ? (
                      <>
                        <FontAwesomeIcon icon={faCloudArrowUp} className="jobapplication-upload-icon mb-2" />
                        <p className="mb-1">Choose a file or drag &amp; drop it here</p>
                        <p className="text-muted small mb-3">JPEG, PNG, PDF, and DOC formats, up to 50MB</p>
                        <label className="btn btn-primary btn-pill width-fit mb-0" htmlFor="coverFile">Browse File</label>
                        <input id="coverFile" type="file" className="visually-hidden" onChange={cover.onChange} />
                      </>
                    ) : (
                      <div className="jobapplication-preview">
                        {cover.preview.isImage ? (
                          <img src={cover.preview.url} alt={cover.preview.name} className="img-fluid jobapplication-preview-img mb-2" />
                        ) : (
                          <div className="jobapplication-file d-inline-flex align-items-center gap-2 mb-2">
                            <FontAwesomeIcon icon={faFileLines} />
                            <span className="small">{cover.preview.name}</span>
                          </div>
                        )}
                        <div className="text-muted small mb-2">
                          {cover.preview.type} • {cover.preview.sizeKB} KB
                        </div>
                        <div className="d-flex justify-content-center gap-2">
                          <label className="btn jobapplication-btn mb-0" htmlFor="coverReplace">Replace</label>
                          <input id="coverReplace" type="file" className="visually-hidden" onChange={cover.onChange} />
                          <button type="button" className="btn btn-outline-secondary" onClick={() => cover.setFile(null)}>Remove</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label jobapplication-label">Why are you interested in this role? (Required)</label>
                  <textarea className="form-control jobapplication-textarea" rows={3} placeholder="Write briefly" required />
                </div>

                <div className="mb-4">
                  <label className="form-label jobapplication-label">Availability / Notice Period (Required)</label>
                  <input className="form-control jobapplication-input" placeholder="Write Your Notice Period in days" required />
                </div>

                <button className="btn btn-primary btn-pill w-100" type="submit">Apply Now</button>
              </form>
            </div>
          </div>

          {/* Right: Job details */}
          <div className="col-12 col-lg-6">
            <div className="jobapplication-right">
              <h4 className="jobapplication-role mb-2">Senior Front End Developer</h4>
              <p className="text-muted mb-4">
                We’re looking for a passionate and experienced Senior Front End Developer to join our team.
                You’ll collaborate closely with designers, product managers, and back-end engineers to deliver
                seamless, high-performance user experiences. If you love building clean, scalable, and intuitive
                interfaces, this role is for you.
              </p>

              <div className="jobapplication-box mb-4 pb-4">
                <h6 className="jobapplication-subtitle mb-2">Responsibilities</h6>
                <ul className="jobapplication-points mb-0">
                  {responsibilities.map((t) => (
                    <li key={t}><FontAwesomeIcon icon={faAngleRight} className="me-2" />{t}</li>
                  ))}
                </ul>
              </div>

              <div className="jobapplication-box mb-4 pb-4">
                <h6 className="jobapplication-subtitle mb-2">Requirements</h6>
                <ul className="jobapplication-points mb-0">
                  {requirements.map((t) => (
                    <li key={t}><FontAwesomeIcon icon={faAngleRight} className="me-2" />{t}</li>
                  ))}
                </ul>
              </div>

              <div className="jobapplication-box mb-4 pb-4">
                <h6 className="jobapplication-subtitle mb-2">Nice to Have</h6>
                <ul className="jobapplication-points mb-0">
                  {niceToHave.map((t) => (
                    <li key={t}><FontAwesomeIcon icon={faAngleRight} className="me-2" />{t}</li>
                  ))}
                </ul>
              </div>

              <div className="jobapplication-box mb-4 pb-4">
                <h6 className="jobapplication-subtitle mb-2">Why Join Us?</h6>
                <ul className="jobapplication-points mb-0">
                  {whyJoin.map((t) => (
                    <li key={t}><FontAwesomeIcon icon={faAngleRight} className="me-2" />{t}</li>
                  ))}
                </ul>
              </div>

              {/* Social Media Row */}
              <div className="jobapplication-social mt-4 d-flex align-items-center gap-3">
                <span className="text-muted small me-2">Like what you see? Share with a friend.</span>
                <div className="d-flex gap-2">
                  <a href="#" className="jobapplication-social-icon">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="jobapplication-social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="jobapplication-social-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default JobApply;
