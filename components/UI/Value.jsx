import { FaCalendar } from "react-icons/fa6";
import { LuLightbulb } from "react-icons/lu";
import { IoEarthOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { PiHandFistLight } from "react-icons/pi";




const values = [
  {
    name: "Innovation",
    icon: LuLightbulb,
    description:
      "Continuously improving potato farming through science and technology.",
  },
  {
    name: "Sustainability",
    icon: IoEarthOutline,
    description:
      "We prioritize eco-friendly practices to safeguard our planet.",
  },
  {
    name: "Empowerment",
    icon: PiHandFistLight,
    description:
      "Uplifting farmers especially youth and women and strengthening communities.",
  },
  {
    name: "Integrity",
    icon: FaRegHandshake,
    description: "We uphold transparency and honesty in all our operations.",
  },
];

export default function Value() {
  return (
    <div className="bg-white p-10 md:p-12">
      <div className="max-w-6xl mx-auto flex items-center flex-col text-center my-4 md:my-8">
        <p class="font-chivo inline-block bg-bg-2 text-teal-600 bg-teal-600/10 font-medium py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
         What we value
        </p>
        <h3 class="font-chivo font-bold lg:text-heading-1 text-gray-600 md:text-3xl text-xl leading-9 mb-[22px]">
        We are revolutionizing potato farming through innovative science and technology.        </h3>
      </div>

      <div class="md:grid md:grid-cols-2 bg-white text-gray-600  max-w-6xl mx-auto gap-4">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="p-4 md:p-8 cursor-pointer border group shadow-lg text-gray-500 my-6 md:my-0 first:bg-emerald-600 first:text-white hover:bg-emerald-600 hover:text-white ease-in-out hover:-translate-y-2 transition-all duration-200 rounded-lg border-emerald-600"
            >
              <Icon className="size-12 md:size-16 group-hover:text-amber-500 duration-200 ease-in-out " />
              <p className="text-xl py-2 group-hover:text-amber-500 text-emerald-600 group-first:text-white duration-200 ease-in-out font-semibold">{value.name}</p>
              <p className="text-lg">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
