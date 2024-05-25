import Experience from "../modules/EducationSchema.js"


const addExperience = async(req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();

        res.status(200).send({
            message: "Experience added successfully",
            data: experience,
            success: true
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
} 