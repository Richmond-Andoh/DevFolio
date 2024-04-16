import { Intro, Education, Experience, Project, Contact, About } from "../modules/portfolio"

export const getPortfolioData = async (req, res) => {
  try {
    const intro = await Intro.findOne();
    const about = await About.findOne();
    const experiences = await Experience.find().sort({ order: -1 });
    const projects = await Project.find().sort({ order: -1 });
    const education = await Education.find().sort("year", "desc");
    const contact = await Contact.findOne();

    if (
      !intro ||
      !about ||
      !experiences ||
      !projects ||
      !education ||
      !contact
    ) {
      return res.status(400).json("Error while fetching portfolio data");
    }

    return res
      .status(200)
      .json({ intro, about, experiences, projects, education, contact });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server error");
  }
};
