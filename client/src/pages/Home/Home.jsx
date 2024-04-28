import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import About from "../../sections/about/About";
import Contact from "../../sections/contact/Contact";
import Experiences from "../../sections/experiences/Experiences";
import Intro from "../../sections/intro/Intro";
import Projects from "../../sections/projects/Projects";
import LeftSider from "../../components/leftSider/LeftSider";
import { useSelector } from "react-redux";

const Home = () => {
  const  { portfolioData } = useSelector((state) => state.root)
  return (
    <div className="bg-primary-content">
      <Header />
      {
        portfolioData
        && (
        <div className="px-40 sm:px-5">
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
          <LeftSider />
        </div>)
      }
      
    </div>
  )
}

export default Home;