"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaSeedling, FaGraduationCap, FaHandHoldingHeart } from "react-icons/fa";

const services = [
  {
    icon: FaSeedling,
    title: "Certified Seed Potatoes",
    description:
      "Access high-quality, KEPHIS-certified seed potatoes from 5+ varieties including Shangi, Kenya Mpya, and Unica for better yields.",
    image: "/images/new/IMG20251124131831.jpeg",
    color: "emerald",
  },
  {
    icon: FaGraduationCap,
    title: "Training & Capacity Building",
    description:
      "Comprehensive training programs on potato production, pest management, post-harvest handling, and business skills.",
    image: "/images/new/Impact(1).jpeg",
    color: "orange",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Consultation Services",
    description:
      "Expert agronomic support tailored to your farm's needs, from soil assessment to harvest optimization.",
    image: "/images/training/training3.jpg",
    color: "emerald",
  },
];

export default function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gray-50 py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
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
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            What We Offer
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions to help you succeed in potato farming, from
            seeds to market.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEmerald = service.color === "emerald";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isEmerald
                          ? "from-emerald-900/60"
                          : "from-orange-900/60"
                      } to-transparent`}
                    />

                    {/* Icon Badge */}
                    <div
                      className={`absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isEmerald
                          ? "bg-emerald-500 text-white"
                          : "bg-orange-500 text-white"
                      } shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="mt-6">
                      <Link
                        href="/services"
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${
                          isEmerald ? "text-emerald-600" : "text-orange-600"
                        } transition-colors hover:underline`}
                      >
                        Learn more
                        <GoArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 ${
                      isEmerald ? "bg-emerald-500" : "bg-orange-500"
                    } transition-all duration-500 group-hover:w-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
          >
            View All Services
            <GoArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
