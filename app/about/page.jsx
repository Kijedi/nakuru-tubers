import NavbarModern from "@/components/ui/NavbarModern";
import FooterModern from "@/components/ui/FooterModern";
import AboutHero from "@/components/ui/AboutHero";
import MissionVision from "@/components/ui/MissionVision";
import ValuesSection from "@/components/ui/ValuesSection";
import TheoryOfChangeModern from "@/components/ui/TheoryOfChangeModern";

export const metadata = {
  title: "About Us - Our Mission & Values",
  description:
    "Learn about Nakuru Tubers' mission to serve 200,000 smallholder farmers by 2030 through science-led seed systems. Discover our vision, values, and theory of change.",
  openGraph: {
    title: "About Us | Nakuru Tubers",
    description:
      "Transforming African agriculture through science-led seed systems, empowering smallholder farmers with climate-resilient potato varieties.",
    url: "https://nakurutubers.com/about",
  },
  alternates: {
    canonical: "https://nakurutubers.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <NavbarModern />
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <TheoryOfChangeModern />
      <FooterModern />
    </>
  );
}
