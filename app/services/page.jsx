import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import Services from "../../components/ui/Services";

export const metadata = {
  title: "Potato Farming Consultancy Services",
  description:
    "Expert potato farming consultancy packages for Kenyan farmers. From basic training to platinum-level support, we help maximize your potato yields and profits.",
  openGraph: {
    title: "Potato Farming Consultancy Services | Nakuru Tubers",
    description:
      "Expert potato farming consultancy packages for Kenyan farmers. Maximize your yields and profits.",
    url: "https://nakurutubers.com/services",
  },
  alternates: {
    canonical: "https://nakurutubers.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative bg-[url('/images/products.jpg')] bg-center bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-72">
          <div className="absolute z-10 md:w-3/5 pr-4">
            <h1 className="text-3xl lg:text-4xl z-10 font-medium text-emerald-500">
              Our Consultancy Packages
            </h1>
            <p className="text-lg pt-2 lg:text-xl font-light text-white">
              Tailored consultancy services to help farmers maximize yields,
              improve quality, and access premium markets.
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 z-0 h-full object-cover bg-gradient-to-r from-black/80 to-black/10"></div>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
}
