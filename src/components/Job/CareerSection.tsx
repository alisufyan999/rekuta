"use client";

import { useEffect, useState } from "react";

interface CareerTab {
  id: string;
  title: string;
  description: string;
  image: string;
  jobs: string[];
}

const careerTabs: CareerTab[] = [
  {
    id: "finance",
    title: "Finance & Accounting",
    description:
      "Our vast nationwide jobs network offers opportunities for financial professionals from entry level to management and executive.",
    image:
      "/assets/images/job/tab2.png",
    jobs: [
      "Controller",
      "Senior Accountant",
      "Senior Financial Analyst",
      "Accounts Payable/Receivable Specialist",
      "Broker",
    ],
  },
  {
    id: "technology",
    title: "Technology",
    description:
      "Explore cutting-edge technology opportunities with leading companies across various industries and tech stacks.",
    image:
      "/assets/images/job/tab2.png",
    jobs: [
      "Software Engineer",
      "Full Stack Developer",
      "DevOps Engineer",
      "Data Scientist",
      "Cloud Architect",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Creative",
    description:
      "Creative and marketing professionals can find exciting opportunities to showcase their talents and drive business growth.",
    image:
      "/assets/images/job/tab2.png",
    jobs: [
      "Marketing Manager",
      "Graphic Designer",
      "Content Creator",
      "Digital Marketing Specialist",
      "Creative Director",
    ],
  },
  {
    id: "legal",
    title: "Legal",
    description:
      "Legal professionals can explore diverse opportunities from corporate law to litigation and compliance roles.",
    image:
      "/assets/images/job/tab2.png",
    jobs: [
      "Corporate Lawyer",
      "Legal Assistant",
      "Compliance Officer",
      "Paralegal",
      "Contract Manager",
    ],
  },
  {
    id: "sales",
    title: "Sales & Business",
    description:
      "Discover opportunities in business development, sales leadership, and account management.",
    image:
      "/assets/images/job/tab2.png",
    jobs: [
      "Business Development Manager",
      "Sales Executive",
      "Account Manager",
      "Inside Sales Rep",
      "Client Partner",
    ],
  },
  {
    id: "legal-2",
    title: "Legal",
    description:
      "Legal professionals can explore diverse opportunities from corporate law to litigation and compliance roles.",
    image:
      "/assets/images/job/tab2.png",
    jobs: [
      "Corporate Lawyer",
      "Legal Assistant",
      "Compliance Officer",
      "Paralegal",
      "Contract Manager",
    ],
  },
  {
    id: "legal-3",
    title: "Legal",
    description:
      "Legal professionals can explore diverse opportunities from corporate law to litigation and compliance roles.",
    image:
      "/assets/images/job/tab2.png",
    jobs: [
      "Corporate Lawyer",
      "Legal Assistant",
      "Compliance Officer",
      "Paralegal",
      "Contract Manager",
    ],
  },
  {
    id: "legal-4",
    title: "Legal",
    description:
      "Legal professionals can explore diverse opportunities from corporate law to litigation and compliance roles.",
    image:
      "/assets/images/job/tab2.png",
    jobs: [
      "Corporate Lawyer",
      "Legal Assistant",
      "Compliance Officer",
      "Paralegal",
      "Contract Manager",
    ],
  },
];

export default function CareerSection() {
  const [activeTab, setActiveTab] = useState<string>(careerTabs[0].id);

  useEffect(() => {
    // Dynamically load jQuery and OwlCarousel
    const loadScripts = async () => {
      // Load CSS for Owl + FontAwesome
      const owlCSS = document.createElement("link");
      owlCSS.rel = "stylesheet";
      owlCSS.href =
        "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
      document.head.appendChild(owlCSS);

      const owlTheme = document.createElement("link");
      owlTheme.rel = "stylesheet";
      owlTheme.href =
        "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css";
      document.head.appendChild(owlTheme);

      const fontAwesome = document.createElement("link");
      fontAwesome.rel = "stylesheet";
      fontAwesome.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
      document.head.appendChild(fontAwesome);

      // Load jQuery
      await new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        script.onload = () => {
          (window as any).$ = (window as any).jQuery;
          resolve();
        };
        document.body.appendChild(script);
      });

      // Load OwlCarousel
      await new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
        script.onload = () => resolve();
        document.body.appendChild(script);
      });

      // Init OwlCarousel
      if (typeof window !== "undefined" && (window as any).$) {
        const $ = (window as any).$;

        if ($(".career-tabs").hasClass("owl-loaded")) {
          $(".career-tabs").trigger("destroy.owl.carousel");
        }

        $(".career-tabs").owlCarousel({
          margin: 15,
          nav: true,
          navText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>',
          ],
          dots: false,
          responsive: {
            0: { items: 2 },
            768: { items: 3 },
            1200: { items: 5 },
          },
        });
      }
    };

    loadScripts();
  }, []);

  return (
    <div className="career-section section-padding pt-0">
      <div className="container">
        <h1 className="career-title text-center mb-5">
          Ready for your next career move?
        </h1>

        {/* Owl Carousel Tabs */}
        <div className="career-tabs owl-carousel">
          {careerTabs.map((tab) => (
            <button
              key={tab.id}
              className={`career-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="tab-content mt-4">
          {careerTabs
            .filter((tab) => tab.id === activeTab)
            .map((tab) => (
              <div key={tab.id} className="tab-pane show active fade">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <p className="career-description">{tab.description}</p>
                    <h3 className="trending-title">Trending Job Titles</h3>
                    <ul className="job-list">
                      {tab.jobs.map((job, i) => (
                        <li key={i}>
                          <a href="#" className="job-link">
                            {job}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <button className="career-btn btn btn-primary mt-3">
                      Find Your Next Job
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <img
                      src={tab.image}
                      alt={tab.title}
                      className="career-img img-fluid rounded-3 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
