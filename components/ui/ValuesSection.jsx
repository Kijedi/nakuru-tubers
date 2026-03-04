"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt
} from "react-icons/hi2";

const values = [
  {
    name: "Communication",
    icon: HiOutlineChatBubbleLeftRight,
    description:
      "Open, transparent dialogue with farmers, partners, and communities to understand needs and deliver solutions.",
    color: "emerald",
  },
  {
    name: "Innovation",
    icon: HiOutlineLightBulb,
    description:
      "Continuously improving through cutting-edge science, technology, and creative problem-solving.",
    color: "orange",
  },
  {
    name: "Empowerment",
    icon: HiOutlineRocketLaunch,
    description:
      "Uplifting farmers, especially youth and women, with knowledge, resources, and market access.",
    color: "emerald",
  },
  {
    name: "Integrity",
    icon: HiOutlineShieldCheck,
    description:
      "Upholding honesty, transparency, and ethical practices in every interaction and operation.",
    color: "orange",
  },
  {
    name: "Sustainability",
    icon: HiOutlineGlobeAlt,
    description:
      "Prioritizing eco-friendly practices and climate-smart solutions for future generations.",
    color: "emerald",
  },
];

export default function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gray-50 py-24 lg:py-32">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            Our Core Values
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What Drives Us Forward
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our values guide every decision, from the seeds we certify to the
            farmers we serve.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isEmerald = value.color === "emerald";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group relative ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                      isEmerald
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-orange-100 text-orange-600"
                    } transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {value.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 ${
                      isEmerald ? "bg-emerald-500" : "bg-orange-500"
                    } transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
