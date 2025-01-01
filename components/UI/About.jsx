import Image from "next/image";
import { FaCheckDouble } from "react-icons/fa6";

export default function Hero2() {
  return (
    <div class="p-8 md:p-20 bg-white">
      <div class="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
        <div class="relative">
          <Image
            class="rounded-2xl"
            src={`/images/about.jpg`}
            layout="fill"
            className="object-cover rounded-lg shadow-lg"
            alt="Agon"
          />
        </div>
        <div class="flex-1 order-1">
          <span class="font-chivo inline-block bg-bg-2 text-teal-600 bg-teal-600/10 font-medium py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
            About Us
          </span>
          <h3 class="font-chivo font-bold lg:text-heading-1 text-emerald-600 md:text-[46px] md:leading-[52px] text-[35px] leading-9 mb-[22px]">
            Your Trusted Partner for high quality certified seed potato
          </h3>
          <p class="text-quote md:text-lead-lg text-gray-600 mb-2">
            We utilize scientific research to produce certified seed potatoes
            using innovative technologies to help farmers increase yields,
            reduce postharvest losses and adapt to climate change. We aim to
            serve 20,000 smallholder farmers by 2030, transforming potato
            farming in Kenya through climate-resilient, certified seed potato.
          </p>
          <h1 className="text-lg font-semibold text-emerald-600">Vision</h1>
          <p className="text-gray-700">
            To revolutionize potato farming in Africa through innovation,
            resilience, and climate-smart potato solutions.
          </p>
          <h1 className="text-emerald-600 text-lg font-semibold">Mission</h1>
          <p className="text-gray-700">
            To provide certified seed potatoes and innovative training solutions
            that empower 700,000 smallholder farmers in Kenya to increase
            yields, adapt to climate change, reduce postharvest losses and
            enhance food security through research.
          </p>
          {/* <div class="border border-green-900 border-dashed my-4"></div> */}
        
        </div>
      </div>
    </div>
  );
}
