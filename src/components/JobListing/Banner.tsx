import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="section-padding">
        <div className="container">
            <div className="rk-hero position-relative overflow-hidden rounded-4">
                <span className="badge rk-hero-chip">Job Listing</span>

                <h1 className="rk-hero-title text-white fw-bold mb-2 text-center">Find a job that fits your future</h1>

                <p className="rk-hero-subtitle text-white-50 mb-0 text-center">At Rekuta.ai, we connect candidates with opportunities across Technology, Finance & Accounting, Sales & Marketing, Human Resources, Operations, and Legal & Compliance.</p>
            </div>
            </div>
    </section>
  );
};

export default Banner;
