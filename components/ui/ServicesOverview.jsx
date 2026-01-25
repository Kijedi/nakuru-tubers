"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import {
  FaSeedling,
  FaWarehouse,
  FaStore,
  FaGraduationCap,
} from "react-icons/fa";

const services = [
  {
    icon: FaSeedling,
    title: "Ware Potato Consultancy",
    description:
      "Comprehensive guidance on potato production from site preparation to harvest. Get expert advice on seed selection, planting techniques, pest management, and yield optimization tailored to your farm.",
    features: [
      "Farm suitability assessment",
      "Customized planting recommendations",
      "Pest and disease management",
      "Post-harvest handling guidance",
    ],
    image: "/images/pillars/5.jpg",
    color: "emerald",
  },
  {
    icon: FaWarehouse,
    title: "Post-Harvest Handling",
    description:
      "Minimize losses and maximize profits with our post-harvest handling consultancy. Learn proper sorting, grading, storage, and market preparation techniques to maintain potato quality.",
    features: [
      "Storage facility optimization",
      "Sorting and grading training",
      "Loss reduction strategies",
      "Market preparation guidance",
    ],
    image: "/images/pillars/2.jpg",
    color: "orange",
  },
  {
    icon: FaStore,
    title: "Seed Potato Merchants",
    description:
      "Start or scale your seed potato business with our merchant consultancy. From certification processes to business modeling, we provide the knowledge to succeed in the seed potato market.",
    features: [
      "KEPHIS certification guidance",
      "Business model development",
      "Quality assurance training",
      "Market linkage support",
    ],
    image: "/images/pillars/6.jpg",
    color: "emerald",
  },
  {
    icon: FaGraduationCap,
    title: "Training & Capacity Building",
    description:
      "Empower your team or community with comprehensive training programs. From small farmer groups to large cooperatives, we deliver impactful, hands-on learning experiences.",
    features: [
      "Group training sessions",
      "Cooperative empowerment programs",
      "Train-the-trainer (ToT) workshops",
      "Customized institutional training",
    ],
    image: "/images/pillars/1.jpg",
    color: "orange",
  },
];

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Services Grid */}
        <div className="space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEmerald = service.color === "emerald";
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${isReversed ? "lg:order-2" : ""}`}>
                    <div className="relative h-72 overflow-hidden rounded-3xl lg:h-80">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${
                          isEmerald
                            ? "from-emerald-900/50"
                            : "from-orange-900/50"
                        } to-transparent`}
                      />

                      {/* Icon Badge */}
                      <div
                        className={`absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl ${
                          isEmerald
                            ? "bg-emerald-500 text-white"
                            : "bg-orange-500 text-white"
                        } shadow-lg`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>

                    {/* Decorative Border */}
                    <div
                      className={`absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-3xl border-2 ${
                        isEmerald ? "border-emerald-200" : "border-orange-200"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className={isReversed ? "lg:order-1" : ""}>
                    <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mt-6 space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3">
                          <div
                            className={`flex h-6 w-6 items-center justify-center rounded-full ${
                              isEmerald ? "bg-emerald-100" : "bg-orange-100"
                            }`}
                          >
                            <svg
                              className={`h-4 w-4 ${
                                isEmerald
                                  ? "text-emerald-600"
                                  : "text-orange-600"
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all hover:shadow-lg ${
                          isEmerald
                            ? "bg-emerald-500 hover:bg-emerald-600 hover:shadow-emerald-500/25"
                            : "bg-orange-500 hover:bg-orange-600 hover:shadow-orange-500/25"
                        }`}
                      >
                        Get Consultation
                        <GoArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <div className="rounded-3xl bg-gray-900 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white lg:text-3xl">
              Ready to Transform Your Farm?
            </h3>
            <p className="mt-4 text-gray-400">
              Contact us today to discuss which consultation package is right for
              your needs. Our team is ready to help you achieve better yields and
              sustainable farming success.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-emerald-600"
              >
                Contact Us Today
              </Link>
              <a
                href="tel:+254717327217"
                className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call: 0717 327 217
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
