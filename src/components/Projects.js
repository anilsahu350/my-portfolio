import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "DevSecOps Banking Application on AWS",
      description:
        "Deployed a secure multi-tier banking app using Docker and Kubernetes on AWS EKS. Integrated CI/CD with Jenkins, performed security scanning using OWASP ZAP and Trivy, and used Terraform for infrastructure as code.",
      link: "https://github.com/anilsahu350/DevOps-mega-project/tree/feature/devsecops",
    },
    {
      title: "Multi-Environment IaC Deployment",
      description:
        "Built reusable Terraform modules to provision infrastructure for multiple environments (dev, staging, prod). Added Terratest automation to validate deployments and catch config issues early.",
      link: "https://github.com/anilsahu350/Multi-env-lac-project",
    },
    {
      title: "DevSecOps Project – Zomato Clone Deployment",
      description:
        "Deployed Zomato clone using DevSecOps principles integrating CI/CD pipelines, container orchestration, and security scanning.",
      link: "https://github.com/anilsahu350/DevOps-Project-Zomato/tree/dev",
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8245ec] font-medium mt-2 inline-block hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
