import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-16 px-4 rounded-2xl shadow-2xl md:px-8 lg:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* About Me */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            I am <span className="font-semibold text-blue-600 dark:text-blue-400">Sanjid Talukder</span>, a passionate Junior Web Developer based in Dhaka.
            Currently studying Computer Science & Engineering at Dhaka International University.
            I love solving problems with code and building user-friendly websites using technologies like React, Tailwind, Firebase, and MongoDB.
          </p>
        </div>

        

      </div>
    </section>
  );
};

export default AboutMe;
