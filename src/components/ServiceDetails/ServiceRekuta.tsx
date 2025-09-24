// /components/ServiceDetails/ServiceRekuta.tsx

import React from "react";
import Image from "next/image";

type Props = {
  serviceDetail: {
    sectionTitle: string;
    sectionText: string;
    image: string;
  };
};

const ServiceRekuta = ({ serviceDetail }: Props) => {
  return (
    <section className="section-padding pb-0" style={{
        background: "radial-gradient(120% 120% at 50% -10%, rgb(26, 86, 214) 0%, rgb(15, 67, 183) 40%, rgb(12, 58, 164) 100%)",
      }}>
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Text Left */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3 text-white">{serviceDetail.sectionTitle}</h3>
            <p className="text-secondary mb-4 text-white">{serviceDetail.sectionText}</p>
            <a href="#" className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
              Work with us
            </a>
          </div>

          {/* Image Right */}
          <div className="col-lg-6 text-center">
            <Image
              src={serviceDetail.image}
              alt={serviceDetail.sectionTitle}
              width={600}
              height={400}
              className="img-fluid rounded-3 shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceRekuta;
