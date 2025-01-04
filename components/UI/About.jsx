import Image from "next/image";
import { FaCheckDouble } from "react-icons/fa6";

export default function Hero2() {
  return (
    <div id="about" class="p-8 md:p-20 bg-white">
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
          <h3 class="font-chivo font-black text-emerald-600  text-4xl mb-[22px]">
            Unlocking Kenya’s smallholder potato farmers’ productivity potential{" "}
          </h3>
          <p class="text-quote md:text-lead-lg text-gray-600 mb-2">
            We utilize scientific research to produce certified seed potatoes
            using innovative technologies to help farmers increase yields,
            reduce postharvest losses and adapt to climate change. We aim to
            serve 20,000 smallholder farmers by 2030, transforming potato
            farming in Kenya through climate-resilient, certified seed potato.
          </p>
          <div className="flex gap-4 items-center bg-amber-50 p-4 rounded-lg border border-amber-500 shadow-md mt-10">
            <Image src="/images/vision.png" height={80} width={80} />
            <div>
              <h1 className="text-2xl font-bold text-amber-600">Vision</h1>
              <p className="text-gray-700 text-sm">
                To revolutionize potato farming in Africa through innovation,
                resilience, and climate-smart potato solutions.
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-4 items-center bg-amber-50 p-4 rounded-lg border border-amber-500 shadow-md mt-10">
            <Image src="/images/mission.png" height={80} width={80} />
            <div>
              <h1 className="text-2xl font-bold text-amber-600">Mission</h1>
              <p className="text-gray-700 text-sm">
                To provide certified seed potatoes and innovative training
                solutions that empower 700,000 smallholder farmers in Kenya to
                increase yields, adapt to climate change, reduce postharvest
                losses and enhance food security through research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
