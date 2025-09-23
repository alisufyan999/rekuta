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
};

export const servicesData: Service[] = [
  {
    id: "permanent-staffing",
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
  },

  // Add more services here with their own blocks as needed
];
