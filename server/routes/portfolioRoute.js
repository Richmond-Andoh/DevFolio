import express from "express";
import { getPortfolioData } from "../controllers/getPortfolioData.js";
import updateIntro from "../controllers/updateIntro.js";
import updateAbout from "../controllers/updateAbout.js";
import { addExperience } from "../controllers/experience.js";

const portfolioRouter = express.Router();
// Get all portfolio data route
portfolioRouter.route("/portfolio-data").get(getPortfolioData);

//Update portfolio intro data route

portfolioRouter.route("/update-intro").post(updateIntro);

//update portfolio about data route
portfolioRouter.route("/update-about").post(updateAbout);

// Add Experience Route
portfolioRouter.route("/add-experience").post(addExperience);

export default portfolioRouter;