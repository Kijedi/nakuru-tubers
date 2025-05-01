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
    number: 5000,
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
    <div ref={ref} className=" bg-white p-8">
      <ul className="grid grid-cols-6 lg:max-w-5xl md:py-6 lg:mx-auto gap-4 ">
        {numbers.map((number, index) => (
          <li
            key={index}
            className=" col-span-3 lg:col-span-2 py-4 border shadow-lg  bg-orange-50 border-orange-500  rounded-lg lg:m-0 flex flex-col lg:p-2"
          >
            <p className="text-3xl flex lg:text-5xl md:py-2 text-gray-500 px-4 tracking-wide uppercase">
              {isInView && <CountUp delay={1} end={number.number} />} +
            </p>
            <p className="text-lg lg:text-lg font-bold pb-2  text-orange-600 px-4">
              {number.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
