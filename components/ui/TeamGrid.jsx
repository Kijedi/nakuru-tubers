"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa6";

const team = [
  {
    firstName: "Winnie",
    lastName: "Wambugu",
    title: "Co-founder and CEO",
    image: "/images/team/team1.jpeg",
    social: "https://www.linkedin.com/in/winnie-wambugu",
  },
  // {
  //   firstName: "Enock",
  //   lastName: "Rugut",
  //   title: "Co-founder and COO",
  //   image: "/images/team/team2.jpeg",
  //   social: "https://www.linkedin.com/in/enock-rugut-kipkorir",
  // },
  {
    firstName: "Gailyne",
    lastName: "Kimani",
    title: "Agribusiness Expert",
    image: "/images/team/team3.JPG",
    social: "https://www.linkedin.com/in/gailyne-kimani",
  },
];

export default function TeamGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />
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
            Leadership
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The People Behind Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team combines agricultural expertise with digital innovation to
            transform potato farming across Kenya.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <Link
                href={person.social}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={person.image}
                      alt={`${person.firstName} ${person.lastName}`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* LinkedIn Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-emerald-600 shadow-lg">
                        <FaLinkedinIn className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {person.firstName}{" "}
                      <span className="font-normal text-gray-500">
                        {person.lastName}
                      </span>
                    </h3>
                    <p className="mt-1 font-medium text-emerald-600">
                      {person.title}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <div className="rounded-3xl bg-gray-50 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900">
              Want to Join Our Team?
            </h3>
            <p className="mt-4 text-gray-600">
              We're always looking for passionate individuals who want to make a
              difference in agriculture. Get in touch to explore opportunities.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-emerald-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
