"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "RUFORUM",
    logo: "/images/partners/ruforum.png",
    href: "https://www.ruforum.org",
  },
  {
    name: "AFAAS",
    logo: "/images/partners/afaas.png",
    href: "https://www.afaas-africa.org",
  },
  {
    name: "COELIB",
    logo: "/images/partners/coelib.png",
    href: "https://www.coelib.org",
  },
  {
    name: "CIRCLE INNOVATION",
    logo: "/images/partners/circle_innovation.png",
    href: "https://www.circleinnovation.org",
  },
  {
    name: "WFP",
    logo: "/images/partners/wfp.png",
    href: "https://www.wfp.org",
  },
  {
    name: "MasterCard Foundation",
    logo: "/images/partners/mastercard.jpg",
    href: "https://www.mastercardfoundation.org",
  },
];

export default function PartnersModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gray-50 py-24 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
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
          <span className="inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            Our Partners
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Partnering for{" "}
            <span className="text-emerald-600">Sustainable Growth</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Collaborating with organizations and experts to promote
            climate-smart, certified seed potatoes and innovative farming
            solutions.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                >
                  <div className="relative flex h-40 flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl lg:h-48">
                    {/* Logo */}
                    <div className="relative h-20 w-32 transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Partner Name */}
                    <p className="mt-4 text-center text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-emerald-600">
                      {partner.name}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-50/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Corner Decoration */}
                    <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-emerald-500/5 transition-transform duration-500 group-hover:scale-150" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

     

        {/* Become a Partner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Interested in partnering with us?{" "}
            <Link
              href="/contact"
              className="font-semibold text-emerald-600 underline underline-offset-4 transition-colors hover:text-emerald-700"
            >
              Let's collaborate
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
