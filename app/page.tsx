import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Partners from "./components/Partners";
import Blog from "./components/Blog";
import Support from "./components/Support";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Partners />
        <Blog />
        <Support />
      </main>
      <Footer />
    </>
  );
}
