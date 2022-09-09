import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import Qualification from "@/components/Qualification/Qualification";
import Subscription from "@/components/Subscription/Subscription";
import Services from "@/components/Services/Services";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Meta from "@/components/Meta/Meta";

function HomePage(props) {
  return (
    <>
      <Meta />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Services />
      <Subscription />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
