const router = require('express').Router();
const {Intro, About , Project, Contact, Experience, Course} = require('../models/portfolioModel');


router.get("/get-portfolio-data" , async(req,res)=> {
    try {
        const intros = await Intro.find();
        const about = await About.find();
        const projects = await Project.find();
        const contacts = await Contact.find();
        const experiences = await Experience.find();
        const courses = await Course.find();

        res.status(200).send({
            intro : intros[0],
            about : about[0],
            experiences : experiences,
            projects : projects,
            contact : contacts[0],
            courses : courses,

    })
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;