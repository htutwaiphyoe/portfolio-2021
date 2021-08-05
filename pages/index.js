import Home from "../components/Home/Home";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Qualification from "../components/Qualification/Qualification";

function HomePage(props) {
    return (
        <>
            <Home />
            <About />
            <Skills />
            <Experience />
            <Qualification />
        </>
    );
}

export default HomePage;
