import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-base-50 dark:bg-gray-900 px-4 md:px-10 py-16 rounded-2xl shadow-2xl">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight">
            Hi, I'm <span className="text-primary">Sanjid Talukder</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-xl">
            A passionate <span className="font-semibold text-primary">Full Stack Web Developer</span> skilled in React, Node.js, MongoDB, and Tailwind CSS. I enjoy creating interactive and user-friendly web applications that make a difference.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-start gap-4">
            <a
              href="/Sanjid_Talukder_CV.pdf"
              className="btn btn-primary px-6"
              download
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="btn btn-outline btn-secondary px-6"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src="https://i.ibb.co/NgT6QfKg/image-1-1.png"
            alt="Portrait of Sanjid Talukder"
            className="w-72 md:w-96 rounded-2xl shadow-xl border-4 border-primary hover:shadow-cyan-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
