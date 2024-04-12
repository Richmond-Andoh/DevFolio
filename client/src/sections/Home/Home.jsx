import Header from "../../components/Header"
import About from "../about/About";
import Intro from "../intro/Intro";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary-content px-40 sm:px-5">
        <Intro />
        <About />
      </div>
    </div>
  )
}

export default Home;