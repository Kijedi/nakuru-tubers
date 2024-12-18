import Product from "../components/UI/Product";
import Footer from "../components/UI/Footer";
import Hero2 from "../components/UI/Hero2";
import Navbar from "../components/UI/Navbar";
import About from "../components/UI/About";
import Offer from "../components/UI/Offer";
import Partner from "../components/UI/Partner";
import Price from "../components/UI/Packages";
import Traction from "../components/UI/Traction";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <About />
      <Traction />
      <Offer />
      <Partner />
      <Price />
      <Product />
      <Footer />
    </>
  );
}
