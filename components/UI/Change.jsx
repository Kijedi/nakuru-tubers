import Image from "next/image";

export default function Change() {
  return (
    <div className="bg-white p-10 lg:p-28 gap-8 flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center mx-auto flex flex-col gap-y-6 items-center justify-center">
        <h3 class="font-black text-emerald-600 text-4xl  mb-[22px]">
          Our Theory of <span className="text-orange-600">Change</span>
        </h3>
        <div className="bg-gradient-to-tr text-3xl to-emerald-500 from-orange-500 text-white flex items-center justify-center font-bold h-20 w-20 rounded-full">
          1
        </div>
        <div className="max-w-5xl text-center">
          <h3 class="font-semibold text-emerald-600 text-3xl  mb-[22px]">
            If we
          </h3>
          <p class="text-quote md:text-lead-lg text-sm lg:text-lg text-gray-700 mb-2">
            Empower smallholder farmers by providing access to{" "}
            <span className="text-emerald-600 font-semibold">
              Certified climate-resilient seed potato varieties
            </span>{" "}
            ,
            <span className="text-emerald-600 font-semibold">
              Training in climate-smart agricultural practices and financial
              literacy
            </span>{" "}
            ,and{" "}
            <span className="text-emerald-600 font-semibold">
              Reliable markets for their produce to reduce postharvest losses{" "}
            </span>
          </p>
        </div>
        <div className="bg-gradient-to-tr text-3xl to-emerald-500 from-orange-500 text-white flex items-center justify-center font-semibold h-20 w-20 rounded-full">
          2
        </div>
        <div className="max-w-5xl text-center">
          <h3 class="font-semibold text-emerald-600 text-3xl  mb-[22px]">
            Then
          </h3>
          <p class="text-quote md:text-lead-lg text-sm lg:text-lg text-gray-700 mb-2">
            Smallholder farmers will have the resources needed to achieve higher
            yields, adapt to climate change, and improve their livelihoods. This
            will reduce hunger, increase income, and create sustainable farming
            jobs.
          </p>
        </div>{" "}
        <div className="bg-gradient-to-tr text-3xl  to-emerald-500 from-orange-500 text-white flex items-center justify-center font-semibold h-20 w-20 rounded-full">
          3
        </div>
        <div className="max-w-5xl text-center">
          <h3 class="font-semibold text-emerald-600 text-3xl  mb-[22px]">
            SDG Targets
          </h3>
          <p class="text-quote md:text-lead-lg text-sm lg:text-lg text-gray-700 mb-2">
            We will have created a sustainable business model that is scalable
            and replicable across Africa We will have developed a scalable and
            replicable business model, contributing to SDG 1 (No Poverty), SDG 2
            (Zero Hunger), SDG 3, 5, 8, 12 and SDG 13 (Climate Action).
          </p>
          <div className="flex gap-4 items-center justify-center flex-wrap m-10">
            <Image
              src={`/images/sdg/sdg1.png`}
              height={150}
              width={150}
              className="object-cover rounded-lg shadow-lg"
              alt="SDG"
            />{" "}
            <Image
              src={`/images/sdg/sdg2.png`}
              height={150}
              width={150}
              className="object-cover rounded-lg shadow-lg"
              alt="SDG"
            />{" "}
            <Image
              src={`/images/sdg/sdg3.png`}
              height={150}
              width={150}
              className="object-cover rounded-lg shadow-lg"
              alt="SDG"
            />{" "}
            <Image
              src={`/images/sdg/sdg5.png`}
              height={150}
              width={150}
              className="object-cover rounded-lg shadow-lg"
              alt="SDG"
            />{" "}
            <Image
              src={`/images/sdg/sdg8.png`}
              height={150}
              width={150}
              className="object-cover rounded-lg shadow-lg"
              alt="SDG"
            />{" "}
            <Image
              src={`/images/sdg/sdg12.png`}
              height={150}
              width={150}
              className="object-cover rounded-lg shadow-lg"
              alt="SDG"
            />{" "}
            <Image
              src={`/images/sdg/sdg13.png`}
              height={150}
              width={150}
              className="object-cover rounded-lg shadow-lg"
              alt="SDG"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
