// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import ProductLineup from "@/components/ProductLineup";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <ProductLineup />
    </>
  );
}
