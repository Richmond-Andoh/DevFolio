import mongoose from "mongoose";

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true
    },

    firstName: {
        type: String,
        require: true
    },

    caption: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    }
});