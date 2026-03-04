import NavbarModern from "@/components/ui/NavbarModern";
import FooterModern from "@/components/ui/FooterModern";
import LastMileHero from "@/components/ui/LastMileHero";
import DigitalConnectors from "@/components/ui/DigitalConnectors";
import DeliveryFleet from "@/components/ui/DeliveryFleet";
import PartnerCtaModern from "@/components/ui/PartnerCtaModern";

export const metadata = {
  title: "Last Mile Delivery - Connecting Farmers to Seeds",
  description:
    "Our last-mile delivery network connects farmers to certified seed potatoes through Digital Connectors and our delivery fleet. Serving 10,000+ farmers across Kenya.",
  openGraph: {
    title: "Last Mile Delivery | Nakuru Tubers",
    description:
      "Connecting farmers, markets, and communities through our network of Digital Connectors and delivery fleet.",
    url: "https://nakurutubers.com/last-mile",
  },
  alternates: {
    canonical: "https://nakurutubers.com/last-mile",
  },
};

export default function LastMilePage() {
  return (
    <>
      <NavbarModern />
      <LastMileHero />
      <DigitalConnectors />
      <DeliveryFleet />
      <PartnerCtaModern />
      <FooterModern />
    </>
  );
}
