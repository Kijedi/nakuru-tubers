import NavbarModern from "@/components/ui/NavbarModern";
import FooterModern from "@/components/ui/FooterModern";
import ServicesHero from "@/components/ui/ServicesHero";
import ServicesOverview from "@/components/ui/ServicesOverview";

export const metadata = {
  title: "Our Services - Potato Farming Consultancy",
  description:
    "Expert potato farming consultancy services including ware potato production, post-harvest handling, seed merchant training, and capacity building for Kenyan farmers.",
  openGraph: {
    title: "Our Services | Nakuru Tubers",
    description:
      "Expert potato farming consultancy and training services for Kenyan farmers.",
    url: "https://nakurutubers.com/services",
  },
  alternates: {
    canonical: "https://nakurutubers.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <NavbarModern />
      <ServicesHero />
      <ServicesOverview />
      <FooterModern />
    </>
  );
}
