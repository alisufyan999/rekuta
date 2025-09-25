'use client';

import React, { useMemo, useState } from 'react';

type Preview = {
  url: string;
  name: string;
  type: string;
  isImage: boolean;
  sizeKB: number;
};

const Profile: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const preview: Preview | null = useMemo(() => {
    if (!file) return null;
    const isImage = /^image\//.test(file.type);
    return {
      url: isImage ? URL.createObjectURL(file) : '',
      name: file.name,
      type: file.type || 'file',
      isImage,
      sizeKB: Math.round(file.size / 1024),
    };
  }, [file]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setFile(f);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <section className="container rk-profile-section section-padding pt-0">
      <div className="row g-4">
        {/* Left: vertical tabs */}
        <aside className="col-12 col-md-4 col-lg-3">
          <div className="rk-profile-tabs p-2 p-lg-3 rounded-3">
            <ul className="nav nav-pills flex-md-column gap-2" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active rk-profile-tablink w-100 d-flex align-items-center justify-content-between"
                  id="rk-tab-personal"
                  data-bs-toggle="pill"
                  data-bs-target="#rk-pane-personal"
                  type="button"
                  role="tab"
                  aria-controls="rk-pane-personal"
                  aria-selected="true"
                >
                  <span className="d-flex align-items-center gap-2">
                    <span className="rk-profile-icon" aria-hidden />
                    Personal Details
                  </span>
                  <span className="rk-profile-arrow" aria-hidden>›</span>
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rk-profile-tablink w-100 d-flex align-items-center justify-content-between"
                  id="rk-tab-apps"
                  data-bs-toggle="pill"
                  data-bs-target="#rk-pane-apps"
                  type="button"
                  role="tab"
                  aria-controls="rk-pane-apps"
                  aria-selected="false"
                >
                  <span className="d-flex align-items-center gap-2">
                    <span className="rk-profile-icon" aria-hidden />
                    My Applications
                  </span>
                  <span className="rk-profile-arrow" aria-hidden>›</span>
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rk-profile-tablink w-100 d-flex align-items-center justify-content-between"
                  id="rk-tab-saved"
                  data-bs-toggle="pill"
                  data-bs-target="#rk-pane-saved"
                  type="button"
                  role="tab"
                  aria-controls="rk-pane-saved"
                  aria-selected="false"
                >
                  <span className="d-flex align-items-center gap-2">
                    <span className="rk-profile-icon" aria-hidden />
                    Saved jobs and alerts
                  </span>
                  <span className="rk-profile-arrow" aria-hidden>›</span>
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rk-profile-tablink w-100 d-flex align-items-center justify-content-between"
                  id="rk-tab-settings"
                  data-bs-toggle="pill"
                  data-bs-target="#rk-pane-settings"
                  type="button"
                  role="tab"
                  aria-controls="rk-pane-settings"
                  aria-selected="false"
                >
                  <span className="d-flex align-items-center gap-2">
                    <span className="rk-profile-icon" aria-hidden />
                    Account Settings
                  </span>
                  <span className="rk-profile-arrow" aria-hidden>›</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right: tab content */}
        <div className="col-12 col-md-8 col-lg-9">
          <div className="tab-content">
            {/* TAB 1: Personal Details + Build Profile + CV upload */}
            <div
              className="tab-pane fade show active"
              id="rk-pane-personal"
              role="tabpanel"
              aria-labelledby="rk-tab-personal"
            >
              {/* Personal Details */}
              <div className="rk-profile-block mb-4">
                <h3 className="rk-profile-heading mb-1">Personal Details</h3>
                <p className="rk-profile-caption mb-3">
                  Whether you’re hiring top talent or searching for your next
                </p>

                <form className="rk-profile-form">
                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <input className="form-control rk-profile-input" placeholder="First Name" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input className="form-control rk-profile-input" placeholder="Last Name" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input className="form-control rk-profile-input" placeholder="Phone Number" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input className="form-control rk-profile-input" placeholder="Email Address" type="email" />
                    </div>

                    <div className="col-12">
                      <button type="button" className="btn rk-profile-btn">
                        Update Profile
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <hr className="rk-profile-sep" />

              {/* Build Your Profile */}
              <div className="rk-profile-block mb-4">
                <h3 className="rk-profile-heading mb-1">Build Your Profile</h3>
                <p className="rk-profile-caption mb-3">
                  Whether you’re hiring top talent or searching for your next
                </p>

                <form className="rk-profile-form">
                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <input className="form-control rk-profile-input" placeholder="Specialisation" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input className="form-control rk-profile-input" placeholder="Level of Experience" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input className="form-control rk-profile-input" placeholder="Industry" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input className="form-control rk-profile-input" placeholder="Location" />
                    </div>

                    <div className="col-12">
                      <button type="button" className="btn rk-profile-btn">
                        Update Profile
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <hr className="rk-profile-sep" />

              {/* Manage your CVs */}
              <div className="rk-profile-block">
                <h3 className="rk-profile-heading mb-1">Manage your CVs</h3>
                <p className="rk-profile-caption mb-3">
                  Your CV will only be visible to our recruitment consultants when you apply for a role with us.
                </p>

                <div
                  className="rk-profile-upload text-center p-4 p-md-5"
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                >
                  {!preview ? (
                    <>
                      <div className="rk-profile-upload-icon mx-auto mb-3" aria-hidden />
                      <p className="mb-1 fw-semibold">
                        Choose a file or drag &amp; drop it here
                      </p>
                      <p className="text-muted mb-3">
                        JPEG, PNG, PDF, and DOC formats, up to 50MB
                      </p>

                      <label className="btn rk-profile-btn mb-0" htmlFor="rkProfileFile">
                        Browse File
                      </label>
                      <input
                        id="rkProfileFile"
                        type="file"
                        className="visually-hidden"
                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                        onChange={onFileChange}
                      />
                    </>
                  ) : (
                    <div className="rk-profile-preview">
                      {preview.isImage ? (
                        <img
                          src={preview.url}
                          alt={preview.name}
                          className="img-fluid rk-profile-preview-img mb-3"
                        />
                      ) : (
                        <div className="rk-profile-filebox mb-3">
                          <div className="rk-profile-filebox-icon" aria-hidden />
                          <div className="small">{preview.name}</div>
                        </div>
                      )}
                      <div className="text-muted small mb-3">
                        {preview.name} • {preview.type} • {preview.sizeKB} KB
                      </div>
                      <div className="d-flex gap-2 justify-content-center">
                        <label className="btn rk-profile-btn" htmlFor="rkProfileFileReplace">
                          Replace File
                        </label>
                        <input
                          id="rkProfileFileReplace"
                          type="file"
                          className="visually-hidden"
                          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                          onChange={onFileChange}
                        />
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => setFile(null)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* TAB 2 */}
            <div
              className="tab-pane fade"
              id="rk-pane-apps"
              role="tabpanel"
              aria-labelledby="rk-tab-apps"
            >gjgvjgvj</div>

            {/* TAB 3 */}
            <div
              className="tab-pane fade"
              id="rk-pane-saved"
              role="tabpanel"
              aria-labelledby="rk-tab-saved"
            ></div>

            {/* TAB 4 */}
            <div
              className="tab-pane fade"
              id="rk-pane-settings"
              role="tabpanel"
              aria-labelledby="rk-tab-settings"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
