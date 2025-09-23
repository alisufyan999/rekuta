const RekutaCTA = () => {
    return (
      <section className="rekuta-cta section-padding">
        <div className="container position-relative">
          <div className="row align-items-center">
            {/* Left copy */}
            <div className="col-lg-7">
              <h2 className="display-4 fw-bold text-white mb-3">
                I'm Rekuta,<br />Are you?
              </h2>
              <p className="lead text-white-50 mb-4">
                Join us in redefining recruitment with the power of AI. At rekuta.at, we're not just connecting candidates
                to jobs—we're revolutionizing how talent meets opportunity. Our AI recruiter is designed to think smarter,
                move faster, and deliver results that traditional hiring can't match.
              </p>
              <p className="text-white-50 mb-4">
                We believe in fair, efficient, and intelligent hiring that empowers businesses to scale and professionals to
                grow. With Rekuta, you'll experience accelerated placements, data-driven insights, and a future-proof way of
                building teams.
              </p>
              <a href="#" className="btn btn-light rounded-pill px-4 py-2 fw-semibold">Work with us</a>
            </div>
  
            {/* Right visuals */}
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="position-relative d-none d-sm-block" style={{ minHeight: '420px' }}>
                {/* Job Vacancy stat */}
                <div className="stat card shadow-lg border-0 rounded-4 p-3 position-absolute top-0 end-0 translate-middle-y">
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 border border-primary-subtle mb-2" 
                    style={{ width: '44px', height: '44px' }}
                  >
                    🔍
                  </div>
                  <div className="fs-4 fw-bold text-dark mb-1">10.5K</div>
                  <div className="small text-muted">Job Vacancy</div>
                </div>
  
                {/* Job Interview card */}
                <div 
                  className="card shadow-lg border-0 rounded-4 p-3 position-absolute end-0" 
                  style={{ top: '58%', width: '300px' }}
                >
                  <div className="d-flex align-items-start gap-2">
                    <div 
                      className="rounded-3 bg-primary bg-opacity-10 border border-primary-subtle d-flex align-items-center justify-content-center" 
                      style={{ width: '38px', height: '38px' }}
                    >
                      📄
                    </div>
                    <div>
                      <div className="fw-semibold">Job Interview Today</div>
                      <div className="small text-muted">Today at 12.00 PM</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span 
                      className="d-inline-block bg-primary rounded-pill" 
                      style={{ height: '8px', width: '48px' }}
                    ></span>
                  </div>
                </div>
  
                {/* Congrats card */}
                <div 
                  className="card shadow-lg border-0 rounded-4 p-3 position-absolute start-50 translate-middle-x" 
                  style={{ bottom: '0', width: '360px' }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div 
                      className="rounded-3 bg-primary text-white d-inline-flex align-items-center justify-content-center" 
                      style={{ width: '46px', height: '46px' }}
                    >
                      🎉
                    </div>
                    <div>
                      <div className="fw-semibold">Congratulations</div>
                      <div className="small text-muted">You have been hired.</div>
                    </div>
                  </div>
                </div>
  
                {/* Tiny floating dots (decor) */}
                <span 
                  className="float-dot position-absolute" 
                  style={{ left: '-18px', top: '35%' }}
                ></span>
                <span 
                  className="float-dot position-absolute" 
                  style={{ right: '-18px', bottom: '8%' }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RekutaCTA;