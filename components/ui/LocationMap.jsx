"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaMapMarkerAlt, FaRoute, FaLeaf } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function LocationMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-stone-900 py-24 lg:py-32">
      {/* Organic background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-emerald-900/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-900/20 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            <FaLeaf className="h-3.5 w-3.5" />
            Visit Our Farm
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Find Us in the
            <span className="relative ml-3">
              <span className="relative z-10 text-emerald-400">Highlands</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-1 left-0 right-0 h-3 origin-left bg-emerald-500/20"
              />
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-400">
            Nestled in Nakuru's fertile volcanic soils — the same rich earth that
            produces Kenya's finest potatoes. Come see where quality seeds begin.
          </p>
        </motion.div>

        {/* Map Container with asymmetric layout */}
        <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
          {/* Info Cards - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col gap-4 lg:col-span-1"
          >
            {/* Location Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-stone-700/50 bg-stone-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/50 hover:bg-stone-800">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-300 group-hover:bg-emerald-500/20" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-stone-500">
                  Location
                </h3>
                <p className="mt-2 text-lg font-semibold text-white">
                  Nakuru, Kenya
                </p>
                <p className="mt-1 text-sm text-stone-400">
                  Rift Valley Province
                </p>
              </div>
            </div>

            {/* Directions Card */}
            <div className="group relative overflow-hidden rounded-2xl border border-stone-700/50 bg-stone-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/50 hover:bg-stone-800">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl transition-all duration-300 group-hover:bg-amber-500/20" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                  <FaRoute className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-stone-500">
                  Getting Here
                </h3>
                <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                  ~2 hours from Nairobi via the Nairobi-Nakuru Highway (A104)
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://maps.google.com/?q=Nakuru+Tubers"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-auto flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30"
            >
              Get Directions
              <HiOutlineExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Map - Right Column (spans 3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative lg:col-span-3"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-amber-500/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />

            {/* Map wrapper with custom styling */}
            <div className="relative overflow-hidden rounded-3xl border border-stone-700/50 bg-stone-800 shadow-2xl">
              {/* Top bar decoration */}
              <div className="flex items-center gap-2 border-b border-stone-700/50 bg-stone-800/80 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-stone-600" />
                  <span className="h-3 w-3 rounded-full bg-stone-600" />
                  <span className="h-3 w-3 rounded-full bg-stone-600" />
                </div>
                <div className="ml-4 flex-1">
                  <div className="mx-auto flex max-w-md items-center gap-2 rounded-lg bg-stone-700/50 px-3 py-1.5">
                    <FaMapMarkerAlt className="h-3 w-3 text-emerald-400" />
                    <span className="text-xs text-stone-400">Nakuru Tubers — Nakuru, Kenya</span>
                  </div>
                </div>
              </div>

              {/* Map iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4918.18801544677!2d36.6511506!3d-1.4377031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f01ac58904707%3A0xe9f644128fb0c2b3!2sNakuru%20Tubers!5e1!3m2!1sen!2ske!4v1769675385777!5m2!1sen!2ske"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nakuru Tubers Location"
                className="w-full grayscale-[20%] contrast-[1.1]"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 hidden rounded-2xl border border-stone-700 bg-stone-800 p-4 shadow-xl lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
                  <FaLeaf className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-stone-500">Elevation</p>
                  <p className="font-semibold text-white">1,850m ASL</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
