import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongo DB Connected...");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

export default connection;
