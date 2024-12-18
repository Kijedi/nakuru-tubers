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
    name: "Countries Served",
    number: 4,
  },
];

export default function Traction() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="lg:p-12 bg-white">
      <ul className="grid grid-cols-6 max-w-4xl mx-auto border rounded-lg shadow-lg">
        {numbers.map((number, index) => (
          <li
            key={index}
            className=" col-span-3 lg:col-span-2   lg:m-0 flex flex-col lg:p-2 bg-white "
          >
            <p className="text-5xl flex lg:text-7xl py-4 text-gray-400  px-4 tracking-wide uppercase">
              {isInView && <CountUp delay={1} end={number.number} />} +
            </p>
            <p className="text-md pb-6 lg:text-lg font-bold  text-emerald-600   px-4 ">
              {number.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
