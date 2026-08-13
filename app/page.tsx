import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardsSection from "../components/CardSection";
import HowItWorks from "../components/HowItWorks";
import ContactForm from "../components/ContactForm";
// import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CardsSection />
      <HowItWorks />
      <ContactForm />
      {/* <Footer /> */}
    </main>
  );
}