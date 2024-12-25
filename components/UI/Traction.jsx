"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const numbers = [
  {
    name: "Years in Operation",
    number: 3,
  },
  {
    name: "Farmers Reached",
    number: 2000,
  },
  {
    name: "Counties Served",
    number: 4,
  },
];

export default function Traction() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="lg:p-12 bg-white p-8">
      <ul className="grid grid-cols-6 lg:max-w-4xl py-4 lg:mx-auto border border-gray-700 rounded-lg shadow-lg">
        {numbers.map((number, index) => (
          <li
            key={index}
            className=" col-span-3 lg:col-span-2 rounded-lg lg:m-0 flex flex-col lg:p-2 bg-white"
          >
            <p className="text-3xl flex lg:text-7xl md:py-4 text-gray-500 px-4 tracking-wide uppercase">
              {isInView && 
              <CountUp delay={1} end={number.number} />
              } +
            </p>
            <p className="text-md pb-6 lg:text-lg font-bold  text-emerald-600 px-4">
              {number.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
