import React from "react";
import Image from "next/image";

const contents = [
  {
    image: "/images/pillars/2.jpg",
    title: "",
    description: "",
  },
  {
    image: null,
    title: "Job Creation",
    description:
      "We create meaningful livelihoods for youth in rural communities through decentralized models like Digital Connectors and agro-entrepreneurs, unlocking sustainable employment opportunities across Kenya’s agricultural value chains.",
  },
  {
    image: "/images/pillars/6.jpg",
    title: "",
    description: "",
  },
  {
    image: null,
    title: "Digitalization",
    description:
      "Leveraging digital platforms, smart tools, and data-driven seed distribution, we bring innovation to smallholder farmers, bridging gaps between research, markets, and rural realities.",
  },
  {
    image: "/images/pillars/1.jpg",
    title: "",
    description: "",
  },
  {
    image: null,
    title: "Women and Youth Empowerment",
    description:
      "We drive inclusive participation in agriculture by centering women and youth in leadership, production, and service delivery, ensuring equitable and sustainable rural transformation.",
  },
  {
    image: "/images/pillars/7.jpg",
    title: "",
    description: "",
  },
  {
    image: null,
    title: "Food Security",
    description:
      "Through certified seed access, climate-resilient farming, and farmer empowerment, we improve productivity, incomes, and nutrition outcomes to achieve food security in rural Kenya.",
  },
  {
    image: "/images/pillars/5.jpg",
    title: "",
    description: "",
  },
];

const Impact = () => {
  return (
    <section
      id="about"
      className="py-16 bg-orange-50 saturation-150 scroll-mt-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-orange-600">
        Our Impact Pillars
      </h2>
      <div className="grid lg:grid-cols-3  max-w-5xl mx-auto">
        {contents.map((content) => {
          return content.image ? (
            <PicItem image={content.image} />
          ) : (
            <TextItem title={content.title} description={content.description} />
          );
        })}
      </div>
    </section>
  );
};

const PicItem = ({ image }) => (
  <div className="relative w-full h-64 md:h-80 overflow-hidden">
    <Image
      layout="fill"
      objectFit="cover"
      className="transition-transform duration-500 saturate-150 hover:scale-105"
      src={image}
    />
  </div>
);

const TextItem = ({ title, description }) => (
  <div className="text-center bg-gray-100 flex items-center justify-center flex-col p-8">
    <h3 className="text-xl font-semibold mb-4 text-orange-600">{title}</h3>
    <p className="text-gray-700 text-sm leading-snug">{description}</p>
  </div>
);

export default Impact;
