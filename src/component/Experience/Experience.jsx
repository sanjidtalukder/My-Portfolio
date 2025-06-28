import React from 'react';

const Experience = () => {
  return (
    <section className="py-16 px-4 md:px-8 rounded-2xl shadow-2xl lg:px-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Experience
      </h2>

      <div className="space-y-6">

         {/* NASA Project */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Team Leader – NASA Space Apps Challenge 2024</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Led a team to build and present an innovative project as part of the NASA Space Apps Challenge 2024.
            My responsibilities included planning, task distribution, and guiding the development process.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">April 2024</p>
        </div>

        {/* University Projects */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Team Leader – University Projects</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Led two major team projects during university:
            <ul className="list-disc list-inside mt-2">
              <li>Cricket Scoreboard Application</li>
              <li>Time Management System</li>
            </ul>
            Responsibilities included coordinating the team, planning the workflow, and ensuring timely delivery.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">2023 - 2024</p>
        </div>

        {/* Teaching Experience */}
        {/* <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Private Tutor</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Taught students from Class 1 to 10 in various subjects, helping them improve academically.
            This experience strengthened my communication skills, patience, and ability to explain complex topics clearly.
          </p> */}
          {/* <p className="text-sm text-gray-500 dark:text-gray-400">2018 - Present</p> */}
        {/* </div> */}

       

      </div>
    </section>
  );
};

export default Experience;
