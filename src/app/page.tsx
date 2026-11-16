import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Publications from "@/components/Publications";
import Solutions from "@/components/Solutions";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Solutions />
      <Publications />
      <Sponsors />
      <Contact />
    </>
  );
}
