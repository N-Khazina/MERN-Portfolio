import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
  const skills = [
    "Javascript",
    "React",
    "Node js",
    "Express",
    "MongoDB",
  ]
  return (
    <div>
      <SectionTitle title="About" />

      <div className="flex items-center sm:flex-col ">
        <div className="h-[50vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/862f45f3-5a69-4222-bedb-6753c42e6e1c/XUDNjyp7Py.lottie"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      <div className="flex flex-col w-1/2 gap-5 sm:w-full">
        <p className="text-white">
        I’m Tresor Nyiringoma Habimana, a passionate and driven Software Engineer based in Kigali, Rwanda. With a deep commitment to innovation and technology, I’m currently pursuing my Bachelor's in Software Engineering at the University of Rwanda, expecting to graduate in June 2025. I’ve always been fascinated by the intersection of technology and problem-solving, which fuels my dedication to creating impactful solutions through software development.
        </p>
        <p className="text-white">
        I bring a diverse set of technical skills to the table, including proficiency in programming languages such as C, C++, Java, JavaScript, PHP, and Python. My experience extends to working with a variety of databases including SQLite, MySQL, and MongoDB, and I’ve had the opportunity to hone my skills in both backend development and web technologies like HTML, CSS, and React.js.
        </p>
        <p className="text-white">
        In addition to my technical expertise, I’ve worked as a freelance Backend Developer at Sourcify, where I was able to apply my knowledge to real-world projects, creating robust systems and seamless integrations. I am also honored to serve as a Mentor at ALX Africa, where I guide and support fellow developers through their learning journeys, fostering a collaborative and growth-oriented environment.
        </p>
        <p className="text-white">
        Outside of my technical experience, I believe in the power of collaboration and teamwork, and I strive to bring those values to every project I undertake. Whether I’m solving complex problems or managing time-sensitive tasks, I approach each challenge with a solution-oriented mindset and a commitment to delivering high-quality results.I’m always eager to connect with like-minded professionals and work on projects that push the boundaries of what’s possible. If you’re looking for a passionate and skilled software engineer to collaborate with, feel free to reach out.
        </p>
      </div>
      </div>
      <div className="py-5">
        <h1 className="text-xl text-tertiary">
          Tools and technologies that i've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
         {skills.map((skill, index) => (
          <div className="px-10 py-3 border rounded border-tertiary">
            <h1 className="text-tertiary">{skill}</h1>
          </div>
         ))}
         </div>
      </div>
    </div>
  );
}

export default About
