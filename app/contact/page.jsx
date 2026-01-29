import NavbarModern from "@/components/ui/NavbarModern";
import FooterModern from "@/components/ui/FooterModern";
import ContactHero from "@/components/ui/ContactHero";
import ContactForm from "@/components/ui/ContactForm";
import FAQ from "@/components/ui/FAQ";
import LocationMap from "@/components/ui/LocationMap";

export const metadata = {
  title: "Contact Us - Get Expert Potato Farming Advice",
  description:
    "Contact Nakuru Tubers for certified seed potatoes and expert agricultural consultation. Reach our team in Nakuru, Kenya for all your potato farming needs.",
  openGraph: {
    title: "Contact Us | Nakuru Tubers",
    description:
      "Contact Nakuru Tubers for certified seed potatoes and expert agricultural consultation in Kenya.",
    url: "https://nakurutubers.com/contact",
  },
  alternates: {
    canonical: "https://nakurutubers.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <NavbarModern />
      <ContactHero />
      <ContactForm />
      <LocationMap />
      <FAQ />
      <FooterModern />
    </>
  );
}
