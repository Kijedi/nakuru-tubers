import { services } from "../../components/data/services";
import Image from "next/image";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default function Services() {
  return (
    <div className="bg-white p-10 md:p-12">
      <div className="max-w-6xl mx-auto flex items-center flex-col text-center my-4 md:my-8">
        <p class="font-chivo inline-block font-bold text-teal-600 bg-teal-600/10 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
          Our Services
        </p>
        <h3 class="font-chivo font-bold lg:text-heading-1 text-emerald-600 md:text-5xl text-2xl leading-9 mb-[22px]">
          Empowering Farmers, Elevating Potato Production
        </h3>{" "}
        <h3 class="font-chivo lg:text-heading-1 text-gray-500 md:text-xl text-xl leading-9 mb-[22px]">
          At Nakuru Tubers, we provide tailored consultancy services to help
          farmers, cooperatives, and organizations maximize yields, improve
          quality, and access premium markets. From foundational training to
          advanced techniques, our expert guidance ensures sustainable growth
          and profitability in potato farming. Let’s grow together!
        </h3>
      </div>
      <div className="bg-white p-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {services.map((service, index) => (
            <Link class="group" key={index} href={`services/${index}`}>
              <div class="aspect-w-1 w-full overflow-hidden rounded-lg relative ">
                <div className="h-[450px] md:h-[600px]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    layout="fill"
                    class=" w-full saturate-150 rounded-lg object-cover lg:w-full z-2 brightness-75 hover:brightness-90 group-hover:scale-105 transition ease-in-out duration-700"
                  />
                </div>
                <div className="absolute bottom-0 bg-gradient-to-t  h-72 from-black/90 to-black/10 w-full z-20  " />
                <div className="absolute bottom-2 z-20 p-3 z-5 ">
                  <p className="text-white text-md lg:text-lg font-bold">
                    {service.name}
                  </p>
                  <p className="text-gray-300 tracking-wide h-20  text-sm">
                    {service.description}
                  </p>
                  <Link
                    href={`services/${index}`}
                    className=" rounded-full bg-white text-black group-hover:text-white group-hover:bg-emerald-600 backdrop-blur-sm  z-20 flex items-center justify-between px-4 mt-4 py-1"
                  >
                    <p className="text-sm font-semibold pl-2 tracking-wider uppercase">
                      View Service
                    </p>
                    <GoChevronRight className="size-8 group-hover:translate-x-2 transition-all duration-500" />
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
