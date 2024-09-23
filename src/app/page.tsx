import Analysis from "@/components/analysis/Analysis";
import Contact from "@/components/contact/Contact";
import Description from "@/components/description/Description";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import Investment from "@/components/investment/Investment";
import NavBar from "@/components/navbar/NavBar";
import Summary from "@/components/summary/Summary";

export default function Home() {
  return (
    <div className="flex min-h-screen overflow-hidden flex-col">
      <NavBar/>
      <Hero />
      <section id="about">
          <Summary />
      </section>
      <section id="investment">
          <Investment />
      </section>
      <section id="plan">
          <Description />
      </section>
      <section id="gallery">
          <Gallery />
      </section>
      <section id="analysis">
          <Analysis />
      </section>
      <section id="contact">
          <Contact />          
      </section>
      <div className="bg-gray-300 text-black">
      <Footer />
      </div>
    </div>
  );
}
 