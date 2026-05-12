const projects = [
  {
    title: "Consumer Loan Risk Analysis",
    category: "Data Science / Machine Learning",
    description:
      "An end-to-end data analytics and machine learning project focusing on consumer loan risk prediction and financial behavior analysis. The project involved exploratory data analysis, feature engineering, preprocessing, predictive modeling, and evaluation to identify potential risk factors affecting loan repayment. Multiple analytical approaches including classification, regression, and clustering techniques were applied to generate actionable insights and support data-driven lending decisions.",
    tags: ["EDA", "Classification", "Regression", "Clustering"],
    links: {
      docs: "https://drive.google.com/file/d/1QC0JX-tf_ZHxalXrJtJbUPw_6ekh84MU/view?usp=sharing",
      slides: "https://drive.google.com/file/d/189CJRY8_NL4h8eaYtPAE8Gwc-vOwzM_N/view?usp=sharing",
    },
  },

  {
    title: "Tax Management System",
    category: "System Analysis Case Study",
    description:
      "A comprehensive system analysis and design project for a taxation management application. The project covered business problem identification, stakeholder analysis, requirement elicitation, and the development of functional, structural, and behavioral system models. Deliverables included UML diagrams, business process modeling, use case analysis, database design, and user interface prototypes aimed at improving tax administration efficiency and user experience.",
    tags: ["Requirement Analysis", "UML", "System Design", "UI Design"],
    links: {
      docs: "https://drive.google.com/drive/folders/15fO5SUncL4eON5jwPgYkTj_Vk92YaFX2?usp=sharing",
      figma:
        "https://www.figma.com/design/Qcj9kCJLlTsv5dxGQMkMIe/Tax-Management-System?node-id=0-1&t=eN3QUuCYAuSXqkEo-1",
    },
  },

  {
    title: "ElevFit",
    category: "UX Interaction Design",
    description:
      "A user-centered UX case study for a fitness and wellness application designed to improve user engagement and accessibility. The project involved conducting user research, developing personas, empathy mapping, customer journey mapping, wireframing, prototyping, and usability testing. SUS evaluation and qualitative feedback analysis were used to validate design decisions and optimize the overall user experience through iterative design improvements.",
    tags: [
      "UX Research",
      "Persona",
      "Prototyping",
      "Usability Testing",
    ],
    links: {
      figma:
        "https://www.figma.com/design/KGJi9zrUZP0ljqMhlZlQgf/Kelas-D_Template-4_PeduliPeduli?node-id=13-3&t=HLOhqcTW9gVe42Vg-1",
      docs: "https://drive.google.com/drive/folders/1VOnA2TCaT9YNk8R_LTHOqjAUIWhyCY9U?usp=drive_link",
    },
  },

  {
    title: "SkinSmart",
    category: "Product Requirement Document (PRD)",
    description:
      "A product management and product strategy case study focused on developing a skincare recommendation platform. The project defined product vision, identified business problems, analyzed target users, and determined MVP scope using prioritization frameworks such as MoSCoW. It also included user stories, acceptance criteria, feature breakdowns, and measurable success metrics aligned with both user needs and business objectives.",
    tags: ["PRD", "MoSCoW", "User Stories", "Product Strategy"],
    links: {
      figma:
        "https://www.figma.com/design/yvjcRIRzZsh2jp0Zl5vzNP/PPD-TK2?node-id=0-1&t=lTt20pX1WRyTSw26-1",
      docs: "https://drive.google.com/drive/folders/1y67JfkALdT2rCP7iISAvF64cZdpLqWfQ?usp=sharing",
    },
  },

  {
    title: "Vehicle Rental System",
    category: "Full-Stack Web & Mobile Development",
    description:
      "A full-stack vehicle rental platform developed with both web and mobile interfaces to streamline vehicle booking and rental management processes. The system integrated Django-based backend APIs with a Flutter mobile application to support seamless authentication, vehicle listing, booking workflows, and real-time data synchronization. The project emphasized API integration, responsive design, and efficient database management using PostgreSQL.",
    tags: ["Django", "Flutter", "REST API", "PostgreSQL"],
    links: {
      github: "https://github.com/PBP-C07/rentara.git",
      demo: "http://raisa-sakila-rentaraproject.pbp.cs.ui.ac.id/",
    },
  },

  {
    title: "Pet Clinic Management System",
    category: "Web Development",
    description:
      "A web-based management system developed for a pet clinic to support operational workflows including pet records, appointment management, and service tracking. The project focused on relational database design, structured data management, and the implementation of complex SQL queries. The system was built with a modern frontend architecture to provide an efficient and user-friendly administrative experience.",
    tags: ["Next.js", "SQL", "Database Design"],
    links: {
      github: "https://github.com/rerearuan/A01-Pet-Clinic.git",
    },
  },

  {
    title: "Flight Booking Website",
    category: "Web Application Development",
    description:
      "A flight booking web application developed using a layered architecture and RESTful services to manage booking workflows and flight data. The project implemented CRUD operations across multiple entities including flights, bookings, schedules, and users. Built with Spring Boot and Vue.js, the application emphasized modular backend development, API integration, and scalable frontend architecture.",
    tags: ["Spring Boot", "Vue.js", "MVC", "REST API"],
    links: {
      github: "https://github.com/raisassc/flight-be.git",
      github2: "https://github.com/raisassc/flight-fe.git",
    },
  },

  {
    title: "SIKAFA Academic Information System",
    category: "System Analysis & Fullstack Development",
    description:
      "Contributed as Lead System Analyst in the development of SIKAFA, an academic information system designed to support school operational processes including student admissions (PPDB), tuition payment management, attendance tracking, and extracurricular administration. Responsible for business process analysis, UML modeling, user flow design, reusable frontend component development, backend implementation, and role-based access control integration using Vue.js and Spring Boot.",
    tags: [
      "System Analysis",
      "UML",
      "Use Case Diagram",
      "Activity Diagram",
      "Class Diagram",
      "User Flow",
      "Vue.js",
      "Spring Boot",
      "RBAC",
      "Axios",
      "Reusable Component",
      "Frontend",
      "Backend",
    ],
    links: {
      github: "LINK_FRONTEND_REPO",
      github2: "LINK_BACKEND_REPO",
      slides: "https://canva.link/f322vhdzfp4qvdb",
    },
  },

  {
    title: "Digital Campaign Strategy – My Bitnaneun Color",
    category: "Academic Group Project | Digital Media Marketing Course",
    description:
      "Developed a full-funnel digital campaign strategy aimed at increasing customer trust and booking conversion for trainee consultants in a personal color analysis brand. Conducted customer insight analysis to identify key conversion barriers related to consultant credibility and founder dependency. Designed TOFU–MOFU–BOFU campaign strategies across TikTok and Instagram, including storytelling concepts, content pillars, KPI frameworks, paid media allocation, and optimization strategies aligned with customer journey stages.",
    tags: [
      "Digital Marketing",
      "Campaign Strategy",
      "TikTok Marketing",
      "Instagram Marketing",
      "Customer Insight",
      "KPI Analysis",
      "Paid Media",
      "Marketing Analytics",
    ],
    links: {
      docs: "",
    },
  },

  {
    title: "Omnichannel Campaign Performance Analysis – ELEVÉ",
    category: "Academic Case Study | Digital Media Marketing",
    description:
      "Conducted an omnichannel marketing performance analysis across TikTok Organic, TikTok Ads, and Meta Ads throughout awareness, consideration, and conversion stages. Evaluated attribution performance using first-touch, middle-touch, and last-touch analysis to understand customer journey behavior. Compared prospecting and retargeting campaign effectiveness using metrics such as ROAS, CPA, CTR, and add-to-cart rate, while identifying optimization opportunities to improve campaign efficiency and conversion performance.",
    tags: [
      "Omnichannel Marketing",
      "Meta Ads",
      "TikTok Ads",
      "Marketing Analytics",
      "Attribution Analysis",
      "ROAS",
      "Campaign Optimization",
      "Digital Strategy",
    ],
    links: {
      docs: "",
    },
  },

  {
    title: "Spotify Music Trends Dashboard Analysis",
    category: "Academic Project | Business Intelligence Course",
    description:
      "Performed data cleaning, transformation, and preprocessing using Power Query on Spotify datasets containing artist, album, and track information. Developed interactive Power BI dashboards to analyze music trends, artist popularity, album distribution, and track performance over time. Applied DAX functions such as IF, FILTER, DATEADD, RANKX, and SUMX to generate calculated metrics and business insights. The dashboard featured drill-down analysis, slicers, and dynamic filtering to improve usability and data exploration.",
    tags: [
      "Power BI",
      "Business Intelligence",
      "Data Analytics",
      "Power Query",
      "DAX",
      "Dashboard Design",
      "Data Visualization",
      "Spotify Dataset",
    ],
    links: {
      docs: "",
    },
  },
];

export default projects;