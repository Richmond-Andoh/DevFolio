import mongoose from "mongoose";








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
})


const contactSchema = new  mongoos.Schema({
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

const Intro = mongoose.model('Intro', introSchema);
const About = mongoose.model('About', aboutSchema);
const Experience = mongoose.model('Experience', experienceSchema);
const Project = mongoose.model('Project', projectSchema);
const Education = mongoose.model('Education', educationSchema);
const Contact = mongoose.model('Contact', contactSchema);

export {
    Intro,
    About,
    Experience,
    Project,
    Education,
    Contact
};

