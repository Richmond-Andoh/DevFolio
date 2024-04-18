/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sections/Home/Home";
import Loader from "./components/loader/Loader";
import { useState, useEffect } from "react";
import axios from "axios";
import Toaster from "react-hot-toast";
import toast from "react-hot-toast";
const App = () => {
   
  const [isLoading, setIsLoading] = useState(true);
  
  const getPortfolioData = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get("/api/portfolio/portfolio-data");
      
      if (response.status === 200) {
        const  data = await response.data;
        console.log(data);
        toast.success("successfull portfolio data fetch")
      }

      console.log("Error : ", response.statusText);
       
    } catch (error) {
      console.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  // Show the loader until data is fully loaded.
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  useEffect(() => {
    getPortfolioData();
  }, [])
  
  const [loading, setloading] = useState(false);
  return (
    <BrowserRouter>
    { loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>

      <Toaster />
    </BrowserRouter>
  )
}

export default App;