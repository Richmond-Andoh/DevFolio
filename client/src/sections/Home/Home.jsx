import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
import About from "../about/About";
import Contact from "../contact/Contact";
import Experiences from "../experiences/Experiences";
import Intro from "../intro/Intro";
import Projects from "../projects/Projects";
import LeftSider from "../../components/leftSider/LeftSider";
import { useSelector } from "react-redux";

const Home = () => {
  const  { loading } = useSelector((state) => state.root)
  return (
    <div className="bg-primary-content">
      <Header />
      {
        loading 
        && 
        <div className="bg-primary-content px-40 sm:px-5">
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      }
      
    </div>
  )
}

export default Home;