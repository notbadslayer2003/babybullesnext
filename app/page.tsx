import Image from "next/image";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Products from "@/components/Products"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
    <Header/>
      <Hero/>
      <Products/>
      <Faq/>
      <Footer/>
    </>
  );
}
