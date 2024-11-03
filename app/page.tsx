// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import ProductLineup from "@/components/ProductLineup";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Featured />
      <ProductLineup />
      <Footer />
    </>
  );
}
