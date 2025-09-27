// components/ServiceDetails/DynamicServiceCards.tsx

import React from "react";
import { ServiceDetail } from "@/data/servicesData";

type Props = {
  serviceDetail: ServiceDetail[];
};

const DynamicServiceCards = ({ serviceDetail }: Props) => {
  if (serviceDetail.length < 4) return null;

  const intro = serviceDetail[0];
  const recruitment = serviceDetail[1];
  const outsourcing = serviceDetail[2];
  const talentAdvisory = serviceDetail[3];

  return (
    <section className="section-padding">
      <div className="container">
        {/* Header / Intro */}
        <div className="row g-4 align-items-start">
          <div className="col-lg-6">
            <h2 className="display-5 mb-3">
              {intro.sectionTitle.split("Career Levels.")[0]}
              <br className="d-none d-md-block" />
              Career Levels.
            </h2>
            <p className="lead text-muted mb-0">{intro.sectionText}</p>
          </div>

          {/* Main Card */}
          <div className="col-lg-6">
            <div className="card card-soft shadow-sm p-4 p-md-5">
              <h3 className="display-5 mb-3">{recruitment.sectionTitle}</h3>
              <p className="text-muted mb-4">{recruitment.sectionText}</p>
              <a href="#" className="btn btn-primary btn-pill width-fit">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Two cards below */}
        <div className="row g-4 mt-2">
          <div className="col-lg-6">
            <div className="card card-soft shadow-sm p-4 p-md-5">
              <h3 className="display-5 mb-3">{outsourcing.sectionTitle}</h3>
              <p className="text-muted mb-4">{outsourcing.sectionText}</p>
              <a href="#" className="btn btn-primary btn-pill width-fit">
                Learn More
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card-blue shadow-sm p-4 p-md-5">
              <h3 className="display-5 mb-3">{talentAdvisory.sectionTitle}</h3>
              <p className="mb-4 opacity-75">{talentAdvisory.sectionText}</p>
              <a href="#" className="btn btn-light btn-pill text-dark width-fit">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicServiceCards;
