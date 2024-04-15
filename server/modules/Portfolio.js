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

const aboutSchema = new mongoose.Schema({
    lottieUrl: {
        type: String,
        required: true
    },

    description1: {
        type: String,
        required: true
    },

    description2: {
        type: String,
        required: true
    },

    skills: {
        type: Array,
        required: true
    }
});

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    period: {
        type: String,
        required: true
    },

    company: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
});


const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    projectImage: {
        type: String,
        required: true
    },

    projectUrl: {
        type: String,
        required: true
    },

    teckStack: {
        type: Array,
        required: true
    }
});

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

export default {
    Intro,
    About,
    Experience,
    Project,
    Education,
    Contact
};

