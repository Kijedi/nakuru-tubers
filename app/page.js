// import Product from "../components/UI/Product";
import Footer from "../components/UI/Footer";
import Hero2 from "../components/UI/Hero2";
import Navbar from "../components/UI/Navbar";
import About from "../components/UI/About";
import Offer from "../components/UI/Offer";
import Partner from "../components/UI/Partner";
import Services from "../components/UI/Services";
import Traction from "../components/UI/Traction";
import Value from "../components/UI/Value";
import Problem from "../components/UI/Problem";
import Change from "../components/UI/Change";
import Partners from "../components/UI/Partners";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <About />
      <Traction />
      <Value />
      <Problem />
      <Change />
      <Offer />
      {/* <Price /> */}
      <Services />
      <Partners />
      <Partner />
      <Footer />
    </>
  );
}
