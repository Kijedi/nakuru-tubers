import FooterModern from "../components/ui/FooterModern";
import NavbarModern from "../components/ui/NavbarModern";
import HeroModern from "../components/ui/HeroModern";
import JourneySection from "../components/ui/JourneySection";
import ServicesPreview from "../components/ui/ServicesPreview";
import PartnersModern from "../components/ui/PartnersModern";

export default function Home() {
  return (
    <>
      <NavbarModern />
      <HeroModern />
      <JourneySection />
      <ServicesPreview />
      <PartnersModern />
      <FooterModern />
    </>
  );
}
