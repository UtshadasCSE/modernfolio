export type Work = {
  company: string;
  deliverable: string[];
  role: string;
  fromDate: string;
  toDate: string;
  achivementTitle: string;
  achivementDate: string;
};

export const worksData: Work[] = [
  {
    company: "Fiverr - Freelancer",
    deliverable: [
      "I’m a Frontend Developer on Fiverr, building modern Shopify, Wix, Squarespace & HubSpot websites. Clean, custom, and user-friendly — let’s grow your brand online!",
    ],
    role: "CMS Developer",
    fromDate: "2025-05",
    toDate: "Present",
    achivementTitle: "New Seller",
    achivementDate: "2025-06",
  },
  {
    company: "Upwork - Freelancer",
    deliverable: [
      "We’re a team of 3 Frontend Developers working on Upwork, specializing in building modern, responsive websites on Shopify, Wix, Squarespace, and HubSpot. We deliver clean, custom, and user-friendly sites that help businesses grow and stand out online. Let’s bring your vision to life together!",
    ],
    role: "CMS Developer",
    fromDate: "2020-02",
    toDate: "Present",
    achivementTitle: "Rising Talent",
    achivementDate: "2025-05",
  },
  {
    company: "BDCalling IT LTD.",
    deliverable: [
      "Previously, I worked as a Frontend Developer at BDCalling IT LTD, where I specialized in building responsive web templates with HTML and CSS. I also contributed to developing full-fledged e-commerce websites, ensuring they were user-friendly, visually appealing, and optimized for performance.",
    ],
    role: "Frontend Developer",
    fromDate: "2023-08",
    toDate: "2025-04",
    achivementTitle: "Employee of the month",
    achivementDate: "12 march 2025",
  },
  {
    company: "VisitBD Project",
    deliverable: [
      "VisitBD is a tourism-focused web platform that helps users explore the beauty, culture, and destinations of Bangladesh. I worked as the Frontend Developer using Next.js, collaborating with a 3-person team including a backend and API developer.",
    ],
    role: "FullStack Developer",
    fromDate: "2022-10",
    toDate: "2023-03",
    achivementTitle: "Top Contribution",
    achivementDate: "22 june 2023",
  },
];
