// /data/servicesData.ts

export type ServiceDetail = {
  sectionTitle: string;
  sectionText: string;
  image?: string;
};

export type AboutSection = {
  title: string;
  paragraphs: string[];
  ctaText: string;
  image: string;
};

export type ExpertiseItem = {
  title: string;
  text: string;
  icon: string; // path to svg/png
};

export type Logo = { name: string; src: string };

export type Organizations = {
  heading: string;
  row1: Logo[];
  row2: Logo[];
  row3: Logo[];
};

export type WhyChooseItem = {
  question: string;
  answer: string;
};

export type WhyChooseSection = {
  heading: string;
  items: WhyChooseItem[];
  image: string;
};

export type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  tags: string[];
};

export type SalarySurvey = {
  heading: string;
  subtext: string;
  cta1: string;
  cta2: string;
  avatars: string[];
  label: string;
  image: string;
};

export type dynamicserviceDetail = {
  sectionTitle: string;
  sectionText: string;
}[];

export type ServiceRekuta = {
  sectionTitle: string;
  sectionText: string;
  image: string;
};

export type Service = {
  id: string;                 // URL slug: /services/[id]
  eyebrow: string;            // small badge text (hero)
  title: string;              // hero title
  description: string;        // hero paragraph
  serviceDetail: ServiceDetail[];
  aboutSection?: AboutSection;
  expertise?: {
    heading: string;
    items: ExpertiseItem[];
  };
  organizations?: Organizations; 
  whyChoose?: WhyChooseSection;// 👈 NEW

  testimonials?: {
    row1: Testimonial[];
    row2: Testimonial[];
  };

  salarySurvey?: SalarySurvey;

  dynamicserviceDetail?: dynamicserviceDetail;

  faq?: { question: string; answer: string }[];

  servicerekuta?: ServiceRekuta;


};

export const servicesData: Service[] = [
  {
    id: "service-detail",
    eyebrow: "Permanent Staffing Services",
    title: "Future-Proof Your Team with Rekuta.ai",
    description:
      "Permanent staffing isn’t just about hiring for today — it’s about building your team for tomorrow. At Rekuta.ai, we specialize in connecting forward-thinking businesses with exceptional long-term talent, powered by cutting-edge AI and industry expertise.",
    serviceDetail: [],

    aboutSection: {
      title: "People are at the heart of every business",
      paragraphs: [
        "At Rekuta.ai, we understand that hiring the right people is essential to unlocking performance, innovation, and growth. The wrong hire—even if highly skilled—can set your company back while competitors pull ahead.",
        "That’s why permanent hiring isn’t just about skills—it’s about storytelling. We help you position your brand, culture, and mission in ways that attract top-tier professionals.",
        "Our AI-powered platform, combined with deep industry expertise and local market insight, ensures you reach talent that others can’t. We go beyond the job description—uncovering what makes your business unique and connecting you with candidates who can truly transform it."
      ],
      ctaText: "Work with us",
      image: "/assets/images/about/about-side3.png",
    },

    expertise: {
      heading: "Our Expertise",
      items: [
        {
          title: "Accounting & finance",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
          icon: "/assets/images/about/about-icon1.png",
        },
        {
          title: "Risk",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
          icon: "/assets/images/about/about-icon1.png",
        },
        {
          title: "Operations",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
          icon: "/assets/images/about/about-icon1.png",
        },
        {
          title: "Human resources",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
          icon: "/assets/images/about/about-icon1.png",
        },
        {
          title: "Legal & compliance",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
          icon: "/assets/images/about/about-icon1.png",
        },
        {
          title: "Sales & marketing",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
          icon: "/assets/images/about/about-icon1.png",
        },
        {
          title: "Technology",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
          icon: "/assets/images/about/about-icon1.png",
        },
        {
          title: "Technology",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
          icon: "/assets/images/about/about-icon1.png",
        },
      ],
    },

    // 👇 Organization logos data for the 3 Owl rows
    organizations: {
      heading: "Trusted by 11,000+ organizations worldwide",
      row1: [
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
      ],
      row2: [
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
      ],
      row3: [
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
        { name: "Polymath",  src: "/assets/images/about/org1.png" },
      ],
    },

    whyChoose: {
      heading: "Why choose Rekuta.ai <br/>for your permanent staffing needs?",
      image: "/assets/images/about/about-side4.png",
      items: [
        {
          question: "Tailored Hiring Strategy",
          answer: "We design a custom recruitment plan to match your business model, culture, and long-term goals.",
        },
        {
          question: "Industry-Specific Recruiters",
          answer: "Access recruiters who deeply understand your sector and deliver the best candidates.",
        },
        {
          question: "Data-Driven Candidate Matching",
          answer: "We use AI to analyze resumes, skills, and company culture to match top talent.",
        },
        {
          question: "Global Talent Reach",
          answer: "Expand your reach to international markets with our vast candidate database.",
        },
        {
          question: "Trusted Advisory Support",
          answer: "Get expert guidance throughout the hiring journey with our advisory support.",
        },
      ],
    },
    
    testimonials: {
      row1: [
        {
          id: 1,
          name: "Alice Johnson",
          position: "Product Manager",
          company: "Alpha Inc.",
          quote: "The team at Rekuta is professional, efficient, and insightful.",
          tags: ["Product", "Management"]
        },
        {
          id: 2,
          name: "Liam Brown",
          position: "Director of Talent",
          company: "Beta Corp",
          quote: "We've consistently found the best people thanks to Rekuta.ai.",
          tags: ["HR", "AI"]
        },
      ],
      row2: [
        {
          id: 3,
          name: "Sophia Davis",
          position: "Recruiting Lead",
          company: "Delta Group",
          quote: "Effortless hiring with powerful results!",
          tags: ["Hiring", "Tech"]
        },
        {
          id: 4,
          name: "Noah Wilson",
          position: "Operations Head",
          company: "Gamma Inc.",
          quote: "We saved weeks of screening. Incredible.",
          tags: ["Ops", "Efficiency"]
        },
      ]
    },
    
    salarySurvey: {
      heading: "Robert Walters 2025\nSalary Survey",
      subtext: "Explore the salary and hiring trends in your industry.",
      cta1: "Search For Jobs",
      cta2: "Looking To Hire",
      avatars: [
        "/assets/images/about/about-person1.png",
        "/assets/images/about/about-person1.png",
        "/assets/images/about/about-person1.png",
        "/assets/images/about/about-person1.png",
      ],
      label: "5K+ Active Members",
      image: "/assets/images/about/about-side2.png",
    },    

    dynamicserviceDetail: [
      {
        sectionTitle: "Recruiting Across All Career Levels.",
        sectionText:
          "We take the time to listen to, and fully connect with, our clients and candidates. That's why we're the world's most trusted talent solutions business.",
      },
      {
        sectionTitle: "Recruitment",
        sectionText:
          "Leverage our specialized industry expertise, and global reach to champion your story and connect you with the best professionals who will transform your business.",
      },
      {
        sectionTitle: "Outsourcing",
        sectionText:
          "Leverage our specialized industry expertise, and global reach to champion your story and connect you with the best professionals who will transform your business.",
      },
      {
        sectionTitle: "Talent Advisory",
        sectionText:
          "Experience agile recruitment outsourcing solutions tailored to your unique requirements, seamlessly scalable to match your evolving needs and objectives.",
      },
    ],

    faq: [
      {
        question: "What is permanent staffing?",
        answer: "It refers to hiring employees for long-term roles in your organization.",
      },
      {
        question: "How does Rekuta.ai ensure a good fit?",
        answer: "We use AI and industry insight to ensure cultural and skill alignment.",
      },
      {
        question: "Can you support international hiring?",
        answer: "Yes, we have access to global talent pools for cross-border placements.",
      },
      {
        question: "Is there a guarantee period?",
        answer: "Yes, all placements come with a replacement guarantee within a certain period.",
      },
      {
        question: "Do you offer volume hiring support?",
        answer: "Yes, we support bulk hiring with dedicated recruiter teams.",
      },
    ],
    
    servicerekuta: {
      sectionTitle: "Recruiting Across All Career Levels.",
      sectionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/assets/images/about/about-side1.png"
    },    
    
    
  },
  
  
];
