import { Logo } from "../../components/Logo";
import Footer from "../../components/UI/Footer";
import Navbar from "../../components/UI/Navbar";
import { ArrowRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative  bg-[url('/images/bg1.jpg')] bg-center bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-72">
          <div className="absolute z-10 w-3/4">
            <p className="text-3xl lg:text-6xl z-10 font-medium  text-emerald-500">
              Contact Us
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
        <div class="bg-gray-100 border border-emerald-600/80 shadow-xl relative p-[40px] max-w-7xl mx-auto rounded-[58px]">
          <div class="mx-auto relative max-w-[1320px]">
            <img
              class="absolute right-0 max-w-[129px] top-[-50px]"
              src="/images/mail.png"
              alt="mail image"
            />
            <p class="text-capitalized text-emerald-600 font-semibold text-xl uppercase tracking-[2px] mb-[15px]">
              Contact us
            </p>
            <h2 class="font-bold font-chivo text-[25px] text-gray-600 leading-[30px] md:text-heading-3 mb-[22px]">
              Have an project in mind?
            </h2>
            <p class="text-text text-black mb-[30px] md:mb-[60px]">
              The right move at the right time saves your investment. live the
              dream of expanding your business.
            </p>
            <div class="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
              <div>
                <div class="flex gap-[13px] mb-[15px] md:mb-[25px]">
                  {" "}
                  <Logo />
                  <p class="text-heading-6 font-bold font-chivo">Nakuru Tubers</p>
                </div>
                <p class="text-text text-gray-600">4517 Washington Ave.</p>
                <p class="text-text text-gray-600 mb-[10px] md:mb-[16px]">
                  Manchester, Kentucky 39495
                </p>
                <p class="text-text text-gray-600 underline">(239) 555-0108</p>
                <p class="text-text text-gray-600 underline">
                  contact@agon.com
                </p>
              </div>
              <form class="flex-1" action="/">
                <div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                  <input
                    class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Enter your name"
                  />
                  <input
                    class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"
                    type="text"
                    placeholder="Company (optional)"
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
                  placeholder="Tell us about yourself"
                ></textarea>
                <div class="flex flex-col gap-5">
                  <button
                    class="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit"
                    type="submit"
                  >
                    Send Message
                    <ArrowRightIcon className="size-6 ml-4" />
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
