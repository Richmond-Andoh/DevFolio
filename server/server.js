import express from "express";
import dotenv from "dotenv";
import connection from "./dbconnection/dbConnection.js";
import portfolioRouter from "./routes/portfolioRoute.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT ||  3001;

// middleware
app.use(express.json());

app.use("/api/portfolio", portfolioRouter);
app.get( "/", (req, res) => {
    res.send("Welcome to the main Application")
})

const startServer = () => {
    connection();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

startServer();