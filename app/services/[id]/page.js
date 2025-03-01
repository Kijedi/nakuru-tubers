import { services } from "../../../components/data/services";
import Footer from "../../../components/UI/Footer";
import Navbar from "../../../components/UI/Navbar";
import Price from "../../../components/UI/Packages";
export default async function ServiceIndex({ params }) {
  const serviceId = (await params).id;
  console.log(serviceId);
  const service = services[serviceId];
  return (
    <>
      <Navbar />
      <div className="relative">
        <div
          className="relative bg-center bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-96"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          {" "}
          <div className="absolute z-10 md:w-3/5 pr-4 ">
            <p className="text-3xl normal-case lg:text-6xl z-10 font-semibold  text-emerald-500">
              {service.name}
            </p>
            <p className="text-lg pt-2 lg:text-2xl font-light  text-white">
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
