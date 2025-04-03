export const services = [
  {
    name: "Ware Potato",
    description: "We understand that every farmer's needs are unique. Our consultation packages are tailored to ensure you get the best guidance and support for successful potato farming."
,    image: "/images/bg1.jpg",
full_description:"We understand that every farmer's needs are unique. Our consultation packages are tailored to ensure you get the best guidance and support for successful potato farming.",
    href: "/services/0",
    packages: [
      {
        name: "BASIC - Starter Pack",
        price: "3,000 KES",
        services: [
          "Introductory session on basic potato production principles",
          "On-site assessment of farm suitability for potato production",
          "General recommendations on site preparation, seed selection, and planting techniques",
          "General advice on improving yields and basic pest/disease management",
          "Brief Q&A session to address farmer-specific concerns",
          "Access to our WhatsApp support group for continuous advice",
        ],
      },
      {
        name: "STANDARD - Grow Package",
        price: "5,000 KES",
        services: [
          "Detailed farm assessment",
          "Training on effective disease management and pest control",
          "Customized recommendations on fertilizer and nutrients schedules tailored for potatoes",
          "Introduction to proper potato postharvest handling practices",
          "Follow-up support via phone/email for 2 weeks post-visit",
          "Access to our WhatsApp support group for continuous advice",
        ],
        additional_services: [
          "Soil testing (charged) with free recommendations",
          "Transportation cost to the farm based on the distance",
        ],
      },
      {
        name: "Premium - Thrive Package",
        price: "10,000 KES",
        services: [
          "All services in the Standard Package",
          "Comprehensive training on advanced potato production techniques",
          "Access to a dedicated agronomist for one-on-one consultation",
          "Guidance on setting up a sustainable and profitable potato farming business model",
          "Full report with actionable insights and resources to improve productivity",
          "Up to two field visits during the growing season to monitor and guide progress",
        ],
        additional_services: [
          "Soil testing (charged) with free recommendations",
          "Transportation cost to the farm based on the distance",
        ],
      },
      {
        name: "Platinum - Harvest Package",
        price: "15,000 KES",
        services: [
          "All services in the Premium Package",
          "Advanced post-harvest management training, including proper storage solutions to maintain quality",
          "Dedicated agronomist support for three months with personalized guidance",
          "Assistance in market linkage for potato sales",
          "Three-month field support with up to three on-site visits (pre-planting, mid-season, and pre-harvest)",
          "Potato training manual",
          "A full report detailing action plans, market insights, and step-by-step implementation guidance",
        ],
      },
    ],
  },
  {
    name: "Post-harvest Handling",
    description:
      "Designed to equip farmers, cooperatives, and agribusinesses with the knowledge and tools they need to minimize losses and maximize profits.",
    image: "/images/bg4.jpg",
    href: "/services/1",

    full_description:
      "Our Post-Harvest Handling Consultancy Package is designed to equip farmers, cooperatives, and agribusinesses with the knowledge and tools they need to minimize losses and maximize profits. This package ensures proper handling, storage, and market preparation of potatoes to maintain quality and meet market standards.",
    packages: [
      {
        name: "YIELD SAVER PACKAGE",
        price: "KES 3,000",
        description:
          "For farmers or individuals seeking an introduction to post-harvest handling techniques.",
        services: [
          "Overview of post-harvest handling principles",
          "Basic training on sorting, grading, and packaging of potatoes",
          "Introduction to proper storage techniques for short-term storage",
          "Recommendations on tools and materials for handling and storage",
          "Access to WhatsApp support group for continuous advice",
        ],
      },
      {
        name: "STORAGE CHAMPION PACKAGE",
        price: "KES 6,000",
        description:
          "Ideal for small-scale farmers and cooperatives seeking customized solutions.",
        services: [
          "All services in the Basic Package",
          "Farm-specific assessment and recommendations for post-harvest handling",
          "Training on pest and disease management during storage",
          "Overview of common post-harvest treatments and their application",
          "Techniques for reducing bruising and damage during harvesting and transport",
          "Principles of designing simple and effective storage structures",
          "Simple record-keeping systems to track post-harvest losses and improve efficiency",
          "Two weeks of follow-up support via phone or email",
        ],
        includes: [
          "Training materials (handouts, presentations)",
          "Q&A session and open discussion",
          "Access to basic Nakuru Tubers resources (e.g., simple guides, contact information)",
        ],
      },
      {
        name: "MARKET READY PACKAGE",
        price: "KES 10,000",
        description:
          "Perfect for farmers and groups aiming for large-scale operations and market readiness.",
        services: [
          "All services in the Standard Package",
          "Comprehensive training on advanced storage techniques, including humidity and temperature control",
          "Guidance on proper transportation to reduce losses during transit",
          "Introduction to basic value addition techniques to enhance market value",
          "Full post-harvest handling manual customized for your farm",
          "One-on-one consultation with our post-harvest expert",
          "One follow-up visit during the post-harvest period",
        ],
        includes: [
          "Training materials (handouts, presentations)",
          "Q&A session and open discussion",
          "Access to Nakuru Tubers resources and potential linkages with relevant organizations",
          "One on-site farm visit to assess post-harvest handling practices and provide personalized recommendations",
        ],
      },
      {
        name: "PLATINUM QUALITY PACKAGE",
        price: "KES 15,000",
        description:
          "Tailored for large-scale farmers, cooperatives, and agribusinesses aiming to scale operations and improve profitability.",
        services: [
          "All services in the Premium Package",
          "Detailed guidance on building or upgrading storage facilities (design and materials)",
          "Post-harvest management plan for long-term storage and market supply",
          "Training on compliance with market standards and certifications",
          "Assistance in connecting with buyers and processors for offloading surplus stock",
          "Two follow-up visits and ongoing support for one-month post-training",
        ],
        includes: [
          "Training materials (handouts, presentations)",
          "Q&A session and open discussion",
          "Access to Nakuru Tubers resources and potential linkages with relevant organizations",
          "Comprehensive report with recommendations for improving post-harvest handling efficiency",
        ],
      },
    ],
    add_on_services: [
      {
        name: "Soil Testing",
        price: "Charged separately",
      },
      {
        name: "Storage Facility Design and Blueprint",
        price: "Starting at KES 10,000",
      },
      {
        name: "Market Linkage Support",
        price: "KES 3,000 per session",
      },
      {
        name: "Customized Post-Harvest Handling Guides",
        price: "KES 2,000 per copy",
      },
    ],
  },
  {
    name: "Seed Potato Merchants",
    description:
      "Provides the foundational knowledge and guidance needed to embark on your seed potato journey.",
    image: "/images/services/service3.jpg",
    href: "/services/2",

    full_description:
      "Our seed potato packages are tailored to provide farmers with the knowledge and tools they need to succeed in seed potato production, from foundational skills to advanced business strategies.",
    packages: [
      {
        name: "BASIC- Foundation Package",
        price: "KES 5,000",
        description:
          "This package provides the foundational knowledge and guidance needed to embark on your seed potato journey.",
        services: [
          "Introduction to seed potato production basics",
          "General advice on seed variety selection, farm preparation, and planting techniques",
          "Overview of seed potato certification requirements and procedures",
          "Basic Seed Quality Assessment guide",
          "On-site assessment of farm suitability for seed potato production",
          "Access to our WhatsApp support group for continuous guidance",
        ],
      },
      {
        name: "STANDARD- Growth Package",
        price: "KES 10,000",
        description:
          "This package provides in-depth knowledge and practical guidance to enhance your seed potato production.",
        services: [
          "All services in the Basic Package",
          "Comprehensive training on identifying and controlling major potato diseases and pests",
          "Recommendations on fertilizer schedules tailored to seed production to maximize yield and quality",
          "Record-keeping templates for monitoring crop progress, monitor costs, and improve efficiency",
          "One on-site follow-up visit during the growing season for personalized guidance and troubleshooting",
          "Introduction to seed potato storage techniques",
        ],
        additional_services: [
          "Soil testing and free recommendations (at a discounted rate)",
          "Transport to your farm (charged separately)",
        ],
      },
      {
        name: "PREMIUM PACKAGE – Bloom Package",
        price: "KES 20,000",
        description:
          "This package provides expert guidance and personalized support to optimize your seed potato business.",
        services: [
          "All services in the Standard Package",
          "Comprehensive training on advanced seed potato production techniques",
          "Develop a tailored seed production plan specific to your farm and market needs",
          "Expert advice on setting up an optimal seed potato storage facility to minimize losses and maintain quality",
          "Comprehensive guidance on navigating the seed certification process, including inspections and documentation",
          "Two personalized farm visits (pre-planting and mid-season) for in-depth monitoring and tailored recommendations",
        ],
        additional_services: [
          "Soil testing and recommendations (included)",
          "Transport to your farm (charged separately)",
        ],
      },
      {
        name: "PLATINUM PACKAGE- Summit Package",
        price: "KES 50,000",
        description:
          "The ultimate package for merchants aiming to establish themselves as industry leaders.",
        services: [
          "All services in the Premium Package",
          "Guidance on developing a sustainable and profitable seed potato business model",
          "Advanced training on post-harvest handling, grading, and storage techniques to maximize seed quality",
          "Guidance on seed certification and preparation for inspection",
          "Three on-site farm visits (pre-planting, mid-season, and pre-harvest) to ensure quality compliance",
          "One-on-one mentorship with a dedicated agronomist for three months for continuous guidance and support",
          "Support in identifying potential buyers and accessing premium markets for your certified seed potatoes",
          "Receive a detailed report with actionable plans, timelines, and resources to guide your seed potato business success",
        ],
        additional_services: [
          "Soil testing (included)",
          "Transport to your farm (charged separately)",
        ],
      },
    ],
  },
  {
    name: "Training and Capacity Building",
    image: "/images/services/service2.jpg",
    href: "/services/3",

    description:
      "Designed to empower farmers with the knowledge and skills they need to succeed in potato farming",
    full_description:
      "Our training and capacity-building packages empower farmers with the knowledge and skills to excel in potato farming. Tailored for various group sizes and organizations, these programs offer impactful, practical, and hands-on learning experiences.",
    packages: [
      {
        name: "Yield Booster Package (Up to 20 Farmers)",
        price: "KES 15,000 per session",
        description:
          "Ideal for small farmer groups seeking personalized training tailored to their needs.",
        services: [
          "Comprehensive training on potato production basics: site preparation, seed selection, and planting techniques",
          "Pest and disease management strategies",
          "Fertilizer application and nutrient management",
          "Post-harvest handling and storage techniques",
          "Climate-smart potato production techniques",
          "Practical demonstrations on good agricultural practices (GAP)",
        ],
        includes: [
          "Training materials (handouts, presentations)",
          "Q&A session and open discussion",
          "Access to Nakuru Tubers resources and a dedicated WhatsApp support group",
        ],
      },
      {
        name: "Growth Accelerator Package (20+ Farmers)",
        price: "KES 30,000 per session",
        description:
          "Perfect for larger groups seeking detailed training and resources for enhanced productivity.",
        services: [
          "All services included in the Yield Booster Package",
          "Detailed group-specific recommendations based on local conditions",
          "Introduction to simple record-keeping for tracking inputs, yields, and expenses",
          "Q&A sessions with our agronomists for personalized solutions",
          "Access to training videos and additional digital resources post-session",
        ],
        includes: [
          "Training materials (handouts, presentations)",
          "Q&A session and open discussion",
          "Access to Nakuru Tubers resources and a dedicated WhatsApp support group",
        ],
      },
      {
        name: "Cooperative Empowerment Package",
        price: "KES 40,000 per session",
        description:
          "Designed for established potato cooperatives focusing on scaling production and improving market linkages.",
        services: [
          "All services in the Growth Accelerator Package",
          "Guidance on cooperative-led seed potato production and storage",
          "Market linkage training and strategies for accessing premium markets",
          "Financial management training tailored to cooperative structures",
          "Access to exclusive cooperative resources, including buyer contacts and funding opportunities",
          "Post-training support for up to two months (via WhatsApp group and email)",
        ],
        includes: [
          "Training materials (handouts, presentations)",
          "Interactive group exercises and discussions",
          "Access to Nakuru Tubers resources and potential linkages with relevant organizations",
        ],
      },
      {
        name: "Customized Training for Institutions or Organizations",
        price: "Starting at KES 50,000",
        description:
          "Tailored for agricultural institutions, NGOs, or organizations working with potato farmers.",
        services: [
          "Needs assessment to design a customized training program",
          "Full-day training sessions covering advanced potato production techniques, seed certification, and business modeling",
          "Expert trainers with sector-specific knowledge and case studies",
          "Capacity-building strategies for trainers of trainers (ToTs)",
          "Comprehensive reports and action plans for implementation",
          "Ongoing support and consultation post-training (up to three months)",
        ],
      },
      {
        price: "Addons",
        services: [
          "Soil Testing Services",
          "Farm Assessment and Suitability Analysis",
          "Follow-Up Consultation Sessions: KES 1,500 per session (virtual)",
          "Record-keeping book: KES 400 per booklet",
        ],
      },
    ],
  },
];
