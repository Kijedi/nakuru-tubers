"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaHandshake, FaUsers, FaSeedling, FaArrowRight } from "react-icons/fa";

const opportunities = [
  {
    icon: FaHandshake,
    title: "Be Our Partner",
    description: "Collaborate with us on impactful agricultural initiatives",
  },
  {
    icon: FaUsers,
    title: "Become a Field Agent",
    description: "Join our network of agricultural extension officers",
  },
  {
    icon: FaSeedling,
    title: "Be a Smart Farmer",
    description: "Access our certified seeds and expert guidance",
  },
];

export default function PartnerCtaModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative grid items-center gap-8 p-8 lg:grid-cols-2 lg:gap-12 lg:p-16">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -30, clipPath: "inset(10% 10% 10% 10%)" }}
              animate={
                isInView
                  ? { opacity: 1, x: 0, clipPath: "inset(0% 0% 0% 0%)" }
                  : {}
              }
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/training/training2.jpg"
                  alt="Partner with Nakuru Tubers"
                  fill
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
              </div>

              

              {/* Decorative Element */}
              <div className="absolute -left-4 -top-4 h-20 w-20 rounded-2xl border-2 border-emerald-500/30" />
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Join Our Mission
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Partner With Us
              </h2>

              <p className="mt-4 text-lg text-gray-300">
                Let's collaborate to scale impactful, climate-smart solutions
                for Kenya's smallholder farmers and secure a sustainable future.
              </p>

              {/* Opportunities */}
              <div className="mt-8 space-y-4">
                {opportunities.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/10"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500/30">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-8"
              >
                <Link
                  href="mailto:info@nakurutubers.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40"
                >
                  Partner With Us Today
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
