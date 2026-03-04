"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LuLightbulb } from "react-icons/lu";
import { IoEarthOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { PiHandFistLight } from "react-icons/pi";

const values = [
  {
    name: "Innovation",
    icon: LuLightbulb,
    description:
      "Continuously improving potato farming through cutting-edge science and technology.",
    gradient: "from-emerald-500 to-teal-500",
    hoverBg: "group-hover:bg-emerald-500",
  },
  {
    name: "Sustainability",
    icon: IoEarthOutline,
    description:
      "Prioritizing eco-friendly practices to safeguard our planet for future generations.",
    gradient: "from-teal-500 to-cyan-500",
    hoverBg: "group-hover:bg-teal-500",
  },
  {
    name: "Empowerment",
    icon: PiHandFistLight,
    description:
      "Uplifting farmers, especially youth and women, and strengthening rural communities.",
    gradient: "from-orange-500 to-amber-500",
    hoverBg: "group-hover:bg-orange-500",
  },
  {
    name: "Integrity",
    icon: FaRegHandshake,
    description:
      "Upholding transparency and honesty in every aspect of our operations.",
    gradient: "from-emerald-600 to-green-500",
    hoverBg: "group-hover:bg-emerald-600",
  },
];

export default function ValuesModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            Our Core Values
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What Drives Us Forward
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are revolutionizing potato farming through innovative science and
            technology, guided by our core principles.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div
                  className={`relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    isHovered ? "border-transparent" : ""
                  }`}
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div
                      className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${value.gradient} p-4 text-white transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-500 group-hover:text-white">
                      {value.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 transition-colors duration-500 group-hover:text-white/90">
                      {value.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-6 flex items-center text-emerald-600 transition-colors duration-500 group-hover:text-white">
                      <span className="text-sm font-medium">Learn more</span>
                      <svg
                        className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
