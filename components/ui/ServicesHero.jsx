"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHandshake } from "react-icons/fa";

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pillars/7.jpg"
          alt="Agricultural consultancy services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[60vh] max-w-7xl items-center px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
              <FaHandshake className="h-4 w-4" />
              Expert Consultancy
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Our <span className="text-emerald-400">Services</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl"
          >
            Comprehensive consultancy and training services designed to help you
            succeed in potato farming. From seed selection to market access, our
            expert team guides you every step of the way.
          </motion.p>

          {/* Service Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              "Ware Potato",
              "Post-Harvest",
              "Seed Merchants",
              "Training",
            ].map((service, index) => (
              <span
                key={index}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
