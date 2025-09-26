

const FindJob = () => {
  return (
    <section className="find-job-section section-padding pt-0">
      <div className="container text-center">
        {/* Heading */}
        <h2 className="fw-bold mb-4 find-job-section-title">Find your next job</h2>

        {/* Search Form */}
        <form>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row g-3 justify-content-center">
                {/* Job Title Input */}
                <div className="col-12 col-md-5">
                  <div className="input-group find-job-input-group">
                    <span className="input-group-text bg-white find-job-input-group-text">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control find-job-input"
                      placeholder="Job Title, Skills, Or Keywords"
                      defaultValue="Web Developer"
                    />
                  </div>
                </div>

                {/* Location Input */}
                <div className="col-12 col-md-5">
                  <div className="input-group find-job-input-group">
                    <span className="input-group-text bg-white find-job-input-group-text">
                      <i className="bi bi-geo-alt"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control find-job-input"
                      placeholder="City, State, Or Zip Code"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Button (Centered Below) */}
          <div className="mt-4">
            <button type="submit" className="btn btn-primary find-job-search-btn">
              Search
            </button>
          </div>
        </form>

        {/* View All Jobs Link */}
        <a href="#" className="d-block mt-3 text-primary">
          View All Jobs
        </a>
      </div>
    </section>
  );
};

export default FindJob;
