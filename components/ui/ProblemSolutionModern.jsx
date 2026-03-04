"use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaExclamationTriangle, FaLightbulb, FaCheckCircle } from "react-icons/fa";

const challenges = [
  "98% rely on farm-saved seeds",
  "Low yields (9-10 t/ha vs potential 20-40 t/ha)",
  "Erratic weather and prolonged droughts",
  "Limited climate-smart practices",
];

const solutions = [
  "Hydroponics & aeroponics technology",
  "Certified, climate-resilient seed varieties",
  "Climate-smart practice training",
  "Market access & end-to-end support",
];

export default function ProblemSolutionModern() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 lg:py-32"
    >
      {/* Background Decoration */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Challenge Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            style={{ y: y1 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, clipPath: "circle(0% at 50% 50%)" }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, clipPath: "circle(100% at 50% 50%)" }
                  : {}
              }
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <Image
                src="/images/product2.jpg"
                alt="Potato farming challenge"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            </motion.div>

            {/* Floating Stat Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -right-4 bottom-6 rounded-2xl border border-red-100 bg-white p-4 shadow-xl lg:-right-8"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-red-100 p-2">
                  <FaExclamationTriangle className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">98%</p>
                  <p className="text-xs text-gray-500">Use farm-saved seeds</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
              <FaExclamationTriangle className="h-4 w-4" />
              The Challenge
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What's the challenge with{" "}
              <span className="text-emerald-600">potato farming</span> in Kenya?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600 lg:text-lg">
              Kenya's smallholder potato farmers face significant obstacles that
              limit their productivity and threaten their livelihoods.
            </p>

            {/* Challenge List */}
            <ul className="mt-8 space-y-4">
              {challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-20 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
          >
            <FaLightbulb className="h-8 w-8" />
          </motion.div>
        </div>

        {/* Solution Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <FaLightbulb className="h-4 w-4" />
              Our Solution
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How we're{" "}
              <span className="text-orange-600">solving the problem</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600 lg:text-lg">
              At Nakuru Tubers, we're revolutionizing potato farming through
              innovative science and technology, empowering farmers with the
              tools and knowledge they need to succeed.
            </p>

            {/* Solution List */}
            <ul className="mt-8 space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" />
                  <span className="text-gray-700">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div style={{ y: y2 }} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }
                  : {}
              }
              transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <Image
                src="/images/product1.jpeg"
                alt="Nakuru Tubers solution"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
            </motion.div>

            {/* Floating Success Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -left-4 bottom-6 rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl lg:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-emerald-100 p-2">
                  <FaCheckCircle className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">4x</p>
                  <p className="text-xs text-gray-500">Yield improvement</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-2xl border-2 border-emerald-200" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
