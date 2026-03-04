"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaEye, FaBullseye } from "react-icons/fa";

export default function MissionVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Image */}
              <div className="relative mb-8 h-72 overflow-hidden rounded-3xl lg:h-80">
                <Image
                  src="/images/new/IMG20250227132015.jpeg"
                  alt="Farmers working in potato field"
                  fill
                  className="object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent" /> */}
                {/* Icon Badge */}
                <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg">
                  <FaBullseye className="h-8 w-8" />
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  Our Mission
                </span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                  Serving Smallholder Farmers
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Serve{" "}
                  <span className="font-semibold text-emerald-600">
                    200,000 smallholder farmers by 2030
                  </span>{" "}
                  through science-led seed systems, providing certified
                  climate-resilient seed potatoes, training in climate-smart
                  agricultural practices, and reliable market linkages.
                </p>

                {/* Mission Highlights */}
                <div className="mt-6 space-y-3">
                  {[
                    "Certified seed potato distribution",
                    "Climate-smart training programs",
                    "Sustainable market connections",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                        <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="relative lg:mt-12">
              {/* Image */}
              <div className="relative mb-8 h-72 overflow-hidden rounded-3xl lg:h-80">
                <Image
                  src="/images/about2.jpg"
                  alt="Agricultural innovation and technology"
                  fill
                  className="object-cover object-top"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent" /> */}

                {/* Icon Badge */}
                <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
                  <FaEye className="h-8 w-8" />
                </div>
              </div>
              {/* Content */}
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                  Our Vision
                </span>
                <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                  Transforming African Agriculture
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Transform African agriculture through{" "}
                  <span className="font-semibold text-orange-600">
                    science-led seed systems
                  </span>
                  , empowering smallholder farmers with climate-resilient potato
                  varieties that increase yields, improve nutrition, and build
                  sustainable livelihoods.
                </p>

                {/* Vision Highlights */}
                <div className="mt-6 space-y-3">
                  {[
                    "Climate-resilient seed varieties",
                    "Science-driven innovation",
                    "Sustainable agricultural practices",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100">
                        <div className="h-2 w-2 rounded-full bg-orange-500" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <div className="relative rounded-3xl bg-gray-50 p-8 lg:p-12">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
            <p className="text-xl font-medium text-gray-900 lg:text-2xl">
              We believe every smallholder farmer deserves access to quality
              seeds and the knowledge to thrive in a changing climate.
            </p>
            <p className="mt-4 text-gray-500">— Nakuru Tubers Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
