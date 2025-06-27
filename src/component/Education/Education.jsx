import React from 'react';

const Education = () => {
  return (
    <section className="py-10 px-4 md:px-8 rounded-2xl shadow-2xl lg:px-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Education
      </h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md text-center space-y-2">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          BSc in Computer Science & Engineering
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Dhaka International University
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-medium">Current Year:</span> 2nd Year
        </p>
      </div>
    </section>
  );
};

export default Education;
