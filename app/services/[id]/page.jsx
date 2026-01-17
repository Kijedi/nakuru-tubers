import { services } from "../../../components/data/services";
import Footer from "../../../components/ui/Footer";
import Navbar from "../../../components/ui/Navbar";
import Price from "../../../components/ui/Packages";

export async function generateMetadata({ params }) {
  const serviceId = (await params).id;
  const service = services[serviceId];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} Consultancy`,
    description: service.full_description || service.description,
    openGraph: {
      title: `${service.name} Consultancy | Nakuru Tubers`,
      description: service.description,
      url: `https://nakurutubers.com/services/${serviceId}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    alternates: {
      canonical: `https://nakurutubers.com/services/${serviceId}`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const serviceId = (await params).id;
  const service = services[serviceId];

  return (
    <>
      <Navbar />
      <div className="relative">
        <div
          className="relative lg:h-[500px] bg-center bg-cover text-white px-10 lg:px-24 py-10 lg:py-16 bg-blend-overlay h-96"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute bottom-20 z-10 md:w-3/5 pr-4">
            <h1 className="text-3xl lg:text-5xl z-10 font-medium text-emerald-500">
              {service.name}
            </h1>
            <p className="text-lg pt-2 lg:text-sm font-light text-white">
              {service.full_description}
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 z-0 h-full object-cover bg-gradient-to-r from-black/80 to-black/20"></div>
        </div>
      </div>
      <Price service={service} />
      <Footer />
    </>
  );
}
