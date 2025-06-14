import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen bg-[#0d081f] text-white text-center px-4"
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl text-gray-400">
          I'm <span className="text-purple-500">Anil Sahu</span> — DevOps Enthusiast & Cloud Learner
        </p>
      </div>
    </section>
  );
};

export default Home;
