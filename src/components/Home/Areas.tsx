import Image from "next/image";

interface Area {
    id: number;
    title: string;
    description: string;
  }
  
  const Areas = () => {
    const areas: Area[] = [
      {
        id: 1,
        title: "Accounting & finance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      },
      {
        id: 2,
        title: "Risk",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      },
      {
        id: 3,
        title: "Operations",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      },
      {
        id: 4,
        title: "Human resources",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      },
      {
        id: 5,
        title: "Legal & compliance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      },
      {
        id: 6,
        title: "Sales & marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      },
      {
        id: 7,
        title: "Technology",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      },
      {
        id: 8,
        title: "Technology",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
      }
    ];
  
    return (
      <section className="areas-section section-padding">
        <div className="container">
          <h2 className="display-4 text-white text-center mb-5">Areas we recruit in</h2>
  
          <div className="row g-4">
            {areas.map((area) => (
              <div key={area.id} className="col-12 col-md-6 col-lg-3">
                <div className="area-card bg-light p-4 shadow-sm h-100 rounded-4">
                  <span className="area-icon mb-3">
                    <Image src="/assets/images/home/icon1.png" alt="Areas" width={45} height={45} />
                  </span>
                  <h5 className="fw-bold mb-2">{area.title}</h5>
                  <p className="text-muted mb-0">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Areas;