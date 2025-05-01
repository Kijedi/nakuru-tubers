import Link from "next/link";
import Image from "next/image";

const partners = [
  {
    name: "RUFORUM",
    logo: "/images/partners/ruforum.png",
    href: "https://www.ruforum.org",
  },

  {
    name: "AFAAS",
    logo: "/images/partners/afaas.png",
    href: "https://www.afaas-africa.org",
  },
  {
    name: "COELIB",
    logo: "/images/partners/coelib.png",
    href: "https://www.coelib.org",
  },
  {
    name: "CIRCLE INNOVATION",
    logo: "/images/partners/circle_innovation.png",
    href: "https://www.circleinnovation.org",
  },
  {
    name: "WFP",
    logo: "/images/partners/wfp.png",
    href: "https://www.wfp.org",
  },
  {
    name: "MasterCard Foundation",
    logo: "/images/partners/mastercard.jpg",
    href: "https://www.mastercardfoundation.org",
  },
];

const Partners = () => {
  return (
    <div className="p-10 lg:p-20 bg-gray-100">
      <div className=" mx-auto text-center  max-w-3xl">
      <p class="font-chivo inline-block font-bold text-teal-600 bg-teal-600/10 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
      Our Partners
        </p>
        <h3 class="font-chivo font-bold lg:text-heading-1 text-emerald-600 md:text-4xl text-2xl leading-9 mb-[22px]">
          Partnering for Sustainable Potato Farming{" "}
        </h3>
        <p class="font-chivo lg:text-heading-1 text-gray-600 md:text-sm text-sm mb-[22px]">
          We collaborate with organizations and experts to promote
          climate-smart, certified seed potatoes and innovative farming
          solutions. Together, we empower smallholder farmers to boost yields,
          reduce losses, and build resilience against climate change.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-8 lg:px-20">
        {partners.map((partner, index) => (
          <Link key={index} href={partner.href}>
            <div className="w-full group bg-white shadow-md h-full justify-center flex py-8 flex-col items-center relative">
              <Image
                src={partner.logo}
                alt={"logo"}
                height={120}
                width={120}
                className=" "
              />
              <p className="absolute bottom-3 font-medium group-hover:underline  underline-offset-2 tracking-wider text-md text-orange-700">
                {partner.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Partners;
