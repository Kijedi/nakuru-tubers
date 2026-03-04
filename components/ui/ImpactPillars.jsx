"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { impactPillars } from "@/components/data/impact-pillars";

export default function ImpactPillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Pillars */}
        <div className="space-y-24 lg:space-y-32">
          {impactPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isEmerald = pillar.color === "emerald";
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={pillar.id}
                id={pillar.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className="scroll-mt-24"
              >
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image Side */}
                  <div
                    className={`relative ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative">
                      {/* Main Image */}
                      <div className="relative h-80 overflow-hidden rounded-3xl lg:h-96">
                        <Image
                          src={pillar.image}
                          alt={pillar.title}
                          fill
                          className="object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${
                            isEmerald
                              ? "from-emerald-900/50"
                              : "from-orange-900/50"
                          } to-transparent`}
                        />

                        {/* Icon Badge */}
                        <div
                          className={`absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl ${
                            isEmerald
                              ? "bg-emerald-500 text-white"
                              : "bg-orange-500 text-white"
                          } shadow-lg`}
                        >
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>

                      {/* Decorative Border */}
                      <div
                        className={`absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 ${
                          isEmerald ? "border-emerald-200" : "border-orange-200"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                    {/* Tag */}
                    <span
                      className={`inline-block rounded-full px-4 py-2 text-sm font-medium ${
                        isEmerald
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {pillar.tagline}
                    </span>

                    {/* Title */}
                    <h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                      {pillar.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                      {pillar.description}
                    </p>

                    {/* Stats */}
                    <div className="mt-8 flex flex-wrap gap-6">
                      {pillar.stats.map((stat, statIndex) => (
                        <div key={statIndex}>
                          <p
                            className={`text-3xl font-bold ${
                              isEmerald ? "text-emerald-600" : "text-orange-600"
                            }`}
                          >
                            {stat.value}
                          </p>
                          <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mt-8 space-y-3">
                      {pillar.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-3">
                          <div
                            className={`flex h-6 w-6 items-center justify-center rounded-full ${
                              isEmerald ? "bg-emerald-100" : "bg-orange-100"
                            }`}
                          >
                            <svg
                              className={`h-4 w-4 ${
                                isEmerald
                                  ? "text-emerald-600"
                                  : "text-orange-600"
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <div className="rounded-3xl bg-gray-900 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white lg:text-3xl">
              Partner with Us to Scale Impact
            </h3>
            <p className="mt-4 text-gray-400">
              Join our mission to transform agriculture and empower farmers across
              Kenya. Together, we can reach 200,000 farmers by 2030.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                Get in Touch
              </a>
              <a
                href="/about"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
