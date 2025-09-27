interface ProcessStep {
    id: number;
    stepNumber: string;
    title: string;
    description: string;
  }
  
  const Process = () => {
    const steps: ProcessStep[] = [
      {
        id: 1,
        stepNumber: "Step One",
        title: "Discovery Call",
        description: "We learn about your needs. We explain our abilities. We decide together if we are a good fit."
      },
      {
        id: 2,
        stepNumber: "Step Two",
        title: "Client Launch",
        description: "We analyse every aspect: Skills, Profile, and Cultural Fit to find your perfect match."
      },
      {
        id: 3,
        stepNumber: "Step Three",
        title: "Candidate Search",
        description: "We combine local expertise and our proven system to find your perfect candidate match."
      },
      {
        id: 4,
        stepNumber: "Step Four",
        title: "Screening",
        description: "Simple 3 steps process: candidate video, our interview, then your final interview."
      }
    ];
  
    return (
      <section className="section-padding">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="display-4">Our Process</h2>
            <p className="text-muted fs-5 mb-0">
              We Source Your Offshore Talent In 3 Weeks or Less , Effortless Offshore Recruitment In Five Steps
            </p>
          </div>
  
          {/* Step cards */}
          <div className="row g-4">
            {steps.map((step) => (
              <div key={step.id} className="col-12 col-lg-3">
                <div className="step-circle"></div>
                <span className="step-dot"></span>
                <div className="p-4 step-card mt-3">
                  <div className="step-kicker mb-2">{step.stepNumber}</div>
                  <h4 className="">{step.title}</h4>
                  <p className="text-muted mb-0">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Process;