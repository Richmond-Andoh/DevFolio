import mongoose, { model } from "mongoose";

const contactSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mobile: {
        type: Number,
        required: true
    },

    country: {
        type: String,
        required: true
    }
});


const Contact = mongoose.model("Contact", contactSchema);

export default Contact;