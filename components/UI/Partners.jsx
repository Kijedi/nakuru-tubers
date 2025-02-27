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
    <div className="p-10 lg:p-20 bg-gray-50">
      <div className=" mx-auto text-center  max-w-3xl">
        <span class="font-chivo inline-block bg-bg-2 text-yellow-500 bg-yellow-500/20 font-bold py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">
          Our Partners
        </span>
        <h3 class="font-chivo font-bold lg:text-heading-1 text-emerald-600 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px]">
          Partnering for Sustainable Potato Farming{" "}
        </h3>
        <p className="text-lg text-gray-500 py-3">
          We collaborate with organizations and experts to promote
          climate-smart, certified seed potatoes and innovative farming
          solutions. Together, we empower smallholder farmers to boost yields,
          reduce losses, and build resilience against climate change.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:p-20">
        {partners.map((partner, index) => (
          <Link key={index} href={partner.href}>
            <div className="w-full group bg-white shadow-md h-full justify-center flex py-8 flex-col items-center relative">
              <Image
                src={partner.logo}
                alt={"logo"}
                height={150}
                width={150}
                className=" "
              />
              <p className="absolute bottom-3 font-medium group-hover:underline  underline-offset-2 tracking-wider text-md text-amber-700">
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
