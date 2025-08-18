import Image from "next/image";
import { FaCheckDouble } from "react-icons/fa6";
import { PiBinocularsDuotone } from "react-icons/pi";
import { PiTargetDuotone } from "react-icons/pi";

export default function Problem() {
  return (
    <div id="about" class="p-8 md:p-20 bg-gray-100">
      <div class="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px] items-center">
        <div className="flex items-center justify-end ">
          <div class="relative h-[300px] w-full shadow-lg my-10">
            <Image
              class="rounded-2xl"
              src={`/images/product2.jpg`}
              layout="fill"
              className="object-cover rounded-xl shadow-lg"
              alt="Agon"
            />
          </div>
        </div>
        <div class="flex-1 order-1">
          <h3 class="font-chivo font-black text-gray-500 text-2xl md:text-4xl mb-[22px]">
            What’s the challenge with{" "}
            <span className="text-emerald-600 ">potato farming in Kenya?</span>
          </h3>
          <p class="text-quote md:text-lead-lg text-sm text-gray-600 mb-2 text-justify">
            98% of Kenya’s smallholder potato farmers rely on farm-saved seeds
            and traditional methods, leading to low yields of 9-10 t/ha compared
            to the potential 20-40 t/ha. Erratic weather, prolonged droughts,
            and limited access to climate-smart practices exacerbate pest
            outbreaks, soil degradation, and postharvest losses threatening
            productivity, livelihoods, and food security.
          </p>
        </div>
      </div>
      <div class="lg:grid  lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px] items-center">
        <div class="">
          <h3 class="font-chivo font-black text-gray-500 text-2xl md:text-4xl mb-[22px]">
            How are we solving{" "}
            <span className="text-orange-600 ">the problem?</span>
          </h3>
          <p class="text-quote text-sm text-gray-600 mb-2 text-justify">
            At Nakuru Tubers, we are revolutionizing potato farming through
            innovative science and technology. Using hydroponics, aeroponics,
            and tissue culture, we produce certified, climate-resilient seed
            potato varieties that enhance yields and enable sustainable
            adaptation to changing climates. Our comprehensive approach includes
            empowering farmers—particularly women and youth—through training in
            climate-smart practices, postharvest handling, disease management,
            and financial literacy. Additionally, we facilitate market access,
            offering end-to-end support for an integrated and seamless farming
            experience. By equipping smallholder farmers with essential tools,
            knowledge, and resources, we address climate challenges, minimize
            postharvest losses, and drive long-term food security, increased
            productivity, and sustainable profitability.
          </p>
        </div>
        <div className="flex items-center justify-start ">
          <div class="relative md:h-[400px] rounded-xl shadow-lg h-[500px] my-10 w-[600px] ">
            <Image
              class="rounded-2xl"
              src={`/images/product1.jpeg`}
              layout="fill"
              className="object-cover rounded-xl shadow-lg"
              alt="Agon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
