import Image from "next/image";

const RekutaCTA = () => {
    return (
      <section className="rekuta-cta section-padding pb-0">
        <div className="container position-relative">
          <div className="row align-items-center">
            {/* Left copy */}
            <div className="col-lg-6">
              <h2 className="display-5 text-white mb-3">
                I'm Rekuta, Are you?
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
            <div className="col-lg-6 text-center">
              <Image src="/assets/images/job/banner.png" alt="Rekuta CTA" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RekutaCTA;