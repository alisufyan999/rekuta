import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="section-padding">
        <div className="container">
            <div className="rk-hero position-relative overflow-hidden rounded-4">
                <span className="badge rk-hero-chip">
                Your profile
                </span>

                <h1 className="rk-hero-title text-white fw-bold mb-2 text-center">
                Showcase Your <span className="rk-hero-title-accent">Talent</span>. Get Discovered.
                </h1>

                <p className="rk-hero-subtitle text-white-50 mb-0 text-center">
                Build a powerful profile on Rekuta.ai and let employers find you. Highlight your
                skills, experience, and career goals — and unlock tailored job opportunities
                powered by AI.
                </p>
            </div>
            </div>
    </section>
  );
};

export default Banner;
