// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Featured from "@/components/Featured";
import ProductLineup from "@/components/ProductLineup";
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
