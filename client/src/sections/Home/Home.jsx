import Header from "../../components/Header"
import About from "../about/About";
import Contact from "../contact/Contact";
import Experiences from "../experiences/Experiences";
import Intro from "../intro/Intro";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary-content px-40 sm:px-5">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default Home;