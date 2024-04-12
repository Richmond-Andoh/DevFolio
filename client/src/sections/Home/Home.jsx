import Header from "../../components/Header"
import About from "../about/About";
import Experiences from "../experiences/Experiences";
import Intro from "../intro/Intro";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary-content px-40 sm:px-5">
        <Intro />
        <About />
        <Experiences />
      </div>
    </div>
  )
}

export default Home;