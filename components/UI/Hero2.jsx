import Link from "next/link";

export default function Hero2() {
  return (
    <div className="bg-[url('/images/bg1.jpg')] bg-cover bg-center xl:h-[600px] lg:h-[500px] h-[500px] w-screen relative">
      <div className="absolute z-10 max-w-5xl p-10 lg:p-28">
        <h1 className="font-bold py-3  text-white tracking-wider  w-full text-4xl lg:text-5xl capitalize">
          <span className="text-[#42ce7c] text-5xl lg:text-7xl">
            {" "}
            Nakuru Tubers<br/>
          </span>{" "}
          Your Trusted Partner for high quality certified seed potato
        </h1>
        <p className="text-gray-300 hidden lg:block text-lg lg:text-xl font-light mb-5 lg:mb-8">
          We are transforming potato farming by utilizing cutting-edge science
          and research to provide smallholder farmers with certified seed
          potatoes. Through climate-smart agricultural practices and innovative
          technologies, we empower farmers to boost yields, reduce postharvest
          losses, and ensure sustainable livelihoods for communities across
          Kenya.
        </p>
        <Link
          alt="services"
          className=" bg-white hidden lg:inline-block hover:bg-transparent hover:text-white duration-300 border border-white text-teal-700 font-bold ease-in-out text-sm tracking-widest backdrop-blur-md  px-4 py-3 rounded-lg "
          href={"#"}
        >
          Our Services
        </Link>
      </div>
      <div className="absolute z-0 h-full w-full  bg-gradient-to-r from-black to-black/0"></div>
    </div>
  );
}
