"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "If We",
    description:
      "Empower smallholder farmers by providing access to certified climate-resilient seed potato varieties, training in climate-smart agricultural practices and financial literacy, and reliable markets for their produce.",
    highlights: [
      "Certified climate-resilient seed potatoes",
      "Climate-smart practice training",
      "Market access support",
    ],
  },
  {
    number: "02",
    title: "Then",
    description:
      "Smallholder farmers will have the resources needed to achieve higher yields, adapt to climate change, and improve their livelihoods. This will reduce hunger, increase income, and create sustainable farming jobs.",
    highlights: [
      "Higher crop yields",
      "Climate adaptation",
      "Sustainable livelihoods",
    ],
  },
  {
    number: "03",
    title: "Leading To",
    description:
      "A sustainable, scalable business model contributing to SDG 1 (No Poverty), SDG 2 (Zero Hunger), SDG 5, SDG 8, SDG 12, and SDG 13 (Climate Action).",
    highlights: ["Scalable model", "SDG alignment", "Africa-wide impact"],
  },
];

const sdgImages = [
  "/images/sdg/sdg1.png",
  "/images/sdg/sdg2.png",
  "/images/sdg/sdg3.png",
  "/images/sdg/sdg5.png",
  "/images/sdg/sdg8.png",
  "/images/sdg/sdg12.png",
  "/images/sdg/sdg13.png",
];

export default function TheoryOfChangeModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Decoration */}
      <div className="absolute left-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-50 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            Our Approach
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Theory of <span className="text-orange-600">Change</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A systematic approach to creating lasting, measurable impact in
            Kenya's agricultural sector.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Connection Line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-500 via-orange-500 to-emerald-500 lg:left-1/2 lg:block" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Number Badge */}
                <div
                  className={`absolute left-0 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${
                    index === 1
                      ? "from-orange-500 to-amber-500"
                      : "from-emerald-500 to-teal-500"
                  } text-xl font-bold text-white shadow-lg lg:left-1/2 lg:-translate-x-1/2`}
                >
                  {step.number}
                </div>

                {/* Content */}
                <div
                  className={`pl-24 lg:pl-0 ${
                    index % 2 === 0 ? "lg:pr-20 lg:text-right" : "lg:order-2 lg:pl-20"
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold lg:text-3xl ${
                      index === 1 ? "text-orange-600" : "text-emerald-600"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{step.description}</p>

                  {/* Highlights */}
                  <div
                    className={`mt-6 flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "lg:justify-end" : ""
                    }`}
                  >
                    {step.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                          index === 1
                            ? "bg-orange-50 text-orange-700"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Placeholder for grid alignment */}
                <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* SDG Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="mb-8 text-center text-xl font-semibold text-gray-900">
            Aligned with UN Sustainable Development Goals
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {sdgImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="relative h-20 w-20 overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-xl lg:h-24 lg:w-24"
              >
                <Image src={img} alt="SDG Goal" fill className="object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
