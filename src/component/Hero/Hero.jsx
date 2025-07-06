import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-base-50 dark:bg-gray-900 px-4 md:px-10 py-16 rounded-2xl shadow-2xl">
     <div>
      
     </div>
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-around gap-10">
        
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
              href="https://drive.google.com/file/d/1IMif9wSFAzBMQBHe20R3dA-Kv0BKIL5t/view?usp=sharing"
              className="btn btn-primary px-6"
              download
            >
              Download Resume
            </a>
            <a
              href="/contact"
              className="btn btn-outline btn-secondary px-6"
            >
              Contact Me
            </a>
            <div className="flex justify-start lg:justify-start gap-3 mt-0 text-2xl">
            <a
              href="https://github.com/sanjidtalukder"
              target="_blank"
           
              className="btn btn-outline btn-primary px-6"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-sanjid-talukder-08b681320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              
              className="btn btn-outline btn-primary px-6"
            >
              <FaLinkedin />
            </a>
          </div>
          </div>

          {/* Social Links */}
          {/* <div className="flex justify-center lg:justify-start gap-6 mt-4 text-2xl">
            <a
              href="https://github.com/sanjidtalukder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-primary"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjidtalukder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-primary"
            >
              <FaLinkedin />
            </a>
          </div> */}
        </div>

        {/* Right: Image */}
        <div className="items-center">
          <img
            src="https://i.ibb.co/NgT6QfKg/image-1-1.png"
            alt="Portrait of Sanjid Talukder"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-xl border-4 border-primary hover:shadow-cyan-50 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
