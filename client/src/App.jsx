/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sections/Home/Home";
import Loader from "./components/loader/Loader";
import { useState, useEffect } from "react";
import axios from "axios";
import Toaster from "react-hot-toast";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SetPortfolioData } from "./reducer/rootSlice";
const App = () => {
   
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  
  const getPortfolioData = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get("/api/portfolio/portfolio-data");
      
      if (response.status === 200) {
        dispatch(SetPortfolioData(response.data));
        //const  data = await response.data;
        console.log(response.data);
        toast.success("successfull portfolio data fetch")
      }

      console.log("Status : ", response.statusText);
      toast.error("Unable to fetch portfolio data")
       
    } catch (error) {
      console.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  // Show the loader until data is fully loaded.


  useEffect(() => {
    getPortfolioData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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