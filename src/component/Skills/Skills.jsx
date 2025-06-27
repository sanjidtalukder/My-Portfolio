import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiJavascript, SiFirebase, SiExpress } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
     { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white dark:text-gray-200" /> },
  ];

  return (
    <div className="py-10 bg-base-100 dark:bg-gray-900 rounded-2xl shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:scale-105 transition transform duration-300">
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-md font-medium text-gray-700 dark:text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
