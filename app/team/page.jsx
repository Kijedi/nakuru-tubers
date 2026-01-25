import NavbarModern from "@/components/ui/NavbarModern";
import FooterModern from "@/components/ui/FooterModern";
import TeamHero from "@/components/ui/TeamHero";
import TeamGrid from "@/components/ui/TeamGrid";

export const metadata = {
  title: "Our Team - Young, Passionate & Diverse",
  description:
    "Meet the dedicated team behind Nakuru Tubers. A 100% youth-led, 60% women team of agricultural experts committed to transforming potato farming in Kenya.",
  openGraph: {
    title: "Our Team | Nakuru Tubers",
    description:
      "Meet our young, passionate, and diverse team transforming potato farming in Kenya.",
    url: "https://nakurutubers.com/team",
  },
  alternates: {
    canonical: "https://nakurutubers.com/team",
  },
};

export default function TeamPage() {
  return (
    <>
      <NavbarModern />
      <TeamHero />
      <TeamGrid />
      <FooterModern />
    </>
  );
}
