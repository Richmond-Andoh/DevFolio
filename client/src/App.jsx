import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

export default App;