import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PiPhoneCall } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";

export const metadata = {
  title: "Contact Us - Get Expert Potato Farming Advice",
  description:
    "Contact Nakuru Tubers for certified seed potatoes and expert agricultural consultation. Reach our team in Nakuru, Kenya for all your potato farming needs.",
  openGraph: {
    title: "Contact Us | Nakuru Tubers",
    description:
      "Contact Nakuru Tubers for certified seed potatoes and expert agricultural consultation in Kenya.",
    url: "https://nakurutubers.com/contact",
  },
  alternates: {
    canonical: "https://nakurutubers.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative bg-[url('/images/bg3.jpg')] bg-center bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-72">
          <div className="absolute z-10 w-3/4">
            <h1 className="text-3xl lg:text-6xl z-10 font-medium text-emerald-500">
              Get in Touch
            </h1>
            <p className="text-lg pt-2 lg:text-2xl font-light md:w-3/4 text-white">
              Have questions about potato farming or our services? We're here to
              help you succeed.
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 z-0 h-full object-cover bg-gradient-to-r from-black/90 to-black/10"></div>
        </div>
      </div>
      <div className="bg-white p-10 lg:p-20">
        <div className="bg-gray-100 border border-gray-300 shadow-xl relative p-10 lg:p-20 max-w-7xl mx-auto rounded-3xl lg:rounded-[58px]">
          <div className="mx-auto relative max-w-[1320px]">
            <img
              className="absolute right-0 max-w-[129px] top-[-50px] hidden md:block"
              src="/images/mail.png"
              alt="Contact envelope icon"
            />
            <p className="text-emerald-600 font-bold text-2xl uppercase tracking-[2px] mb-4">
              Contact us
            </p>
            <h2 className="font-bold text-xl text-gray-600 leading-[30px] md:text-2xl mb-6">
              Do you have any queries?
            </h2>
            <div className="flex flex-col gap-8 mb-4 md:mb-6 lg:flex-row lg:gap-12 xl:gap-24">
              <address className="not-italic">
                <p className="text-xl text-emerald-600 font-semibold">Open hours</p>
                <p className="text-lg text-gray-500 py-1">
                  Monday-Saturday: <span className="text-black">9.00am-5.00pm</span>
                </p>
                <p className="text-lg text-gray-500 pb-4">
                  Sunday: <span className="text-black">Closed</span>
                </p>
                <Link
                  href="tel:+254111510152"
                  className="text-lg text-gray-600 underline flex gap-x-2 py-3 items-center hover:text-emerald-600 transition-colors"
                  aria-label="Call us at +254 111 510 152"
                >
                  <PiPhoneCall className="text-orange-600 size-8" aria-hidden="true" />
                  +254(0) 111 510 152
                </Link>
                <Link
                  href="mailto:info@nakurutubers.com"
                  className="text-lg text-gray-600 underline flex gap-x-2 items-center hover:text-emerald-600 transition-colors"
                  aria-label="Email us at info@nakurutubers.com"
                >
                  <IoMailOutline className="text-orange-600 size-8" aria-hidden="true" />
                  info@nakurutubers.com
                </Link>
              </address>
              <form className="flex-1" action="/" aria-label="Contact form">
                <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-8">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      className="w-full outline-none placeholder:text-gray-400 placeholder:text-md py-5 px-8 rounded-lg border border-gray-200 focus:border-emerald-500 transition-colors"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="sr-only">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      className="w-full outline-none placeholder:text-gray-400 placeholder:text-md py-5 px-8 rounded-lg border border-gray-200 focus:border-emerald-500 transition-colors"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-8">
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      className="w-full outline-none placeholder:text-gray-400 placeholder:text-md py-5 px-8 rounded-lg border border-gray-200 focus:border-emerald-500 transition-colors"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className="w-full outline-none placeholder:text-gray-400 placeholder:text-md py-5 px-8 rounded-lg border border-gray-200 focus:border-emerald-500 transition-colors"
                      type="tel"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full py-5 resize-none outline-none px-8 min-h-[150px] mb-8 md:mb-10 rounded-lg border border-gray-200 focus:border-emerald-500 transition-colors"
                    rows={5}
                    placeholder="Type your message here"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col gap-5">
                  <button
                    className="flex group items-center bg-emerald-600 transition-colors duration-200 px-6 py-4 lg:px-8 lg:py-4 rounded-full font-semibold text-md md:text-lg text-white w-fit hover:bg-emerald-700"
                    type="submit"
                  >
                    Send Message
                    <ArrowRightIcon className="size-6 ml-4 group-hover:translate-x-2 duration-200 ease-in-out" aria-hidden="true" />
                  </button>
                  <p className="text-md text-gray-500">
                    By clicking contact us button, you agree to our terms and
                    policy.
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
