// import Product from "../components/UI/Product";
import Footer from "../components/ui/Footer";
import Hero2 from "../components/ui/Hero2";
import Navbar from "../components/ui/Navbar";
import About from "../components/ui/About";
import Offer from "../components/ui/Offer";
import Partner from "../components/ui/Partner";
import Services from "../components/ui/Services";
import Traction from "../components/ui/Traction";
import Value from "../components/ui/Value";
import Problem from "../components/ui/Problem";
import Change from "../components/ui/Change";
import Partners from "../components/ui/Partners";
import Impact from "../components/ui/Impact";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <About />
      <Traction />
      <Value />
      <Problem />
      <Impact />

      <Change />

      <Services />
      <Partners />
      <Partner />
      <Footer />
    </>
  );
}
