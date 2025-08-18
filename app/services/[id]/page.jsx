import { services } from "../../../components/data/services";
import Footer from "../../../components/yu/Footer";
import Navbar from "../../../components/yu/Navbar";
import Price from "../../../components/yu/Packages";
export default async function ServiceIndex({ params }) {
  const serviceId = (await params).id;
  console.log(serviceId);
  const service = services[serviceId];
  return (
    <>
      <Navbar />
      <div className="relative">
        <div
          className="relative lg:h-[500px]  bg-center bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-96"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          {" "}
          <div className="absolute bottom-20 z-10 md:w-3/5 pr-4">
          <p className="text-3xl lg:text-5xl z-10 font-medium  text-emerald-500">
          {service.name}
            </p>
            <p className="text-lg pt-2 lg:text-sm font-light  text-white">
              {service.full_description}
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 z-0  h-full object-cover bg-gradient-to-r from-black/80 to-black/20"></div>
        </div>
      </div>
      <Price service={service} />

      <Footer />
    </>
  );
}
