import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}