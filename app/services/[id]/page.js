import { services } from "@/components/data/services";
export default async function ServiceIndex({ params }) {
  const serviceId = (await params).id;
  const service = services[serviceId];
  return (
    <>
      <Navbar />
      <div className="relative">
        <div
          className="relative bg-center bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-72"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          {" "}
          <div className="absolute z-10 w-3/5">
            <p className="text-3xl lg:text-4xl z-10 font-medium  text-emerald-500">
              {service.name}
            </p>
            <p className="text-lg pt-2 lg:text-xl font-light  text-white">
              {service.description}
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 z-0  h-full object-cover bg-gradient-to-r from-black/80 to-black/10"></div>
        </div>
      </div>
    </>
  );
}
