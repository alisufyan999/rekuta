import Image from 'next/image';

export default function SalarySurveyBanner() {
    return (
      <section className="">
        <div className="container">
          <div className="rw-hero position-relative rounded-4 shadow-sm overflow-hidden">
            {/* background rings */}
            <span className="rw-ring rw-ring-1 d-none d-sm-block" />
            <span className="rw-ring rw-ring-2 d-none d-sm-block" />
            <span className="rw-ring rw-ring-3 d-none d-lg-block" />
  
            <div className="row align-items-center g-4">
              {/* LEFT: text */}
              <div className="col-lg-6">
                <h1 className="display-5 text-white mb-2">
                  Robert Walters 2025 Salary Survey
                </h1>
                <p className="text-white mb-4">
                  Explore the salary and hiring trends in your industry.
                </p>
  
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a href="#" className="btn btn-light rounded-pill px-4 fw-semibold">Search For Jobs</a>
                  <a href="#" className="btn btn-outline-light rounded-pill px-4 fw-semibold">Looking To Hire</a>
                </div>
  
                {/* avatar group + label */}
                <div className="d-flex align-items-center">
                  <div className="rw-avatars me-2">
                    <img src="/assets/images/about/about-person1.png" alt="" />
                    <img src="/assets/images/about/about-person1.png" alt="" />
                    <img src="/assets/images/about/about-person1.png" alt="" />
                    <img src="/assets/images/about/about-person1.png" alt="" />
                  </div>
                  <span className="text-white small">5K+ Active Members</span>
                </div>
              </div>
  
              {/* RIGHT: person + floating stats */}
              <div className="col-lg-6">
              <Image 
                    src="/assets/images/about/about-side5.png" 
                    alt="About section image"
                    width={600}
                    height={500}
                    className="img-fluid"
                />
              </div>
              {/* /RIGHT */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  