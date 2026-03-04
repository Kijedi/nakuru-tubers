"use client";

import { services } from "../data/services";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaSeedling, FaBoxOpen, FaStore, FaGraduationCap } from "react-icons/fa";

const serviceIcons = [FaSeedling, FaBoxOpen, FaStore, FaGraduationCap];

export default function ServicesModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "32px 32px",
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
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            Our Services
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Empowering Farmers,{" "}
            <span className="text-emerald-600">Elevating Production</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tailored consultancy services to help farmers maximize yields,
            improve quality, and access premium markets.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || FaSeedling;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href={`/services/${index}`} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover saturate-[1.1] transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute left-6 top-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Service Number */}
                      <div className="absolute right-6 top-6">
                        <span className="text-5xl font-bold text-white/20">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                        {service.description}
                      </p>

                      {/* Packages Preview */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.packages?.slice(0, 3).map((pkg, pIndex) => (
                          <span
                            key={pIndex}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                          >
                            {pkg.name.split(" ")[0]}
                          </span>
                        ))}
                        {service.packages?.length > 3 && (
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-600">
                            +{service.packages.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-sm font-semibold text-emerald-600 transition-colors duration-300 group-hover:text-emerald-700">
                          View Service
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white transition-all duration-300 group-hover:bg-emerald-600 group-hover:shadow-lg group-hover:shadow-emerald-500/30">
                          <GoArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>

                      {/* Hover Gradient Line */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Need a custom solution?{" "}
            <Link
              href="/contact"
              className="font-semibold text-emerald-600 underline underline-offset-4 transition-colors hover:text-emerald-700"
            >
              Contact us for a tailored package
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
