import Link from "next/link";
import hero1 from "@/images/bg/ab1.jpg";
import hero2 from "@/images/bg/ab2.jpg";
import hero4 from "@/images/bg/ab4.jpg";
import hero7 from "@/images//photography/shower1.jpg";
import hero6 from "@/images//photography/shower2.jpg";
import hero5 from "@/images//photography/shower3.jpg";
import hero3 from "@/images//photography/shower4.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative md:pt-20 py-36 bg-slate-100 px-20" id="home">
      <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 lg:gap-4 gap-2  mt-8 items-center justify-center">
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="">
              <div className="grid grid-cols-1 gap-4">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={hero1}
                  className="shadow rounded-lg "
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-1 gap-4">
                <Image
                  width={"100%"}
                  src={hero2}
                  className="shadow rounded-lg"
                  alt=""
                />
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={hero3}
                  className="shadow rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 flex justify-center">
          <Image
            height={"100%"}
            width={"100%"}
            src={hero4}
            className="shadow rounded-lg"
            alt=""
          />
        </div>
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="">
              <div className="grid grid-cols-1 gap-4">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={hero5}
                  className="shadow rounded-lg"
                  alt=""
                />
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={hero6}
                  className="shadow rounded-lg"
                  alt=""
                />
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-1 gap-4">
                <Image
                  height={"100%"}
                  width={"100%"}
                  src={hero7}
                  className="shadow rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
