import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Feel free to reach out to me via email or check out my GitHub!
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700 text-center">
        <p className="text-white text-lg mb-4">
          Email:{" "}
          <a
            href="mailto:anilsahu350@gmail.com"
            className="text-purple-500 underline"
          >
            anilsahu350@gmail.com
          </a>
        </p>
        <p className="text-white text-lg mb-4">
          GitHub:{" "}
          <a
            href="https://github.com/anilsahu350"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
            github.com/anilsahu350
          </a>
        </p>
        <p className="text-white text-lg">
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
            linkedin.com/in/your-linkedin-profile
          </a>
          {/* Replace above URL when your LinkedIn is ready */}
        </p>
      </div>
    </section>
  );
};

export default Contact;
