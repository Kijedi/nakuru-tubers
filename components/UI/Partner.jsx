import Image from "next/image";
import Link from "next/link";
import { PiHandshakeDuotone } from "react-icons/pi";

export default function Partner() {
  return (
    <div id="partner" className="bg-white py-20">
      <div className="w-full relative lg:max-w-6xl  grid grid-cols-5  mx-auto lg:shadow-2xl rounded-lg  text-black">
        <div className="w-full h-96 lg:h-full col-span-5 lg:col-span-2 relative rounded-l-lg">
          <Image
            src={"/images/bg4.jpg"}
            alt="Partner"
            layout="fill"
            className="object-cover h-full w-full lg:rounded-l-lg"
            priority
            unoptimized
          />
        </div>
        <Image
            src={"/images/patterns/pattern-5.svg"}
            alt="Partner"
            height={100}
            width={100}
            className="object-cover absolute z-10 top-0 right-0 lg:rounded-l-lg"
            priority
            unoptimized
          />
        <div className="col-span-5 lg:col-span-3 bg-amber-50 p-10 lg:rounded-r-lg">
          <div className="lg:p-16">
            <h1 className="font-bold text-slate-900 text-4xl sm:text-4xl">
              Partner with Us
            </h1>
            <p className="text-lg py-4">
              Let’s collaborate to scale impactful, climate-smart solutions for
              Kenya’s smallholder farmers and secure a sustainable future.
            </p>
            <div className="mb-8">
              <div className="flex gap-2 text-lg">
                <PiHandshakeDuotone className="text-emerald-500 size-8" />{" "}
                <p>Be our partner</p>
              </div>{" "}
              <div className="flex gap-2 text-lg">
                <PiHandshakeDuotone className="text-emerald-500 size-8" />{" "}
                <p>Be our field agent</p>
              </div>{" "}
              <div className="flex gap-2 text-lg">
                <PiHandshakeDuotone className="text-emerald-500 size-8" />{" "}
                <p>Be a smart farmer </p>
              </div>
            </div>
            <Link
              href="mailto:info@nakurutubers.com"
              className="rounded-lg font-light text-lg px-4 py-3 hover:bg-emerald-600 duration-300 ease-in-out text-white bg-emerald-500"
            >
              Partner With Us Today!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
