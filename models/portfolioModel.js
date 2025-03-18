const mongoose = require("mongoose");

const intoSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieUrl: {
    type: String,
    require: true,
  },
  description1: {
    type: String,
    require: true,
  },
  description2: {
    type: String,
    require: true,
  },
  skills: {
    type: Array,
    require: true,
  },
});

const experienceSchema = new mongoose.Schema({
    title: {
      type: String,
      require: true,
    },
    period: {
      type: String,
      require: true,
    },
    company: {
      type: String,
      require: true,
    },
    description: {
      type: Array,
      require: true,
    },
  });

  const projectSchema = new mongoose.Schema({
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    link: {
      type: string,
      require: true,
    },
    technologies: {
        type: Array,
        require: true,
      },
  });

  const courseSchema = new mongoose.Schema({
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  });


  