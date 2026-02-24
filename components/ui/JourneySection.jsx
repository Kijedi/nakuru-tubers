"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCalendarAlt, FaSeedling, FaUsers, FaTrophy } from "react-icons/fa";

const stats = [
  {
    icon: FaCalendarAlt,
    value: "3+",
    label: "Years",
    description: "Of dedicated service to farmers",
  },
  {
    icon: FaSeedling,
    value: "5+",
    label: "Varieties",
    description: "Certified seed potato varieties",
  },
  {
    icon: FaUsers,
    value: "30K+",
    label: "Farmers",
    description: "Smallholder farmers served",
  },
  {
    icon: FaTrophy,
    value: "100+",
    label: "Tons",
    description: "Quality seeds distributed",
  },
];

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Our Journey
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Growing Together with{" "}
              <span className="text-emerald-600">Kenya's Farmers</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Since 2022, Nakuru Tubers has been on a mission to transform potato
              farming in Kenya. We've grown from a small team with big dreams to a
              trusted partner for thousands of smallholder farmers across the country.
            </p>

            <p className="mt-4 text-gray-600">
              Our youth-led team combines agricultural expertise with digital
              innovation to deliver certified seed potatoes, training, and market
              linkages that help farmers thrive.
            </p>

            {/* Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-gray-900">
                          {stat.value}
                        </p>
                        <p className="font-medium text-emerald-600">
                          {stat.label}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-96 overflow-hidden rounded-3xl lg:h-[500px]">
                <Image
                  src="/images/pillars/4.jpg"
                  alt="Farmers working together"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl lg:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <FaSeedling className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-600">Youth-Led Team</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Border */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-emerald-200" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
