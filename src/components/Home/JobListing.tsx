"use client";

interface Job {
    id: number;
    title: string;
    company: string;
    description: string;
    type: string;
    location: string;
    salary: string;
  }
  
  const JobListings = () => {
    const jobs: Job[] = [
      {
        id: 1,
        title: "UI Designer",
        company: "Kanankiri Studio",
        description: "A UI designer creates intuitive experiences by understanding user needs, enhancing usability and accessibility.",
        type: "Full-Time",
        location: "Onsite",
        salary: "$6,800"
      },
      {
        id: 2,
        title: "UX Designer",
        company: "Ikigalabs Studio",
        description: "A UX designer gathers user insights through various methodologies to inform design decisions and improve user satisfaction.",
        type: "Part-Time",
        location: "Hybrid",
        salary: "$2,800"
      },
      {
        id: 3,
        title: "Project Manager",
        company: "Lucky Minds Agency",
        description: "A project manager conceptualizes and develops innovative products by balancing aesthetics, functionality, and user feedback.",
        type: "Full-Time",
        location: "On-Site",
        salary: "$4,200"
      },
      {
        id: 4,
        title: "Brand Designer",
        company: "Lumintu Tech Solusstion",
        description: "A brand designer creates intuitive experiences by understanding user needs, enhancing usability and accessibility.",
        type: "Full-Time",
        location: "Onsite",
        salary: "$5,900"
      },
      {
        id: 5,
        title: "UX Researcher",
        company: "Speed.io Tech",
        description: "A UX researcher conducts user interviews and usability tests to inform design decisions and improve product experience.",
        type: "Part-Time",
        location: "Remote",
        salary: "$2,800"
      },
      {
        id: 6,
        title: "Product Designer",
        company: "Dadu Bermain Tech",
        description: "A product designer collaborates with cross-functional teams to create innovative product concepts and detailed design specifications.",
        type: "Full-Time",
        location: "Onsite",
        salary: "$4,200"
      }
    ];
  
    const handleApply = (jobId: number) => {
      console.log(`Applying for job ${jobId}`);
      // Add your application logic here
    };
  
    return (
      <section className="section-padding bg-light">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold">Find a Job that Suits You</h1>
            <p className="text-muted fs-5 mb-0">
              Find the perfect platform to help you land job opportunities that match your skills and career goals.
            </p>
          </div>
  
          {/* Cards grid */}
          <div className="row g-4 mt-2">
            {jobs.map((job) => (
              <div key={job.id} className="col-12 col-md-6 col-lg-4">
                <div className="card job-card h-100 p-3">
                  <div className="d-flex align-items-start gap-3">
                    <span className="badge-dot"></span>
                    <div>
                      <div className="fw-semibold">{job.title}</div>
                      <small className="text-muted">{job.company}</small>
                    </div>
                  </div>
  
                  <p className="mt-3 mb-4">
                    {job.description}
                  </p>
  
                  <div className="meta d-flex justify-content-between small mb-3 px-1">
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                    <span>{job.salary}</span>
                  </div>
  
                  <button 
                    className="btn btn-dark w-100 btn-apply"
                    onClick={() => handleApply(job.id)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          {/* See more button */}
          <div className="text-center mt-5">
            <a href="#" className="btn btn-primary btn-cta fw-semibold">See More Jobs</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default JobListings;