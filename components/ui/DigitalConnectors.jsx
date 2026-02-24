"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaMobileAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: FaMobileAlt,
    title: "Digital-First Approach",
    description:
      "Equipped with smartphones and digital tools to track orders, provide agronomic advice, and connect farmers to markets in real-time.",
  },
  {
    icon: FaUsers,
    title: "Community Embedded",
    description:
      "Local entrepreneurs who understand their communities, speak the language, and build trust with farmers.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Wide Coverage",
    description:
      "Present in major potato-growing regions including Nakuru, Nyandarua, Meru, Narok, and expanding across Kenya.",
  },
  {
    icon: FaHandshake,
    title: "End-to-End Support",
    description:
      "From seed selection to harvest advice, Digital Connectors provide comprehensive support throughout the growing season.",
  },
];

export default function DigitalConnectors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Digital Connectors
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Local Agents,{" "}
              <span className="text-emerald-600">Digital Power</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Our network of 12+ Digital Connectors serves as the backbone of our
              last-mile delivery system. These local entrepreneurs use digital
              tools to connect over 10,000 farmers to certified seed potatoes,
              agronomic advice, and market opportunities.
            </p>

            {/* Features Grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Row */}
            <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-100 pt-8">
              {[
                { value: "12+", label: "Active Connectors" },
                { value: "10,000+", label: "Farmers Served" },
                { value: "6", label: "Counties" },
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-emerald-600">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="grid gap-4">
              {/* Main Image */}
              <div className="relative h-72 overflow-hidden rounded-3xl lg:h-80">
                <Image
                  src="/images/new/Impact.jpeg"
                  alt="Digital Connector working with farmers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-4 py-3 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-gray-900">
                    Digital Connectors
                  </p>
                  <p className="text-xs text-gray-600">
                    Bridging technology and farming
                  </p>
                </div>
              </div>

              {/* Two Smaller Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/pillars/6.jpg"
                    alt="Mobile technology in agriculture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/new/IMG20251010111120.jpeg"
                    alt="Sustainability and tree planting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-3xl border-2 border-emerald-200" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
