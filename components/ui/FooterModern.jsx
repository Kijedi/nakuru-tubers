"use client";

import Link from "next/link";
import { Logo } from "../Logo";
import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const navigation = {
  main: [
    { name: "About Us", href: "/#about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Products", href: "/products" },
    { name: "Team", href: "/team" },
    { name: "Market Place", href: "/market_place" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Ware Potato", href: "/services/0" },
    { name: "Post-harvest Handling", href: "/services/1" },
    { name: "Seed Potato Merchants", href: "/services/2" },
    { name: "Training Programs", href: "/services/3" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/12CACMaC2mB/",
      icon: FaFacebook,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@NakuruTubers",
      icon: FaYoutube,
    },
    {
      name: "Twitter",
      href: "https://x.com/NakuruTubers?t=qgLns5hH9WIBsK5S8-6FFg&s=09",
      icon: FaXTwitter,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/nakuru-tubers/",
      icon: FaLinkedinIn,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nakurutubers?igsh=aGFpdXJkejVpdnZx",
      icon: FaInstagram,
    },
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@nakurutubers?_t=ZS-8t7AJvR1cDB&_r=1",
      icon: FaTiktok,
    },
  ],
};

export default function FooterModern() {
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo dark={false} className="h-12 w-auto text-white" />
            <p className="mt-4 text-sm text-gray-400">
              Transforming potato farming through innovation, empowering
              smallholder farmers across Kenya with certified seed potatoes and
              climate-smart practices.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FaMapMarkerAlt className="h-4 w-4 text-emerald-500" />
                <span>Nakuru, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <FaEnvelope className="h-4 w-4 text-emerald-500" />
                <a
                  href="mailto:info@nakurutubers.com"
                  className="transition-colors hover:text-white"
                >
                  info@nakurutubers.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates on potato
              farming innovations.
            </p>
            <form className="mt-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Nakuru Tubers. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-emerald-500 hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
