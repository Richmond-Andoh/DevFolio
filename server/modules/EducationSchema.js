import mongoose, { model } from "mongoose";

const educationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    program: {
        type: String,
        required: true
    },

    period: {
        type: String,
        required: true
    }
});

const Education = mongoose.model("Education", educationSchema);

export default Education;