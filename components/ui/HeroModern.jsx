"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { GoArrowRight, GoChevronDown } from "react-icons/go";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
  { src: "/images/pillars/5.jpg", alt: "Potato farming and food security in Kenya" },
  { src: "/images/pillars/1.jpg", alt: "Women and youth empowerment in agriculture" },
  { src: "/images/pillars/2.jpg", alt: "Job creation through potato farming" },
  { src: "/images/pillars/6.jpg", alt: "Digital innovation in agriculture" },
  { src: "/images/pillars/7.jpg", alt: "Sustainable farming practices" },
];

export default function HeroModern() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Embla Carousel with Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, axis: "y" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Update active index when carousel changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  // Handle thumbnail click
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image with Parallax - Now synced with carousel */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[activeIndex].src}
              alt={heroImages[activeIndex].alt}
              fill
              priority
              className="object-cover saturate-[1.2]"
            />
          </motion.div>
        </AnimatePresence>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </motion.div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[20%] z-[2] hidden lg:block"
      >
        <div className="h-32 w-32 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute right-[20%] bottom-[30%] z-[2] hidden lg:block"
      >
        <div className="h-20 w-20 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col justify-center px-6 lg:px-20"
      >
        <div className="max-w-4xl">
         

          {/* Main Heading */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            <span className="text-emerald-400">Nakuru</span> Tubers
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mb-6 text-xl font-light text-gray-200 sm:text-2xl lg:text-3xl"
          >
            Transforming Potato Farming Through{" "}
            <span className="font-medium text-orange-400">Innovation</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg"
          >
            We empower smallholder farmers with certified seed potatoes and
            climate-smart agricultural practices, driving sustainable
            livelihoods across Kenya.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="group flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Explore Products
              <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-12 flex gap-8 border-t border-white/10 pt-8"
          >
            {[
              { value: "14,000+", label: "Farmers Reached" },
              { value: "4", label: "Counties Served" },
              { value: "3+", label: "Years of Impact" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-2xl font-bold text-emerald-400 lg:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 lg:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Scroll
          </span>
          <GoChevronDown className="h-5 w-5 text-gray-400" />
        </motion.div>
      </motion.div>

      {/* Side Image Gallery with Auto-scroll (Desktop) */}
      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 lg:flex flex-col items-center gap-4">
        {/* Carousel Container */}
        <div className="overflow-hidden h-[280px]" ref={emblaRef}>
          <div className="flex flex-col h-full">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className="flex-[0_0_80px] min-h-0 mb-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  onClick={() => scrollTo(index)}
                  className={`group relative h-20 w-20 cursor-pointer overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                    activeIndex === index
                      ? "border-emerald-500 shadow-lg shadow-emerald-500/30"
                      : "border-white/10 hover:border-emerald-500/50"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      activeIndex === index
                        ? "bg-emerald-500/20"
                        : "bg-black/30 group-hover:opacity-0"
                    }`}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex flex-col gap-1.5">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-6 bg-emerald-500"
                  : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Image Indicators */}
      <div className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2 lg:hidden">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-8 bg-emerald-500"
                : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
