import express from "express";
import { getPortfolioData } from "../controllers/getPortfolioData.js";

const portfolioRouter = express.Router();

portfolioRouter.route("/portfolio-data").get(getPortfolioData)

export default portfolioRouter;