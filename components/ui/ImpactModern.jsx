"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaMobileAlt, FaUsers, FaLeaf } from "react-icons/fa";

const pillars = [
  {
    icon: FaBriefcase,
    title: "Job Creation",
    description:
      "Creating meaningful livelihoods for youth in rural communities through decentralized models like Digital Connectors and agro-entrepreneurs.",
    image: "/images/pillars/2.jpg",
    color: "emerald",
  },
  {
    icon: FaMobileAlt,
    title: "Digitalization",
    description:
      "Leveraging digital platforms, smart tools, and data-driven seed distribution to bring innovation to smallholder farmers.",
    image: "/images/pillars/6.jpg",
    color: "orange",
  },
  {
    icon: FaUsers,
    title: "Inclusivity",
    description:
      "We drive inclusive participation in agriculture by centering women, differently abled persons and youth in leadership, production, and service delivery.",
    image: "/images/pillars/1.jpg",
    color: "emerald",
  },
  {
    icon: FaLeaf,
    title: "Food Security",
    description:
      "Improving productivity, incomes, and nutrition outcomes through certified seed access and climate-resilient farming.",
    image: "/images/pillars/5.jpg",
    color: "orange",
  },
];

export default function ImpactModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gray-900 py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            Our Impact
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Driving Change Through{" "}
            <span className="text-orange-400">Four Pillars</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our comprehensive approach ensures sustainable and lasting impact
            across Kenya's agricultural landscape.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-16 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isLarge = index === 0 || index === 3;
            const isEmerald = pillar.color === "emerald";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`group relative ${
                  isLarge ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <div className="relative h-full min-h-[300px] overflow-hidden rounded-3xl">
                  {/* Background Image */}
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover saturate-[1.1] transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isEmerald
                        ? "from-emerald-950/95 via-emerald-950/60"
                        : "from-orange-950/95 via-orange-950/60"
                    } to-transparent transition-opacity duration-500 group-hover:opacity-90`}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    {/* Icon */}
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                        isEmerald
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-orange-500/20 text-orange-400"
                      } backdrop-blur-sm transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-xl font-bold text-white lg:text-2xl">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-300 lg:text-base">
                      {pillar.description}
                    </p>

                    {/* Hover Line */}
                    <div
                      className={`mt-4 h-1 w-0 rounded-full ${
                        isEmerald ? "bg-emerald-400" : "bg-orange-400"
                      } transition-all duration-500 group-hover:w-20`}
                    />
                  </div>

                  {/* Corner Decoration */}
                  <div
                    className={`absolute right-4 top-4 h-16 w-16 rounded-2xl border ${
                      isEmerald ? "border-emerald-500/30" : "border-orange-500/30"
                    } opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-12 lg:gap-16"
        >
          {[
            { value: "700K", label: "Target Farmers" },
            { value: "SDG", label: "Aligned Goals" },
            { value: "2030", label: "Vision Year" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-white lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
