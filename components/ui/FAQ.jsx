"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "@/components/data/faq";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-gray-50 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            FAQ
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our services and products.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                >
                  <span className="pr-4 font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      openIndex === index
                        ? "bg-emerald-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <FaChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                        <p className="leading-relaxed text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="tel:+254717327217"
              className="font-semibold text-emerald-600 hover:underline"
            >
              Call us at 0717 327 217
            </a>{" "}
            or{" "}
            <a
              href="mailto:info@nakurutubers.com"
              className="font-semibold text-emerald-600 hover:underline"
            >
              send us an email
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
