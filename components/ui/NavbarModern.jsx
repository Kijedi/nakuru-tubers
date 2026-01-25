"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Logo } from "../Logo";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Last Mile", href: "/last-mile" },
  { name: "Impact", href: "/impact" },
  { name: "Team", href: "/team" },
  { name: "Shop", href: "/market_place" },
];

export default function NavbarModern() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

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
          ? "bg-white/95 shadow-lg shadow-black/5 backdrop-blur-lg"
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
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                isActive(item.href)
                  ? scrolled
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-white/20 text-white"
                  : scrolled
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
        </div>
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
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={classNames(
                      "block rounded-xl px-4 py-3 text-base font-semibold",
                      isActive(item.href)
                        ? "bg-emerald-100 text-emerald-700"
                        : "text-gray-900 hover:bg-emerald-50 hover:text-emerald-600"
                    )}
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
