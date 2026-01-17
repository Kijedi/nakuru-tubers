"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XMarkIcon, Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Logo } from "../Logo";
import { services } from "../data/services";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarModern() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={classNames(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 shadow-lg shadow-black/5 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Nakuru Tubers</span>
            <Logo
              dark={scrolled}
              className={classNames(
                "h-10 w-auto transition-all duration-300",
                scrolled ? "text-gray-900" : "text-white"
              )}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={classNames(
              "inline-flex items-center justify-center rounded-full p-2.5 transition-colors",
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <Popover.Group className="hidden lg:flex lg:items-center lg:gap-x-1">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/#about" },
            { name: "Products", href: "/products" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                scrolled
                  ? "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    "flex items-center gap-x-1 rounded-full px-4 py-2 text-sm font-medium outline-none transition-all duration-300",
                    scrolled
                      ? "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                      : "text-white/90 hover:bg-white/10 hover:text-white",
                    open && (scrolled ? "bg-gray-100" : "bg-white/10")
                  )}
                >
                  Services
                  <ChevronDownIcon
                    className={classNames(
                      "h-4 w-4 transition-transform duration-300",
                      open && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-2"
                >
                  <Popover.Panel className="absolute left-1/2 top-full z-10 mt-3 w-screen max-w-sm -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5">
                    <div className="p-2">
                      {services.map((item, index) => (
                        <Link
                          key={item.name}
                          href={`/services/${index}`}
                          className="group flex items-center gap-x-4 rounded-xl p-3 transition-colors hover:bg-emerald-50"
                        >
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                            <span className="text-sm font-bold">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 group-hover:text-emerald-600">
                              {item.name}
                            </p>
                            <p className="mt-0.5 text-xs text-gray-500 line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {[
            { name: "Team", href: "/team" },
            { name: "Market Place", href: "/market_place" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                scrolled
                  ? "text-gray-700 hover:bg-gray-100 hover:text-emerald-600"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Contact CTA Button */}
          <Link
            href="/contact"
            className={classNames(
              "ml-4 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
              scrolled
                ? "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                : "bg-white text-gray-900 hover:bg-white/90"
            )}
          >
            Contact Us
          </Link>
        </Popover.Group>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />

        {/* Panel */}
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <Logo dark className="h-10 w-auto text-gray-900" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-full p-2.5 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-1 py-6">
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/#about" },
                  { name: "Products", href: "/products" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Services Accordion */}
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:bg-emerald-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            "h-5 w-5 transition-transform duration-200",
                            open && "rotate-180"
                          )}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-1 space-y-1 pl-4">
                        {services.map((item, index) => (
                          <Link
                            key={item.name}
                            href={`/services/${index}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {[
                  { name: "Team", href: "/team" },
                  { name: "Market Place", href: "/market_place" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-gray-900 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="py-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full rounded-xl bg-emerald-500 py-3 text-center text-base font-semibold text-white hover:bg-emerald-600"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  );
}
