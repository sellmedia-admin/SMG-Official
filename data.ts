export const SERVICES = [
  {
    image: "service1.png",
    topTitle: "Using technology to power creative ",
    bottomTitle: "solutions for your brand",
    linkTo: "/",
    contentTitle: "Creativity powered by Data, and Artificial Intelligence",
    contentText:
      "Our Marketing Communication services are designed to cut through the noise. We develop and deliver messages that capture attention and drive engagement. By understanding your audience and crafting tailored content, we ensure your brand's voice is heard loud and clear.",
    orderBy: "",
  },
  {
    image: "service2.gif",
    topTitle: "Using Marketing Analytics to make",
    bottomTitle: "informed decisions",
    linkTo: "/",
    contentTitle: "Drive home your ROI using data and media proven strategies",
    contentText:
      "Data-driven decision-making is at the heart of our Marketing Analysis services. We delve deep into market research, competitive analysis, and consumer behavior studies to provide actionable insights. Our analytical prowess empowers you to make informed decisions that drive growth and success.",
    orderBy: "-1",
  },
  {
    image: "service3.png",
    topTitle: "Using SaaS products designed for",
    bottomTitle: "your business growth",
    linkTo: "/",
    contentTitle: "Customised products and solutions designed to growth",
    contentText:
      "Stay ahead of the curve with our Marketing Technology services. We integrate the latest technological advancements into your marketing strategy, enhancing efficiency and effectiveness. From automation tools to advanced analytics, we equip you with the technology to thrive in a digital-first world.",
    orderBy: "",
  },
];

export const ACHIEVEMENTS = [
  { title: "7 years", text: "Selling Vision, Perception, & Growth" },
  {
    title: "100+ Projects",
    text: "Ideas & growth driven marketing executed",
  },
  { title: "20+ Awards", text: "Recognitize in media and technology" },
  {
    title: "Clientele",
    text: "We’ve partnered with top-tier firms globally",
  },
  { title: "Global Standard", text: "Our approach and processes" },
  {
    title: "Global Clientele",
    text: "We’re visible in 5 continents, & growing",
  },
];

type ServiceHelpType = {
  title: string;
  text: string;
  icon: string;
  bgColor: string;
  identifier: IdentifierType;
};

export const SERVICES_HELP: ServiceHelpType[] = [
  {
    title: "Strategic Marketing Communications",
    text: "Crafting compelling messages that resonate with your targets audience, inspiring them to take your desired actions.",
    icon: "marketing-icon",
    bgColor: "bg-b-light-green",
    identifier: "communication",
  },
  {
    title: "In-Depth Marketing Analysis",
    text: "Leveraging data to uncover insights and drive strategy and informed business decisions.",
    icon: "analysis-icon",
    bgColor: "bg-b-lightPink",
    identifier: "analytics",
  },
  {
    title: "Advanced Marketing Technology",
    text: "Implementing the latest technologies to enhance your marketing efforts and drive business outcomes.",
    icon: "technology-icon",
    bgColor: "bg-pryPurple",
    identifier: "technology",
  },
];

export const VALUES = [
  "Result-Oriented",
  "Authentic",
  "Professionalism",
  "Innovation",
  "Diligent",
];

// -----------------
export const ApproachStep1 = [
  {
    stage: "Stage 1",
    title: "Discovery",
    description:
      "Defining and finalizing project requirements and goals, outlining timelines and key milestones, and gaining a deep understanding of the challenges to be addressed",
    delay: 0.2,
  },
  {
    stage: "Stage 2",
    title: "Research",
    description:
      "Bridging knowledge gaps through in-depth research and analysis into behaviors, needs, and motivations. Analyzing competitive landscapes, markets, and industries to craft informed project strategy",
    className: "mt-[75px]",
    delay: 0.6,
  },
  {
    stage: "Stage 3",
    title: "Strategy",
    description:
      "Integrating insights from the Discovery and Research stages to develop a cohesive project plan. Refining functional requirements to ensure a seamless design and execution process",
    delay: 1.0,
  },
];

export const ApproachStep2 = [
  {
    stage: "Stage 4",
    title: "Identify Exposure",
    description:
      "Integrating insights from the Discovery and Research stages to develop a cohesive project plan. Refining functional requirements to ensure a seamless design and execution process",
    delay: 0.2,
  },
  {
    stage: "Stage 5",
    title: "Touchpoint",
    description:
      "Creating a comprehensive touchpoint processes to deliver impactful brand experiences tailored to the targeted audience.",
    className: "mt-[75px]",
    delay: 0.6,
  },
  {
    stage: "Stage 6",
    title: "Assets",
    description:
      "Formally approving the project's completion, ensuring alignment with specifications, and preparing for release to the intended audience.",
    delay: 1.0,
  },
];

export const STATEMENTS = [
  {
    leftIcon: "pink-star",
    rightIcon: "pink-star",
    title: "Vision Statement",
    backgroundColor: "bg-b-lightPink",
    textContent:
      "To be a global leader in media technology, revolutionizing business solutions with innovative products and unparalleled value for our partners and stakeholders across Africa and beyond",
  },
  {
    leftIcon: "purple-star",
    rightIcon: "purple-star",
    title: "Mission Statement",
    backgroundColor: "bg-pryPurple",
    textContent:
      "To empower businesses with cutting-edge media technology and customized marketing solutions, leveraging advanced data and analytics to drive growth, efficiency, and strategic success worldwide",
  },
];

export const STORY_CONTENTS = [
  {
    title: "Our Story",
    text: "SellMedia Group, pioneers at the nexus of media and technology, embark on a transformative journey fueled by innovation. With a dynamic approach and relentless pursuit of creativity, we empower enterprises to navigate the digital age with confidence. We are a multi-national media technology service company with a 360 degrees marketing scope and a mission to revolutionise the media and marketing space",
    highlightImg: "/imgs/highlight-right.png",
    mainImg: "/imgs/story1.png",
    initialX: 100,
  },
  {
    text: "We operate at the intersection of media and technology and deliver results-driven marketing services to our clients. Our diverse team, armed with cutting-edge technologies, delves deep into client dilemmas, crafting solutions that defy convention. Guiding businesses towards unparalleled success, SellMedia Group stands as a beacon of innovation in an ever-evolving landscape.",
    highlightImg: "/imgs/highlight-left.png",
    mainImg: "/imgs/story2.png",
    initialX: -100,
  },
];

export const CULTURE1 = [
  {
    img: "research",
    title: "Research & Knowledge Base",
    description: "We distil insights for precise, effective solutions",
  },
  {
    img: "plans",
    title: "Plans, Timeframes & Performance Metrics",
    description:
      "We provide plans, timeframes, and metrics to empower client progress",
  },
];

export const CULTURE2 = [
  {
    img: "research",
    title: "Quality Control",
    description:
      "Our stringent quality control ensures superior client results",
  },
  {
    img: "research",
    title: "Involvement & Follow-up",
    description:
      "Dedicated Account Managers ensure transparency and collaboration",
  },
];

export const footprint = [
  { bg: "#F7B500", name: "OOH" },
  { bg: "#B620E0", name: "EVENTS" },
  { bg: "#32C5FF", name: "RESEARCH" },
];

export const footprint2 = [
  { bg: "#FF3030", name: "PRODUCTION" },
  { bg: "#0091FF", name: "TECHNOLOGY" },
  { bg: "#6236FF", name: "WORKSHOP & TRADING" },
];

export const TEAM = [
  { img: "lateef", name: "Lekan Oganla", description: "Group CEO" },
  { img: "tayewo", name: "Tayewo Osiyemi", description: "Country Director" },
  { img: "lateephah", name: "Lateephah Abdul", description: "Country Manager" },
  { img: "joshua", name: "Joshua Theophilus", description: "VP of Product" },
  {
    img: "rasheed",
    name: "Rasheed Olamilekan",
    description: "Head of Support and Services",
  },
  {
    img: "ademilola",
    name: "Ademilola Ademiluyi",
    description: "Head of Digital",
  },
  { img: "ezenwa", name: "Ezenwa Ossai", description: "Creative Designer" },
  { img: "eniola", name: "Eniola Cmas", description: "Associate Partnerships" },
];

export const PROJECTS = [
  { label: "Agriculture", value: "Agriculture".replace(/\s+/g, "-") },
  { label: "Automobiles and Components", value: "Automobiles-and-Components" },
  {
    label: "Commercial and Professional Service",
    value: "Commercial-and-Professional-Service",
  },
  {
    label: "Constructions and Real Estate",
    value: "Constructions-and-Real-Estate",
  },
  { label: "Consumer Services", value: "Consumer-Services" },
  { label: "Education", value: "Education" },
  { label: "Energy and Utilities", value: "Energy-and-Utilities" },
  { label: "Financial Institution", value: "Financial-Institution" },
  { label: "Food, Beverage, and Tobacco", value: "Food-Beverage-and-Tobacco" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Hospitality", value: "Hospitality" },
  { label: "Insurance", value: "Insurance" },
  { label: "Media and Entertainment", value: "Media-and-Entertainment" },
  {
    label: "Non-Governmental Organization",
    value: "Non-Governmental-Organization",
  },
  { label: "Oil and Gas", value: "Oil-and-Gas" },
  { label: "Retail", value: "Retail" },
];

type IdentifierType = "communication" | "analytics" | "technology";

type ServiceType = {
  icon: string;
  service: string;
  link: string;
  identifier: IdentifierType;
};

export const SERVICES_OFFERED: ServiceType[] = [
  {
    icon: "/icons/services/analytics.svg",
    service: "Marketing Communications",
    link: "#communications",
    identifier: "communication",
  },
  {
    icon: "/icons/services/communications.svg",
    service: "Marketing Analytics",
    link: "#analytics",
    identifier: "analytics",
  },
  {
    icon: "/icons/services/technology.svg",
    service: "Marketing Technology",
    link: "#technology",
    identifier: "technology",
  },
];

export const MARKETING_COMMUNICATION = [
  {
    icon: "brand-management",
    service: "Brand Management",
    description: "Developing and refining brand messaging for consistency.",
  },

  {
    icon: "content-marketing-and-creation",
    service: "Content Marketing and Creation",
    description:
      "Providing tailored content creation for diverse marketing needs",
  },
  {
    icon: "public-relations",
    service: "Public Relations (PR)",
    description:
      "Managing press releases, media events, relations, and crises.",
  },
  {
    icon: "advertising-and-marketing-campaigns",
    service: "Advertising and Marketing Campaigns",
    description:
      "Planning and executing diverse advertising campaigns across channels.",
  },
  {
    icon: "creative-design",
    service: "Creative Design",
    description: "Using design to enhance brand presence and engagement.",
  },
  {
    icon: "social-media-management",
    service: "Social Media Management:",
    description:
      "Managing social media: strategy, content, engagement, and analytics.",
  },
  {
    icon: "influencer-marketing",
    service: "Influencer Marketing",
    description: "Executing influencer campaigns to amplify brand credibility",
  },
  {
    icon: "email-marketing",
    service: "Email Marketing",
    description:
      "Managing email campaigns to nurture leads and drive conversions.",
  },
  {
    icon: "event-and-experiential-marketing",
    service: "Event and Experiential Marketing",
    description: "Planning and executing events to boost brand awareness.",
  },
];

export const MARKETING_ANALYTICS = [
  {
    icon: "data-collection-and-management",
    service: "Data Collection and Management",
    description:
      "Implementing tools for collecting and managing marketing data.",
  },

  {
    icon: "performance-marketing-and-tracking",
    service: "Performance Marketing and Tracking",
    description:
      "Tracking and analysing KPIs across marketing channels for performance",
  },
  {
    icon: "customer-segmentation-and-user-profiling",
    service: "Customer Segmentation and User Profiling",
    description:
      "Segmenting customers using data for targeted marketing efforts.",
  },
  {
    icon: "predictive-analytics",
    service: "Predictive Analytics",
    description: "Using advanced analytics to predict trends and outcomes.",
  },
  {
    icon: "roi-analysis",
    service: "ROI Analysis",
    description:
      "Analysing ROI by comparing customer acquisition costs to revenue.",
  },
  {
    icon: "ab-testing",
    service: "A/B Testing",
    description: "Conducting A/B tests to optimize conversion rates.",
  },
  {
    icon: "digital-analytics",
    service: "Digital Analytics",
    description:
      "Utilizing analytics tools to analyse marketing data across channels.",
  },
  {
    icon: "data-visualisation",
    service: "Data Visualisation",
    description:
      "visualizing marketing data for intuitive decision-making with charts & dashboards.",
  },
  {
    icon: "measurement-and-optimisation",
    service: "Measurement and Optimisation",
    description:
      "Using first and third-party data to measure and optimize campaigns.",
  },
];

export const MARKETING_TECHNOLOGY = [
  {
    icon: "customer-experience",
    service: "Customer Experience (CX)",
    description:
      "Improving CX through feedback analysis and personalized marketing.",
  },

  {
    icon: "marketing-automation",
    service: "Marketing Automation",
    description:
      "Marketing automation tools streamline tasks, nurture leads, and personalise..",
  },
  {
    icon: "adtest",
    service: "AdTest",
    description:
      "Managing and optimising digital advertising campaigns across channels.",
  },
  {
    icon: "augmented-reality",
    service: "Augmented Reality (AR) and Virtual Reality (VR)",
    description: "We use AR/VR tools for creative marketing.",
  },
  {
    icon: "machine-learning",
    service: "Machine Learning",
    description: "We use AI and machine learning for personalized marketing.",
  },
  {
    icon: "analytics-attribution-softwares",
    service: "Analytics/ Attribution Softwares",
    description:
      "Tracking campaign effectiveness and attribution with analytics.",
  },
];
