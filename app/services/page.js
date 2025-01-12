import Footer from "../../components/UI/Footer";
import Navbar from "../../components/UI/Navbar";
import  {services}  from "../../components/data/services";
import Image from "next/image";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative  bg-[url('/images/products.jpg')] bg-center bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-72">
          <div className="absolute z-10 w-3/5">
            <p className="text-3xl lg:text-4xl z-10 font-medium  text-emerald-500">
              Our Consultancy Packages
            </p>
            <p className="text-lg pt-2 lg:text-xl font-light  text-white">
              We offer a range of high-quality potato products each carefully
              cultivated and processed to meet the highest standards.
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 z-0  h-full object-cover bg-gradient-to-r from-black/80 to-black/10"></div>
        </div>
      </div>
      <div className="bg-white p-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {services.map((service, index) => (
            <Link class="group" key={index} href={`services/${index}`}>
              <div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg relative ">
                <div className="h-[450px] md:h-[600px]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    layout="fill"
                    class=" w-full saturate-150 rounded-lg object-cover h-64 lg:h-80 lg:w-full z-2 brightness-75 hover:brightness-90 group-hover:scale-105 transition ease-in-out duration-700"
                  />
                </div>
                <div className="absolute bottom-2 bg-gradient-to-t  h-2/5 from-black/90 to-black/10 w-full z-20  z-5" />
                <div className="absolute bottom-2 z-20 m-3 z-5 ">
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
      <Footer />
    </>
  );
}
