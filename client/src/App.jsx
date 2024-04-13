import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sections/Home/Home";
import Loader from "./components/loader/Loader";
import { useState } from "react";

const App = () => {
  const [loading, setloading] = useState(false);
  return (
    <BrowserRouter>
    { loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;