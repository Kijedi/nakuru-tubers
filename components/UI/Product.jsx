import Image from "next/image";
import { products } from "../data/products";
import { IoCheckmarkDone } from "react-icons/io5";
import Link from "next/link";

export default function Product() {
  return (
    <div className="bg-white  relative py-28">
      <Image
        class="absolute top-5 right-0 z-10 -translate-x-1/4"
        src="/images/patterns/pattern-2.svg"
        height={80}
        width={80}
        alt="pattern icon"
      />
      <div className="bg-white mx-auto text-center  max-w-3xl">
        <span class="font-chivo inline-block bg-bg-2 text-yellow-500 bg-yellow-500/20 font-bold py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
          Our Products and Services
        </span>
        <h3 class="font-chivo font-bold lg:text-heading-1 text-emerald-600 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px]">
          Your Trusted Partner for high quality certified seed potato
        </h3>
        <p className="text-lg text-gray-500 py-3">
          At Nakuru Tubers, we offer a range of innovative and high-quality
          products designed to support smallholder farmers in Kenya. Our
          products are rooted in science and research, providing farmers with
          the tools, resources, and knowledge they need to improve productivity,
          reduce losses, and increase profitability.
        </p>
      </div>
      <section class="py-12 px-4 mt-12 lg:mt-28 bg-white flex items-center justify-center">
        <div class="container">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-32 gap-y-12 md:gap-x-12">
            {products.map((product) => (
              <div class="max-w-3xl relative mx-auto grid md:grid-cols-5 grid-cols-1 gap-6 items-center rounded-2xl ">
                <div class="md:col-span-2  lg:z-0 z-10 ml-4 md:ml-0 relative h-96 w-96">
                  <Image
                    src={`/images/bg1.jpg`}
                    layout="fill"
                    class="rounded-xl object-cover"
                    alt=""
                  />
                </div>
                <div class="md:col-span-3 z-10 lg:bg-white/80 bg-white/30 backdrop-blur-md border border-green-600 -mt-10 p-6 rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                  <h2 class="text-2xl font-semibold text-gray-950">
                    {product.name}
                  </h2>
                  <p class="text-sm font-medium text-gray-500 flex items-center">
                    <i class="ti ti-map-pin text-base"></i>SF, Bay Area
                  </p>
                  <p class="text-base font-medium text-gray-500 mt-3">
                    {product.description}
                  </p>
                  <div>
                    <h1 className="text-base font-medium text-gray-800 mt-3">
                      Features
                    </h1>
                    <div>
                      {product.features.map((feature) => (
                        <div className="flex items-center gap-2 mt-2">
                          <IoCheckmarkDone className="size-6 text-emerald-600" />
                          <p class="text-sm font-medium text-gray-800">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-5">
                    <h1 className="text-base font-medium text-gray-800 mt-3">
                      What's Included
                    </h1>
                    <div>
                      {product.included.map((feature) => (
                        <div className="flex items-center gap-2 mt-2">
                          <IoCheckmarkDone className="size-6 text-emerald-600 " />
                          <p class="text-sm font-medium text-gray-800">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex w-full justify-center">
                    <Link
              href="mailto:info@nakurutubers.com"
              className="bg-emerald-600 text-white rounded-md px-4 py-2 hover:-translate-y-1 duration-200 transition-all"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
