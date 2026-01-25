import NavbarModern from "@/components/ui/NavbarModern";
import FooterModern from "@/components/ui/FooterModern";
import ImpactHero from "@/components/ui/ImpactHero";
import ImpactPillars from "@/components/ui/ImpactPillars";

export const metadata = {
  title: "Our Impact - Food Security, Jobs, & Empowerment",
  description:
    "Discover how Nakuru Tubers drives impact through four pillars: Food Security, Job Creation, Digitalization, and Inclusivity. 30K+ farmers reached.",
  openGraph: {
    title: "Our Impact | Nakuru Tubers",
    description:
      "Driving change through Food Security, Job Creation, Digitalization, and Inclusivity.",
    url: "https://nakurutubers.com/impact",
  },
  alternates: {
    canonical: "https://nakurutubers.com/impact",
  },
};

export default function ImpactPage() {
  return (
    <>
      <NavbarModern />
      <ImpactHero />
      <ImpactPillars />
      <FooterModern />
    </>
  );
}
