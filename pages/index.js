import Home from "../components/Home/Home";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Qualification from "../components/Qualification/Qualification";
import Subscription from "../components/Subscription/Subscription";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

function HomePage(props) {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Experience />
            <Services />
            <Subscription />
            <Footer />
        </>
    );
}

export default HomePage;
