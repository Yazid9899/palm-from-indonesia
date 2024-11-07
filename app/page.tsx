// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/app/Hero";
import AboutUs from "@/app/AboutUs";
import Featured from "@/app/Featured";
import ProductLineup from "@/app/ProductLineup";
import ContactUs from "@/app/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <ProductLineup />
      <Featured />
      <ContactUs />
      <Footer />
    </>
  );
}
