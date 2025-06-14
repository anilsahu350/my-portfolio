import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "CI/CD Pipeline using Jenkins",
      description: "Automated deployment pipeline with GitHub, Jenkins, Docker, and AWS EC2.",
    },
    {
      title: "Kubernetes Monitoring with Prometheus & Grafana",
      description: "Deployed and visualized Kubernetes metrics using Prometheus and Grafana dashboards.",
    },
    {
      title: "Infrastructure as Code with Terraform",
      description: "Provisioned AWS resources via Terraform scripts for scalable infrastructure.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#0d081f] text-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A few of the real-world projects I’ve worked on:
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="border border-gray-700 p-6 rounded-lg bg-[#15102a] shadow-md hover:shadow-purple-500/30 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
