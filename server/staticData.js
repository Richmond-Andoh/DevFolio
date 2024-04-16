// Mock data based on the Mongoose schemas

// Intro data
const introData = {
    welcomeText: "Welcome to my portfolio!",
    firstName: "Richmond",
    lastName: "Andoh",
    caption: "Full-stack developer with a passion for learning.",
    description: "Experienced in developing web applications using the MERN stack. Passionate about coding, problem-solving, and building innovative solutions."
};

// About data
const aboutData = {
    lottieUrl: "https://example.com/lottie/animation.json",
    description1: "I am a dedicated developer with a keen eye for detail.",
    description2: "I enjoy working on challenging projects that allow me to grow my skills.",
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
};

// Experience data
const experienceData = [
    {
        title: "Full-stack Developer",
        period: "2022 - Present",
        company: "Tech Innovators",
        description: "Developed and maintained full-stack web applications using the MERN stack."
    },
    {
        title: "Frontend Developer",
        period: "2020 - 2022",
        company: "Web Solutions Co.",
        description: "Designed and implemented responsive user interfaces using React and CSS frameworks."
    }
];

// Project data
const projectData = [
    {
        title: "Project Management App",
        description: "A web application for managing projects and tasks effectively.",
        projectImage: "https://example.com/images/project-management-app.gif",
        projectUrl: "https://example.com/projects/project-management-app",
        teckStack: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "E-commerce Website",
        description: "A complete e-commerce platform for buying and selling products.",
        projectImage: "https://example.com/images/e-commerce-website.gif",
        projectUrl: "https://example.com/projects/e-commerce-website",
        teckStack: ["React", "Redux", "MongoDB"]
    }
];

// Education data
const educationData = [
    {
        name: "University of Technology",
        program: "BSc Computer Science",
        period: "2016 - 2020"
    },
    {
        name: "Code Academy",
        program: "Full-stack Development Bootcamp",
        period: "2021"
    }
];

// Contact data
const contactData = {
    name: "Richmond Andoh",
    age: "30",
    gender: "Male",
    email: "richmondandoh00@gmail.com",
    mobile: "+233 557 010 890",
    country: "Ghana"
};

export {
    introData,
    aboutData,
    experienceData,
    projectData,
    educationData,
    contactData
};
