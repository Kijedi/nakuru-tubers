import Footer from "../../components/UI/Footer";
import Navbar from "../../components/UI/Navbar";
import Services from "../../components/UI/Services";
import { services } from "../../components/data/services";
import Image from "next/image";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative  bg-[url('/images/products.jpg')] bg-center bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-72">
          <div className="absolute z-10 md:w-3/5 pr-4">
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
      <Services />
      <Footer />
    </>
  );
}
