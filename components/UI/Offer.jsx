import { FaCalendar } from "react-icons/fa6";
import Image from "next/image";
export default function Offer() {
  return (
    <div class="px-[12px] md:px-[36px] xl:px-0 bg-emerald-600">
      <div class="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px]">
        <Image
          class="absolute top-0 left-0 z-10 -translate-x-1/4"
          src="/images/patterns/pattern-4.svg"
          height={80}
          width={80}
          alt="pattern icon"
        />
        <div class="text-center relative mb-[70px] md:mb-[90px]">
          <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-white mb-5 md:mb-[30px] max-w-[725px]">
          Why We Do What We Do
          </h2>
          <p class="text-quote md:text-lead-lg text-gray-50 mx-auto md:max-w-[50ch]">
          We are transforming potato farming by utilizing cutting-edge science and research to provide smallholder farmers with certified seed potatoes. 
          </p>
        </div>
        <div class="flex flex-wrap md:flex-nowrap gap-3">
          <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
            <FaCalendar
              class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px] text-amber-400"
              alt="icon"
            />
            <h3 class="font-chivo  text-emerald-600 font-bold text-[18px] md:text-heading-5 mb-[20px]">
              Food Security
            </h3>
            <p class="text-text text-gray-600">
              Food insecurity continues to plague Kenya, with over 51% of the
              population facing hunger. Potatoes, a vital staple crop, suffer
              from low productivity and significant post-harvest losses. By
              addressing these challenges, we can ensure a more abundant and
              reliable food supply for our nation.
            </p>
          </div>
          <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
            <FaCalendar
              class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px] text-amber-400"
              alt="icon"
            />
            <h3 class="font-chivo text-emerald-600  font-bold text-[18px] md:text-heading-5 mb-[20px]">
              Climate Change
            </h3>
            <p class="text-text text-gray-600">
              Climate change has increased agricultural challenges leading to
              erratic weather, prolonged droughts, and increased pests and
              diseases outbreaks. These actors directly impact crop productivity
              and contribute to increased postharvest losses. Urgent action to
              adapt is essential to adapt to these changing conditions and
              mitigate the negative impacts on food security and livelihoods.
            </p>
          </div>
          <div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
            <FaCalendar
              class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px] text-amber-400"
              alt="icon"
            />
            <h3 class="font-chivo text-emerald-600 font-bold text-[18px] md:text-heading-5 mb-[20px]">
            Economic Development 
            </h3>
            <p class="text-text text-gray-600">
            Smallholder farmers, key drivers of Kenya’s rural economy, face low yields, poor-quality produce, and limited market access. Overcoming these barriers can transform rural economies, create jobs, and enhance economies resilience in agriculture-driven communities. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
