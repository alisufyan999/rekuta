// app/components/Banner.tsx
export default function Banner() {
    return (
      <section className="section-padding pt-0">
        <div className="container">
          <div className="banner position-relative p-4 p-md-5">
            <div className="row align-items-center">
              {/* Left: Text + CTAs */}
              <div className="col-lg-7">
                <h1 className="display-5 mb-3">
                  Robert Walters 2025
                  <br />
                  Salary Survey
                </h1>
                <p className="lead mb-4 opacity-75">
                  Explore the salary and hiring trends in your industry.
                </p>
  
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a href="#" className="btn btn-light btn-pill text-dark fw-semibold">
                    Search For Jobs
                  </a>
                  <a href="#" className="btn btn-outline-light btn-pill fw-semibold">
                    Looking To Hire
                  </a>
                </div>
  
                <div className="d-flex align-items-center ring-div">
                  <span className="ring"></span>
                  <span className="ring"></span>
                  <span className="ring"></span>
                  <span className="ring"></span>
                  <span className="ms-3 fw-semibold">5K+ Active Members</span>
                </div>
              </div>
  
              {/* Right: Stat badges */}
              <div className="col-lg-5 mt-4 mt-lg-0">
                <div className="d-flex justify-content-lg-end justify-content-start">
                  <div className="float-badge d-inline-flex align-items-start gap-3 p-3 me-lg-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 border rounded-3"
                      style={{ width: 42, height: 42, borderColor: "#CFE2FF" }}
                    />
                    <div className="small">
                      <div className="fw-bold text-dark">250+ Roles Filled</div>
                      <div className="text-muted">Trusted By Startups &amp; Enterprises</div>
                    </div>
                  </div>
                </div>
  
                <div className="d-flex justify-content-lg-end justify-content-start mt-4">
                  <div className="float-badge d-inline-flex align-items-start gap-3 p-3">
                    <span
                      className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 border rounded-3"
                      style={{ width: 42, height: 42, borderColor: "#CFE2FF" }}
                    />
                    <div className="small">
                      <div className="fw-bold text-dark">5000+ Verified Candidates</div>
                      <div className="text-muted">Trusted By Startups &amp; Enterprises</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Floating shapes */}
            <span className="position-absolute top-0 start-50 translate-middle-y shape"></span>
            <span
              className="position-absolute top-25 end-0 me-5 mt-2 shape"
              style={{ width: 46, height: 46 }}
            ></span>
            <span className="position-absolute bottom-25 end-25 sq shape"></span>
            <span
              className="position-absolute bottom-0 start-50 mb-4 shape"
              style={{ width: 40, height: 40 }}
            ></span>
          </div>
        </div>
      </section>
    );
  }
  