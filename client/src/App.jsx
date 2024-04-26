/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./sections/Home/Home";
import Loader from "./components/loader/Loader";
import { useState, useEffect } from "react";
import axios from "axios";
import Toaster from "react-hot-toast";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { SetPortfolioData, hideloading, showloading } from "./reducer/rootSlice";
import Admin from "./sections/Admin/Admin";
const App = () => {
  //const [showloading, setshowloading] = useState(false)
  const dispatch = useDispatch();
  const { loading, portfolioData} = useSelector((state) =>  state.root);
  
  const getPortfolioData = async () => {
    try {
      dispatch(showloading());
      const response = await axios.get("/api/portfolio/portfolio-data");
      
      if (response.status === 200) {
        dispatch(SetPortfolioData(response.data));
        dispatch(hideloading());
        //const  data = await response.data;
        console.log(response.data);
        toast.success("successfull portfolio data fetch")
      }

      console.log("Status : ", response.statusText);
      toast.error("Unable to fetch portfolio data")
       
    } catch (error) {
      dispatch(hideloading());
      console.error(error.message)
    }
     
  }
  // Show the loader until data is fully loaded.


  useEffect(() => {
    if(!portfolioData){
      getPortfolioData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolioData]);
  
  // useEffect(() => {
  //   console.log(portfolioData);
  // }, [portfolioData])
  return (
    <BrowserRouter>
    { loading ? <Loader /> : null }
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/admin" element={ <Admin /> } />
      </Routes>

      <Toaster />
    </BrowserRouter>
  )
}

export default App;