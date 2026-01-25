"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const contactInfo = [
  {
    icon: FaPhone,
    title: "Phone",
    value: "0717 327 217",
    href: "tel:+254717327217",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "info@nakurutubers.com",
    href: "mailto:info@nakurutubers.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Nakuru, Kenya",
    href: null,
  },
  {
    icon: FaClock,
    title: "Hours",
    value: "Mon-Sat: 9am-5pm",
    href: null,
  },
];

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              Contact Information
            </span>

            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Let's Start a Conversation
            </h2>

            <p className="mt-4 text-gray-600">
              Whether you need certified seed potatoes, expert consultation, or
              training for your team, we're here to help.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const Wrapper = item.href ? "a" : "div";
                const wrapperProps = item.href
                  ? { href: item.href, className: "group" }
                  : {};

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <Wrapper {...wrapperProps}>
                      <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all hover:border-emerald-200 hover:bg-emerald-50">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{item.title}</p>
                          <p className="font-semibold text-gray-900">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-gray-50 p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </h3>
              <p className="mt-2 text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="mt-8 space-y-6">
                {/* Name Fields */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      placeholder="0712 345 678"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="seeds">Seed Potato Inquiry</option>
                    <option value="consultation">Consultation Services</option>
                    <option value="training">Training Programs</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                  >
                    Send Message
                    <GoArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="mt-4 text-center text-sm text-gray-500">
                    By submitting, you agree to our terms and privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
