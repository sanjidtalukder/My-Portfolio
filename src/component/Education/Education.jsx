import React from 'react';

const Education = () => {
  return (
    <section className="py-16 px-4 md:px-8 rounded-2xl shadow-2xl lg:px-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Education
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto">

        {/* University */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center space-y-2">
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Institution:</span> Dhaka International University
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Duration:</span> 2022 – Present
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Current Year:</span> 2nd Year (Ongoing)
          </p>
        </div>

        {/* HSC */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center space-y-2">
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Higher Secondary Certificate (HSC)
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Institution:</span> Hajiganj Model Government College
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Group:</span> Science
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-medium">Passing Year:</span> 2022
          </p>
        </div>

        {/* SSC */}
       

      </div>
    </section>
  );
};

export default Education;
