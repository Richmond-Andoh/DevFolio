import mongoose from "mongoose";













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

