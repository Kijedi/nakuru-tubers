import { Logo } from "../../components/Logo";
import Footer from "../../components/yu/Footer";
import Navbar from "../../components/yu/Navbar";
import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { PiPhoneCall } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative  bg-[url('/images/bg3.jpg')] bg-center bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-72">
          <div className="absolute z-10 w-3/4">
            <p className="text-3xl lg:text-6xl z-10 font-medium  text-emerald-500">
              Get in Touch
            </p>
            <p className="text-lg pt-2 lg:text-2xl font-light md:w-3/4 text-white">
              We offer a range of high-quality potato products each carefully
              cultivated and processed to meet the highest standards.
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 z-0  h-full object-cover bg-gradient-to-r from-black/90 to-black/10"></div>
        </div>
      </div>
      <div className="bg-white p-20">
        <div class="bg-gray-100 border border-gray-300 shadow-xl relative p-20 max-w-7xl mx-auto rounded-[58px]">
          <div class="mx-auto relative max-w-[1320px]">
            <img
              class="absolute right-0 max-w-[129px] top-[-50px]"
              src="/images/mail.png"
              alt="mail image"
            />
            <p class="text-capitalized text-emerald-600 font-bold text-2xl uppercase tracking-[2px] mb-[15px]">
              Contact us
            </p>
            <h2 class="font-bold text-xl text-gray-600 leading-[30px] md:text-heading-3 mb-[22px]">
              Do you have any queries?
            </h2>
            <div class="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
              <div>
                <p class="text-xl text-emerald-600">Open hours</p>
                <p class="text-lg text-gray-500 py-1">
                  Monday-Friday: <span className="text-black">9am-5.00pm</span>
                </p>{" "}
                <p class="text-lg text-gray-500 pb-4">
                  Saturday and Sunday: <span className="text-black">Closed</span>
                </p>
                <Link href="tel:+254728771406" class="text-lg text-gray-600 underline flex gap-x-2 py-3 items-center">
                  <PiPhoneCall className="text-orange-600 size-8" />
                  +254728771406{" "}
                </Link>
                <Link href="mailto:info@nakurutubers.com" class="text-lg text-gray-600 underline flex gap-x-2 items-center">
                  <IoMailOutline className="text-orange-600 size-8" />
                  info@nakurutubers.com{" "}
                </Link>
              </div>
              <form class="flex-1" action="/">
                <div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                  <input
                    class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Second Name"
                  />
                </div>
                <div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                  <input
                    class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Your email"
                  />
                  <input
                    class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Phone number"
                  />
                </div>
                <textarea
                  class="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]"
                  name=""
                  cols="100"
                  rows="10"
                  placeholder="Type your message here"
                ></textarea>
                <div class="flex flex-col gap-5">
                  <button
                    class="flex group items-center bg-emerald-600 transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[16px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white w-fit"
                    type="submit"
                  >
                    Send Message
                    <ArrowRightIcon className="size-6 ml-4 group-hover:translate-x-2 duration-200 ease-in-out" />
                  </button>
                  <p class="text-md text-gray-500">
                    By clicking contact us button, you agree our terms and
                    policy,
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
