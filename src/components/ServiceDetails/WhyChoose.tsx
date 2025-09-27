"use client";

import Image from "next/image";
import { useId } from "react";

type WhyChooseItem = {
  question: string;
  answer: string;
};

type Props = {
  heading: string;
  items: WhyChooseItem[];
  image: string;
};

export default function WhyChoose({ heading, items, image }: Props) {
  const accId = useId(); // unique id prefix for this accordion instance

  return (
    <section className="section-padding whychoose">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2
              className="`mb-4"
              dangerouslySetInnerHTML={{ __html: heading }}
            />

            {/* Bootstrap accordion (div-based) */}
            <div className="accordion accordion-flush" id={`whychoose-${accId}`}>
              {items.map((faq, idx) => {
                const itemId = `wc-${accId}-${idx}`;
                const headingId = `heading-${itemId}`;
                const collapseId = `collapse-${itemId}`;
                const isFirst = idx === 0;

                return (
                  <div className="accordion-item bg-transparent border-0" key={itemId}>
                    <h2 className="accordion-header" id={headingId}>
                      <button
                        className={`accordion-button ${isFirst ? "" : "collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={isFirst ? "true" : "false"}
                        aria-controls={collapseId}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                      aria-labelledby={headingId}
                      data-bs-parent={`#whychoose-${accId}`}
                    >
                      <div className="accordion-body text-white">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 text-center">
            <Image
              src={image}
              alt="Why Choose Rekuta"
              width={600}
              height={500}
              className="img-fluid"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
