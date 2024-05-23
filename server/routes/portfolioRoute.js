import express from "express";
import { getPortfolioData } from "../controllers/getPortfolioData.js";
import updateIntro from "../controllers/updateIntro.js";

const portfolioRouter = express.Router();
// Get all portfolio data route
portfolioRouter.route("/portfolio-data").get(getPortfolioData);

//Update portfolio intro data route
portfolioRouter.route("/update-intro").post(updateIntro);

export default portfolioRouter;