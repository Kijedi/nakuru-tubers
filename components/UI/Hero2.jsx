import Link from "next/link";

export default function Hero2() {
  return (
    <div className="bg-[url('/images/pillars/5.jpg')] bg-cover bg-center lg:h-screen saturate-150 h-[400px] relative flex items-center">
      <div className="absolute z-10 max-w-4xl p-8 lg:p-20">
        <h1 className="font-bold py-3  text-emerald-600 tracking-wider w-full text-3xl lg:text-5xl capitalize">
          Nakuru Tubers
        </h1>
        <h1 className="font-light pb-2  text-orange-500 tracking-wider w-full text-xl lg:text-3xl capitalize">
          Your Trusted Partner for high quality certified seed potato
        </h1>
        <p className="text-gray-300 text-xs leading-5 lg:text-sm font-light mb-5 lg:mb-8">
          We are transforming potato farming by utilizing cutting-edge science
          and research to provide smallholder farmers with certified seed
          potatoes. Through climate-smart agricultural practices and innovative
          technologies, we empower farmers to boost yields, reduce postharvest
          losses, and ensure sustainable livelihoods for communities across
          Kenya.
        </p>
        <Link
          alt="services"
          className=" bg-white hidden lg:inline-block hover:bg-transparent  duration-300 border hover:border-emerald-600 text-orange-600 font-semibold  ease-in-out text-sm tracking-widest  px-4 py-2 rounded-lg "
          href={"products"}
        >
          Our Products
        </Link>
      </div>
      <div className="absolute z-0 h-full w-full  bg-gradient-to-r from-black to-black/0"></div>
    </div>
  );
}
