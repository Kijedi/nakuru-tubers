"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaMotorcycle, FaTruck, FaRoute, FaClock } from "react-icons/fa";

const fleetItems = [
  {
    icon: FaMotorcycle,
    title: "Motorbike Fleet",
    description:
      "Agile motorbikes navigate rural roads to deliver seed potatoes directly to farmers' doorsteps, even in the most remote areas.",
    stat: "10+",
    statLabel: "Motorbikes",
  },
  {
    icon: FaTruck,
    title: "Lorry Transport",
    description:
      "Heavy-duty lorries handle bulk orders and long-distance deliveries, ensuring timely supply to cooperatives and large farms.",
    stat: "3+",
    statLabel: "Lorries",
  },
  {
    icon: FaRoute,
    title: "Optimized Routes",
    description:
      "GPS-tracked vehicles and optimized routing ensure efficient deliveries while minimizing costs for farmers.",
    stat: "100%",
    statLabel: "Tracked",
  },
  {
    icon: FaClock,
    title: "Timely Delivery",
    description:
      "Seed potatoes delivered at the right time for planting season, with quality maintained through proper handling.",
    stat: "48hrs",
    statLabel: "Avg. Delivery",
  },
];

export default function DeliveryFleet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gray-900 py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
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
          <span className="inline-block rounded-full bg-orange-500/20 px-4 py-2 text-sm font-medium text-orange-400">
            Delivery Fleet
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Seeds Delivered to{" "}
            <span className="text-orange-400">Your Farm</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Our dedicated fleet of motorbikes and lorries ensures certified seed
            potatoes reach you on time, every time.
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleetItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-white/10">
                  {/* Icon */}
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Stat */}
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-white">{item.stat}</p>
                    <p className="text-sm text-gray-500">{item.statLabel}</p>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl"> */}
            {/* <div className="relative h-64 lg:h-80">
              <Image
                src="/images/new/Last%20Mile.jpeg"
                alt="Delivery fleet in action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
            </div> */}

            {/* Overlay Content */}
            {/* <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Reaching Every Corner
                  </h3>
                  <p className="mt-2 text-gray-300">
                    From the highlands of Nyandarua to the slopes of Mt. Kenya
                  </p>
                </div>
                <div className="flex gap-4">
                  {[
                    { value: "6+", label: "Counties" },
                    { value: "1000+", label: "Deliveries" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm"
                    >
                      <p className="text-xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
          {/* </div>
        </motion.div> */}
      </div>
    </section>
  );
}
