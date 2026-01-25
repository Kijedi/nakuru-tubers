"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaUsers, FaFemale, FaChild } from "react-icons/fa";

export default function TeamHero() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/team/team.jpg"
          alt="Nakuru Tubers Team"
          fill
          priority
          className="object-cover object-top"
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
              <FaUsers className="h-4 w-4" />
              Meet Our Team
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            A Young, Passionate, &{" "}
            <span className="text-emerald-400">Diverse Team</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl"
          >
            Meet our exceptional team at Nakuru Tubers! Comprising talent and
            expertise, we are a dedicated group committed to delivering
            excellence in every project and transforming potato farming across Kenya.
          </motion.p>

          {/* Stats Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {/* Youth Badge */}
            <div className="flex items-center gap-3 rounded-full bg-orange-500/20 px-5 py-3 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                <FaChild className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">100%</p>
                <p className="text-xs text-orange-300">Youth (Under 35)</p>
              </div>
            </div>

            {/* Women Badge */}
            <div className="flex items-center gap-3 rounded-full bg-emerald-500/20 px-5 py-3 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                <FaFemale className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">60%</p>
                <p className="text-xs text-emerald-300">Women-Led</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
