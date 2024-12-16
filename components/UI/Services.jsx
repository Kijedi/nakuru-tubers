// "use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "../data/data";

export default function Services() {
  return (
    <section className="relative md:py-24 p4 bg-slate-50 " id="services">
      <div className="grid grid-cols-1 p-10 text-center">
        <h3 className="font-semibold text-2xl lg:text-5xl text-red-700 leading-normal mb-4">
          Our Services
        </h3>
        <p className="text-slate-700 max-w-4xl mx-auto">
          We are dedicated to being a reliable and innovative digital marketing
          partner, empowering businesses to navigate the complexities of the
          digital landscape and achieve sustainable growth and success
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 p-4 lg:p-20">
        {servicesData.map((item, index) => {
          let Icon = item.icon;
          return (
            <div
             
              className="group  items-stretch rounded-md h-full shadow-md border  relative bg-white  p-6 overflow-hidden h-fit"
              key={index}
            >
              <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-red-300/10 text-red-300 text-center rounded-full group-hover:bg-red-300/10 duration-500">
                <Icon className="size-6 rotate-45"></Icon>
              </div>
              <div className="content mt-6 relative z-1">
                <p
                  className="text-red-700 text-lg font-semibold "
                >
                  {item.title}
                </p>
                <p className="text-slate-600 mt-3">{item.desc}</p>
                <div className="mt-6">
                  <Link
                    href={item.href}
                    alt="Explore"
                    className="text-red-300 hover:text-red-600 duration-300"
                  >
                    Explore
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 -end-16">
                <Icon className="size-48 text-red-300 opacity-10 group-hover:opacity-20 duration-500"></Icon>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
