// import Product from "../components/UI/Product";
import Footer from "../components/UI/Footer";
import Hero2 from "../components/UI/Hero2";
import Navbar from "../components/UI/Navbar";
import About from "../components/UI/About";
import Offer from "../components/UI/Offer";
import Partner from "../components/UI/Partner";
import Price from "../components/UI/Packages";
import Traction from "../components/UI/Traction";
import Value from "../components/UI/Value";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <About />
      <Value />
      <Traction />
      <Offer />
      <Partner />
      <Price />
      {/* <Product /> */}
      <Footer />
    </>
  );
}
