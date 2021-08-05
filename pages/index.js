import Home from "../components/Home/Home";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";

function HomePage(props) {
    return (
        <>
            <Home />
            <About />
            <Experience />
            <Skills />
        </>
    );
}

export default HomePage;
