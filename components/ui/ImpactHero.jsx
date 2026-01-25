"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLeaf, FaBriefcase, FaMobileAlt, FaUsers } from "react-icons/fa";

const pillars = [
  { icon: FaLeaf, label: "Food Security" },
  { icon: FaBriefcase, label: "Job Creation" },
  { icon: FaMobileAlt, label: "Digitalization" },
  { icon: FaUsers, label: "Inclusivity" },
];

export default function ImpactHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pillars/7.jpg"
          alt="Impact on farming communities"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Our Impact
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Driving Change Through{" "}
            <span className="text-emerald-400">Four Pillars</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl"
          >
            Our comprehensive approach ensures sustainable and lasting impact across
            Kenya's agricultural landscape. From improving food security to creating
            jobs and driving inclusivity, we're building a better future for
            farming communities.
          </motion.p>

          {/* Pillar Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.a
                  key={index}
                  href={`#${pillar.label.toLowerCase().replace(/\s+/g, "-").replace("&", "")}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {pillar.label}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8"
          >
            {[
              { value: "30K+", label: "Farmers Impacted" },
              { value: "3000+", label: "Jobs Created" },
              { value: "2030", label: "Vision Year" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
