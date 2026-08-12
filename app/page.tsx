import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Content from "../components/Features";
import ContactForm from "../components/ContactForm";
// import Footer from "../components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Content /> */}
      <ContactForm />
      {/* <Footer /> */}
    </main>
  );
}