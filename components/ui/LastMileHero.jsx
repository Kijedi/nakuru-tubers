"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaTruck, FaMobileAlt, FaUsers } from "react-icons/fa";

export default function LastMileHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/digital-connectors/bike.jpg"
          alt="Last mile delivery network"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/20" />
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
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-2 text-sm font-medium text-orange-300 backdrop-blur-sm">
              <FaTruck className="h-4 w-4" />
              Last Mile Network
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Connecting Farmers,{" "}
            <span className="text-orange-400">Markets</span>,
            <br />& Communities
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl"
          >
            Our innovative last-mile delivery network ensures certified seed potatoes
            reach even the most remote farming communities. Through Digital Connectors
            and our dedicated fleet, we bridge the gap between quality seeds and
            smallholder farmers.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            {[
              { icon: FaUsers, value: "12+", label: "Digital Connectors" },
              { icon: FaMobileAlt, value: "10K+", label: "Farmers Reached" },
              { icon: FaTruck, value: "6+", label: "Counties Covered" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-orange-400 backdrop-blur-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
