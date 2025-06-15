import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../assets/Anil_photo.jpeg';

const About = () => {
  const [text] = useTypewriter({
    words: ['DevOps Enthusiast', 'Cloud Learner'],
    loop: 0, // Infinite loop
    delaySpeed: 2000,
  });

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Anil Sahu
          </h2>
          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#8245ec" />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mt-8 leading-relaxed">
            I’m a DevOps Engineer with 1+ year of hands-on experience in building and managing automation pipelines, containerized environments, and cloud-based infrastructure. 
            I’ve worked on real-world projects involving Linux, Git, GitHub, Python, Docker, Kubernetes, Jenkins, GitLab, Ansible, Terraform, Prometheus, Grafana, and AWS basics. 
            Passionate about automation and cloud technology, I’m eager to join a dynamic team where I can grow and 
            contribute as a DevOps professional.
          </p>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Anil Sahu"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
