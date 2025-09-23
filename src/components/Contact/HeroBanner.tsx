const HeroBanner = () => {
    return (
      <section className="section-padding">
      <div className="container">
        <div className="rekuta-hero position-relative overflow-hidden p-4 p-md-5 rounded-4">

          <div className="row justify-content-center aboutbannerrow">
            <div className="col-lg-10 col-xl-9 text-center">
              {/* Top badge */}
              <div className="d-inline-flex align-items-center px-3 py-1 rounded-pill text-white small mb-3 shadow-sm backdrop-blur">
                Smarter Hiring Starts Here
              </div>

              {/* Headline */}
              <h1 className="display-4 fw-bold text-white lh-1 mb-3">
                We’re Rekuta - Your AI Recruiter
              </h1>

              {/* Copy */}
              <p className="text-white-50 fs-6 mb-4 pe-lg-5">
                At rekuta.ai, we combine intelligent automation with human insight
                to transform how companies hire and how candidates find opportunities.
                Our mission is simple: make recruitment faster, fairer, and more
                effective for everyone.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
    );
  };
  
  export default HeroBanner;