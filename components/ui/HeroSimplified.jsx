"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

export default function HeroSimplified() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/pillars/5.jpg"
          alt="Potato farming in Kenya"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-32 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Certified Seed Potatoes
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Welcome to{" "}
            <span className="text-emerald-400">Nakuru Tubers</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-xl font-light text-gray-200 sm:text-2xl"
          >
            Transforming Potato Farming Through{" "}
            <span className="font-medium text-orange-400">Innovation</span>
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300"
          >
            We empower smallholder farmers with certified seed potatoes and
            climate-smart agricultural practices, driving sustainable
            livelihoods across Kenya.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="group flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Our Services
              <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Learn About Us
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-8"
          >
            {[
              { value: "30K+", label: "Farmers Reached" },
              { value: "6+", label: "Counties Served" },
              { value: "3+", label: "Years of Impact" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <p className="text-3xl font-bold text-emerald-400 lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Side Image Gallery - Desktop */}
      <div className="absolute bottom-32 right-8 hidden gap-4 lg:flex">
        {["/images/pillars/1.jpg", "/images/pillars/2.jpg", "/images/pillars/6.jpg"].map(
          (src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.15, duration: 0.6 }}
              className="relative h-32 w-24 overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl"
            >
              <Image src={src} alt="Farm imagery" fill className="object-cover" />
            </motion.div>
          )
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Scroll
          </span>
          <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
