// components/JobBanner.tsx
import Image from "next/image";

const JobBanner = () => {
  return (
    <section className="job-banner-section text-white section-padding">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT COLUMN */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <span className="badge bg-light text-primary mb-3 px-3 py-2">
              Job Listing
            </span>

            <h1 className="fw-bold display-5">Find a job that fits your future</h1>

            <p className="mt-3">
              At Rekuta.ai, we connect candidates with opportunities across
              Technology, Finance & Accounting, Sales & Marketing, Human
              Resources, Operations, and Legal & Compliance.
            </p>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                ✅ Choose from thousands of roles — remote, hybrid, or on-site
              </li>
              <li className="mb-2">
                ✅ Get matched with new and exclusive opportunities every day
              </li>
              <li>✅ Let our AI and recruiters represent you directly to top employers</li>
            </ul>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6 text-center">
            <Image
              src="/assets/images/job/banner.png" // Place your image in public folder
              alt="Job Banner"
              width={600}
              height={500}
              className="img-fluid rounded-4 job-banner-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobBanner;
