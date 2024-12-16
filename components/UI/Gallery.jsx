import hero1 from "@/images/bg/ab1.jpg";
// import hero2 from "@/images/bg/ab3.jpg";
// import hero3 from "@/images/bg/ab6.jpg";
import Image from "next/image";
import { servicesData } from "../data/data";
import Link from "next/link";

export default function Gallery() {
  return (
    <div className="md:p-20 p-10 py-36 bg-white">
      <div className="grid grid-cols-1 pb-6 text-center">
        <h3 className="font-semibold lg:text-5xl text-2xl text-red-700 leading-normal mb-4">
          Our Gallery
        </h3>
        <p className="text-slate-600 max-w-4xl mx-auto">
          We are dedicated to being a reliable and innovative digital marketing
          partner, empowering businesses to navigate the complexities of the
          digital landscape and achieve sustainable growth and success
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-10 items-center flex-wrap justify-center lg:p-10">
        {servicesData.map((service, index) => (
          <Link
            href={service.href}
            alt={service.title}
            key={index}
            className="group hover:-translate-y-2 duration-500  cursor-pointer shadow-lg bg-red-50 rounded-md"
          >
            <div className="flex">
              <Image
                height={"100%"}
                width={"100%"}
                src={service.image}
                className="rounded-t-md h-96 w-full object-cover"
                alt=""
              />{" "}
            </div>
            <p className="text-sm uppercase tracking-widest p-8  font-semibold text-black group-hover:text-red-700 duration-300">
              {service.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
