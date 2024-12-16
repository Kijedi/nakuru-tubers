import photo1 from "@/images/photography/shower1.jpg";
import shower2 from "@/images/photography/shower2.jpg";
import shower3 from "@/images/photography/shower3.jpg";
import shower4 from "@/images/photography/shower4.jpg";
import clsx from "clsx";
import Image from "next/image";

const services = [
  {
    name: "Photography",
    image: photo1,
    description:
      "Capture high-quality product, portrait, event & architectural images.",
  },
  {
    name: "Graphic Design",
    image: photo1,
    description:
      "Develop branding, create visuals, & optimize designs for various platforms.",
  },
  {
    name: "Videography",
    image: photo1,
    description: "Produce corporate, event, promotional & aerial videos.",
  },
  {
    name: "Social Media Management",
    image: photo1,
    description:
      "Develop targeted social media strategies & create engaging content.",
  },
];
export default function Serve() {
  return (
    <div className="bg-slate-100">
      <div className=" lg:h-60  relative grid grid-cols-1 pt-4 lg:grid-cols-4 grid-flow-row-dense mx-10 lg:-mt-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="first:bg-red-700 group cursor-pointer relative first:text-white p-10 hover:-translate-y-2 duration-300 bg-white text-black shadow-xl -ml-2"
          >
            <Image
              src={service.image}
              alt={service.name}
              className="object-cover z-0 group-hover:visible invisible opacity-20 grayscale"
              fill
            />

            <p
              className={clsx(
                "text-2xl py-2  z-10 font-semibold",
                // index == 0 ? "text-white" : "text-red-500"
              )}
            >
              {service.name}
            </p>
            <p className="z-10">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
