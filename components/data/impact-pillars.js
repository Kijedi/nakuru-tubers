import { FaLeaf, FaBriefcase, FaMobileAlt, FaUsers } from "react-icons/fa";

export const impactPillars = [
  {
    id: "food-security",
    icon: FaLeaf,
    title: "Food Security",
    tagline: "Growing abundance for communities",
    description:
      "We're committed to improving food security by providing certified, climate-resilient seed potatoes that significantly increase yields and ensure consistent food supply for families and communities.",
    stats: [
      { value: "30%", label: "Average yield increase" },
      { value: "100+", label: "Tons distributed" },
      { value: "5+", label: "Certified varieties" },
    ],
    highlights: [
      "Certified disease-free seed potatoes",
      "Climate-resilient varieties",
      "Post-harvest loss reduction training",
      "Nutrition-focused education programs",
    ],
    image: "/images/pillars/5.jpg",
    color: "emerald",
  },
  {
    id: "job-creation",
    icon: FaBriefcase,
    title: "Job Creation",
    tagline: "Building livelihoods, transforming communities",
    description:
      "Through our decentralized model, we create meaningful employment opportunities for youth in rural areas. From Digital Connectors to delivery riders, we're building an ecosystem of agricultural entrepreneurs.",
    stats: [
      { value: "3000+", label: "Jobs created" },
      { value: "12+", label: "Digital Connectors" },
      { value: "10+", label: "Delivery fleet staff" },
    ],
    highlights: [
      "Digital Connector entrepreneur program",
      "Delivery fleet employment",
      "Agro-dealer partnerships",
      "Training and mentorship programs",
    ],
    image: "/images/pillars/2.jpg",
    color: "orange",
  },
  {
    id: "digitalization",
    icon: FaMobileAlt,
    title: "Digitalization",
    tagline: "Technology for agricultural transformation",
    description:
      "We leverage digital platforms and smart tools to bring innovation to smallholder farmers. From SMS alerts to our AI-powered shop and Agriconnect App, technology drives our mission forward.",
    stats: [
      { value: "10K+", label: "Farmers on platform" },
      { value: "1", label: "Agriconnect App" },
      { value: "24/7", label: "Digital support" },
    ],
    highlights: [
      "SMS weather and market alerts",
      "AI-powered online shop",
      "Agriconnect mobile application",
      "Digital record-keeping tools",
    ],
    image: "/images/pillars/6.jpg",
    color: "emerald",
  },
  {
    id: "inclusivity",
    icon: FaUsers,
    title: "Inclusivity",
    tagline: "Inclusive growth for all",
    description:
      "We drive inclusive participation in agriculture by centering women, differently abled persons and youth in leadership, production, and service delivery, ensuring equitable and sustainable rural transformation.",
    stats: [
      { value: "30K+", label: "Farmers reached" },
      { value: "60%", label: "Women beneficiaries" },
      { value: "100%", label: "Youth-led team" },
    ],
    highlights: [
      "Women farmer cooperatives support",
      "Youth entrepreneurship programs",
      "Leadership training for women",
      "Targeted outreach to young farmers",
    ],
    image: "/images/pillars/1.jpg",
    color: "orange",
  },
];
