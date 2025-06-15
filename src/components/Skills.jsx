import React from 'react';

const skills = [
  'Linux',
  'Git & GitHub',
  'Docker & Kubernetes',
  'Jenkins & CI/CD',
  'Ansible & Terraform',
  'Prometheus & Grafana',
  'AWS Basics',
  'Your New Skill',
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 sm:px-12 md:px-20 lg:px-40 bg-gray-900 min-h-screen"
    >
      <h2 className="text-5xl font-extrabold text-white mb-12 text-center">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-purple-800 bg-opacity-70 rounded-lg shadow-lg p-6 flex items-center justify-center text-white text-xl font-semibold hover:bg-purple-700 transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
