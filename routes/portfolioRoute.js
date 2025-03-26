const router = require("express").Router();
const { Intro, About, Project, Contact, Experience, Course } = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.findOne();
    const abouts = await About.findOne();
    const projects = await Project.find(); // Fetch all projects
    const contacts = await Contact.find(); // Fetch all contacts
    const experiences = await Experience.find(); // Fetch all experiences
    const courses = await Course.find(); // Fetch all courses

    console.log("Fetched Data:", { intros, abouts, projects, contacts, experiences, courses });

    res.status(200).json({
      intros: intros,
      abouts: abouts,
      experiences: experiences,
      projects: projects,
      contacts: contacts,
      courses: courses,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
