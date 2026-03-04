"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { FaUsers, FaMapMarkerAlt, FaCalendarAlt, FaSeedling } from "react-icons/fa";

const stats = [
  {
    number: 14000,
    suffix: "+",
    label: "Farmers Reached",
    description: "Smallholder farmers empowered",
    icon: FaUsers,
    color: "emerald",
  },
  {
    number: 4,
    suffix: "",
    label: "Counties Served",
    description: "Across Kenya's potato regions",
    icon: FaMapMarkerAlt,
    color: "orange",
  },
  {
    number: 3,
    suffix: "+",
    label: "Years of Impact",
    description: "Transforming agriculture",
    icon: FaCalendarAlt,
    color: "emerald",
  },
  {
    number: 20000,
    suffix: "",
    label: "Target by 2030",
    description: "Farmers to serve",
    icon: FaSeedling,
    color: "orange",
  },
];

export default function StatsModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950 py-20 lg:py-28"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            Our Traction
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Growing Impact Across Kenya
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isEmerald = stat.color === "emerald";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/10">
                  {/* Icon */}
                  <div
                    className={`mb-4 inline-flex rounded-xl p-3 ${
                      isEmerald ? "bg-emerald-500/20" : "bg-orange-500/20"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isEmerald ? "text-emerald-400" : "text-orange-400"
                      }`}
                    />
                  </div>

                  {/* Number */}
                  <div className="mb-2">
                    <span
                      className={`text-4xl font-bold lg:text-5xl ${
                        isEmerald ? "text-emerald-400" : "text-orange-400"
                      }`}
                    >
                      {isInView && (
                        <CountUp
                          start={0}
                          end={stat.number}
                          duration={2.5}
                          separator=","
                        />
                      )}
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-white">
                    {stat.label}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{stat.description}</p>

                  {/* Hover Gradient */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                      isEmerald
                        ? "bg-gradient-to-br from-emerald-500/10 to-transparent"
                        : "bg-gradient-to-br from-orange-500/10 to-transparent"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
