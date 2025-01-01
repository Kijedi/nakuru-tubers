import { FaCalendar } from "react-icons/fa6";
const values = [
  {
    name: "Innovation",
    icon: FaCalendar,
    description:
      "Continuously improving potato farming through science andtechnology.",
  },
  {
    name: "Sustainability",
    icon: FaCalendar,
    description:
      "We prioritize eco-friendly practices to safeguard our planet.",
  },
  {
    name: "Empowerment",
    icon: FaCalendar,
    description:
      "Uplifting farmers especially youth and women and strengthening communities.",
  },
  {
    name: "Integrity",
    icon: FaCalendar,
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
          Your Trusted Partner for high quality certified seed potato
        </h3>
      </div>

      <div class="md:grid md:grid-cols-2 bg-white text-gray-600  max-w-6xl mx-auto gap-4">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <div
              key={index}
              className="p-4 md:p-8 cursor-pointer border shadow-lg my-6 md:my-0 hover:bg-emerald-600 hover:text-white ease-in-out hover:-translate-y-2 transition-all duration-200 rounded-lg border-emerald-600"
            >
              <Icon className="size-10 md:size-16 text-emerald-600" />
              <p className="text-xl py-2 font-semibold text-emerald-600">{value.name}</p>
              <p className="text-lg">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
