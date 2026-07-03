import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import ProblemSolution from "../components/landing/ProblemSolution";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function Landing() {

  return (

    <main
      className="
                overflow-x-hidden
                scroll-smooth
                bg-background
            "
    >

      <Navbar />

      <Hero />

      <HowItWorks />

      <Features />

      <ProblemSolution />

      <Testimonials />

      <CTA />

      <Footer />

    </main>

  );

}

export default Landing;