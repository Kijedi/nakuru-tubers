import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import Product from "../../components/ui/Product";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const persons = [
    {
      firstName: "Winnie",
      lastName: "Wambugu",
      title: "Co-founder and CEO",
      image: "/images/team/team1.jpeg",
      social: "https://www.linkedin.com/in/winnie-wambugu",
    },
    // {
    //   firstName: "Enock",
    //   lastName: "Rugut",
    //   title: "Co-founder and COO",
    //   image: "/images/team/team2.jpeg",
    //   social: "https://www.linkedin.com/in/enock-rugut-kipkorir",
    // },
    {
      firstName: "Gailyne",
      lastName: "Kimani",
      title: "Agribusiness Expert",
      image: "/images/team/team3.JPG",
      social: "https://www.linkedin.com/in/gailyne-kimani",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative lg:h-[500px]  bg-[url('/images/team/team.jpg')] saturate-150 bg-top bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-72">
          <div className="absolute bottom-20 z-10 md:w-3/5 pr-4">
            <p className="text-3xl lg:text-6xl z-10 font-medium  text-emerald-500">
              Meet Our Team
            </p>
            <p className="text-lg pt-2 lg:text-xl font-light  text-white">
              Meet our exceptional team at Nakuru Tubers! Comprising of talent
              an expertise, we are a dedicated group committed to delivering
              excellence in every project.
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 z-0  h-full object-cover bg-gradient-to-r from-black/80 to-black/10"></div>
        </div>
      </div>
      <div className="bg-white p-10 lg:p-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {persons.map((person, index) => (
            <Link
              target="_blank"
              href={person.social}
              key={index}
              className="group h-96 shadow-xl border border-emerald-600"
            >
              <div className="relative h-3/4">
                <Image
                  src={person.image}
                  layout="fill"
                  className="object-cover object-top rounded-t-lg saturate-150"
                />
              </div>
              <div className="p-4 text-gray-800 bg-white">
                <p className="font-bold text-xl">
                  {person.firstName}
                  <span className="pl-1 text-gray-500 font-light">
                    {person.lastName}
                  </span>
                </p>
                <p className="text-emerald-600 font-semibold">{person.title}</p>
              </div>
              <Link
                href={person.social}
                target="_blank"
                className="bg-emerald-600 text-white hidden duration-200 ease-in-out transition-all group-hover:flex items-center w-full justify-center py-2 rounded-b-lg"
              >
                <FaLinkedinIn className="size-4 " />
              </Link>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
