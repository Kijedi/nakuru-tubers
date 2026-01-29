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

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Located in Nakuru, Kenya — the heart of potato farming country
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4918.18801544677!2d36.6511506!3d-1.4377031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f01ac58904707%3A0xe9f644128fb0c2b3!2sNakuru%20Tubers!5e1!3m2!1sen!2ske!4v1769675385777!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nakuru Tubers Location"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <FooterModern />
    </>
  );
}
