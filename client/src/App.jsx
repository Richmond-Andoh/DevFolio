import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sections/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

export default App;