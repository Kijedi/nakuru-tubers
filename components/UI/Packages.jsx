import {
  CheckCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { packages } from "../data/packages";
import Link from "next/link";
import Image from "next/image";

export default function Price({ service }) {
  return (
    <div class="px-[12px] md:px-[36px] py-12 bg-white relative xl:px-0 lg:py-20">
      {/* <div className=""> */}
      {/* <Image
          src={"/images/bg1.jpg"}
          layout="fill"
          className="z-0 w-full h-full object-cover fixed inset-0 blur-sm"
        /> */}
      {/* <div className="bg-black/70  h-full w-full z-10 absolute inset-0"></div> */}
      {/* </div> */}

      <div class="text-center relative z-10">
        <span class="font-chivo uppercase inline-block text-amber-600 bg-amber-600/10 font-semibold tracking-wide py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
          {service.name} Packages
        </span>
        <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-emerald-600 mb-5 md:mb-[30px] max-w-[725px]">
          Get in touch with us to book a site visit{" "}
        </h2>
        <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
      </div>
      <div class="package z-10 relative">
        <div class="grid package-list max-w-7xl mx-auto z-10 gap-2 lg:gap-8 p-4 lg:py-16 md:grid-cols-2">
          {service.packages.map((pkg) => (
            <div class="rounded-2xl group even:bg-emerald-600 md:py-[53px] md:px-[48px] shadow-lg shadow-gray-300 bg-white/80 flex flex-col justify-between transition-all duration-300 package-card p-[35px] border border-gray-900 bill-annually">
              <div>
                <p class="text-heading-3 font-bold text-black group-even:text-white text-3xl font-chivo">
                  {pkg.price}
                </p>
                <h5 class="text-heading-5 font-chivo group-even:text-yellow-400 text-emerald-600 font-bold ">
                  {pkg.name}
                </h5>
                <p class="text-heading-3 font-bold text-gray-600 group-even:text-gray-200 text-sm py-4 font-chivo">
                  {pkg.description}
                </p>
                {/* <p class="text-sm font-bold text-gray-400 mb-[43px]">
                  All the basics for businesses that are just getting started.
                </p> */}
                <div class="w-full bg-gray-500 group-even:bg-gray-300 h-[1px] mb-[21px]"></div>
                <ul class="mb-8 text-emerald-500 group-even:text-yellow-400">
                  {pkg.services.map((service) => (
                    <li class="flex items-center gap-4 mb-3">
                      <CheckCircleIcon
                        class="tick-icon flex-shrink-0 h-8 w-8 "
                        alt="icon"
                      />
                      <span class="text-md text-gray-800 group-even:text-white ">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
                {pkg.additional_services && (
                  <>
                    <p class="text-heading-3 font-bold text-black group-even:text-white text-xl py-4 font-chivo">
                      Additional Services
                    </p>
                    <ul class=" text-emerald-500 group-even:text-yellow-400 mb-10">
                      {pkg.additional_services.map((service) => (
                        <li class="flex items-center gap-4 mb-3">
                          <CheckCircleIcon
                            class="tick-icon flex-shrink-0 h-8 w-8 "
                            alt="icon"
                          />
                          <span class="text-md text-gray-800 group-even:text-white ">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {pkg.includes && (
                  <>
                    <p class="text-heading-3 font-bold text-black group-even:text-white text-xl py-4 font-chivo">
                      Includes
                    </p>
                    <ul class=" text-emerald-500 group-even:text-yellow-400 mb-10">
                      {pkg.includes.map((service) => (
                        <li class="flex items-center gap-4 mb-2">
                          <CheckCircleIcon
                            class="tick-icon flex-shrink-0 h-8 w-8 "
                            alt="icon"
                          />
                          <span class="text-md text-gray-800 group-even:text-white ">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <button type="button">
                {" "}
                <Link
                  class="flex items-center group py-3  z-10 relative transition-all duration-200 px-[22px] rounded-md bg-gray-900 group-even:bg-white group-even:text-black text-white  hover:-translate-y-2 border-[2px] border-[#171B24]"
                  href="/contact"
                >
                  <span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                    Get in Touch
                  </span>

                  <ArrowRightCircleIcon
                    class="text-white group-even:text-gray-900  size-8 transition-all duration-200"
                    alt="arrow right icon"
                  />
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
