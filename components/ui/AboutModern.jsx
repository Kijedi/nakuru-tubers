"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PiBinocularsDuotone, PiTargetDuotone } from "react-icons/pi";

export default function AboutModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, clipPath: "inset(10% 10% 10% 10%)" },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-white py-24 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image Section */}
          <motion.div variants={imageVariants} className="relative lg:mr-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/about2.jpg"
                alt="About Nakuru Tubers"
                fill
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
            </div>

            {/* Floating Card - Moved outside overflow container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -right-4 bottom-8 rounded-2xl border border-emerald-100 bg-white p-6 shadow-xl z-20 lg:right-8"
            >
              <p className="text-4xl font-bold text-emerald-600">20,000</p>
              <p className="text-sm text-gray-600">Farmers by 2030</p>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -left-4 -top-4 z-0 h-24 w-24 rounded-2xl border-2 border-emerald-200 lg:-left-8 lg:-top-8" />
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <motion.div variants={itemVariants}>
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                About Us
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
            >
              Unlocking Kenya's{" "}
              <span className="text-emerald-600">Potato Potential</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-base leading-relaxed text-gray-600 lg:text-lg"
            >
              We utilize scientific research to produce certified seed potatoes
              using innovative technologies to help farmers increase yields,
              reduce postharvest losses and adapt to climate change. We aim to
              serve 20,000 smallholder farmers by 2030, transforming potato
              farming in Kenya through climate-resilient, certified seed potato.
            </motion.p>

            {/* Vision & Mission Cards */}
            <div className="mt-10 space-y-4">
              <motion.div
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-r from-gray-50 to-white p-6 transition-all duration-300 hover:border-orange-200 hover:shadow-lg"
              >
                <PiBinocularsDuotone className="absolute -right-4 -top-4 h-24 w-24 text-orange-500/10 transition-transform duration-500 group-hover:scale-110" />
                <div className="relative">
                  <h3 className="text-lg font-bold text-orange-600">Vision</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    To revolutionize potato farming in Africa through
                    innovation, resilience, and climate-smart potato solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-r from-gray-50 to-white p-6 transition-all duration-300 hover:border-emerald-200 hover:shadow-lg"
              >
                <PiTargetDuotone className="absolute -right-4 -top-4 h-24 w-24 text-emerald-500/10 transition-transform duration-500 group-hover:scale-110" />
                <div className="relative">
                  <h3 className="text-lg font-bold text-emerald-600">Mission</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    To provide certified seed potatoes and innovative training
                    solutions that empower 700,000 smallholder farmers in Kenya.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
