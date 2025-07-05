import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageUrls = [
"https://i.ibb.co/237nSDWM/Screenshot-2025-07-05-204428.png",
"https://i.ibb.co/0yvGd7bd/Screenshot-2025-07-05-204415.png",
"https://i.ibb.co/zVnXr4DV/Screenshot-2025-07-05-204405.png",
"https://i.ibb.co/tMw2h3dL/Screenshot-2025-07-05-204345.png",
"https://i.ibb.co/RT8KTL3m/Screenshot-2025-07-05-204339.png",
"https://i.ibb.co/zHjCYz5x/Screenshot-2025-07-05-204330.png",
"https://i.ibb.co/vCgdY99m/Screenshot-2025-07-05-204317.png",
"https://i.ibb.co/VYQwRGXK/Screenshot-2025-07-05-204304.png",
"https://i.ibb.co/vx7pp0JL/Screenshot-2025-07-05-204239.png",
"https://i.ibb.co/ds11P8Fq/Screenshot-2025-07-05-204226.png",
"https://i.ibb.co/HLVFYcS0/Screenshot-2025-07-05-204206.png",
"https://i.ibb.co/q8YtwVS/Screenshot-2025-07-05-204159.png",
"https://i.ibb.co/Kxd3QYWk/Screenshot-2025-07-05-204148.png",
"https://i.ibb.co/TxP8msmD/Screenshot-2025-07-05-204141.png",
"https://i.ibb.co/HTcG1cnW/Screenshot-2025-07-05-204130.png",
"https://i.ibb.co/CpLHy0L1/Screenshot-2025-07-05-204118.png",
];

const project = {
  name: "EduSphere – MERN Stack + Firebase + Framer Motion",
  techStack:
    "React.js, Node.js, Express.js, MongoDB, Firebase Auth, Tailwind CSS, DaisyUI",
  description:
    "EduSphere is a modern web platform designed to empower learners, educators, and writers through knowledge sharing. Built with React, Tailwind CSS, and Framer Motion, it offers a dynamic and responsive user experience.",
  liveLink: "https://my-edusphere-client.web.app//",
  githubLink_Client: "https://github.com/sanjidtalukder/EduSphere-Client",
  githubLink_Server: "https://github.com/sanjidtalukder/EduSphere-Server",
  challenges:
"Implementing secure and scalable role-based dashboards for both general users and admins.Handling real-time booking and reservation states with Firebase Authentication and syncing them with MongoDB.Ensuring smooth user experience across protected routes and preventing unauthorized access during dynamic routing.Integrating Framer Motion for animations without compromising performance in large components",
  improvements:
    "Future Plans & Improvements:Add offline group management support to allow users access and manage content without internet.Implement push notifications for real-time event reminders and group updates.Integrate Google Calendar sync for seamless scheduling and automated reminders.Expand the admin dashboard with in-depth analytics and user engagement metrics.Further enhance mobile-first UI/UX for optimal performance on smaller devices."
};

const EduSphere = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, currentImageIndex]);

  const goToNext = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageUrls.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Project</h2>
      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left: Carousel */}
        <div
          className="lg:w-1/2 h-[450px] relative rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-black group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={goToPrev}
            className="absolute left-2 z-20 bg-primary hover:bg-white/70 text-black dark:text-white p-2 rounded-full backdrop-blur-sm hidden group-hover:block"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 z-20 bg-primary hover:bg-white/70 text-black dark:text-white p-2 rounded-full backdrop-blur-sm hidden group-hover:block"
          >
            <ChevronRight size={24} />
          </button>

          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentImageIndex}
              src={imageUrls[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              initial={{ opacity: 0, scale: 0.98, x: direction * 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.02, x: direction * -100 }}
              transition={{ duration: 0.7 }}
              className="w-full h-full object-contain rounded-xl absolute"
              whileHover={{ scale: 1.05 }}
            />
          </AnimatePresence>

          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {imageUrls.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentImageIndex ? 1 : -1);
                  setCurrentImageIndex(idx);
                }}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === idx
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white"
                } transition`}
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:w-1/2 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
          <p className="text-sm mb-2">
            <span className="font-semibold">Tech Stack:</span> {project.techStack}
          </p>
          <p className="text-sm mb-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Live Site
            </a>
            <a
              href={project.githubLink_Client}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              GitHub (Client)
            </a>
            <a
              href={project.githubLink_Server}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline"
            >
              GitHub (Server)
            </a>
          </div>

          <h4 className="font-semibold mb-1">Challenges Faced:</h4>
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            {project.challenges}
          </p>

          <h4 className="font-semibold mb-1">Future Plans & Improvements:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1 mt-2">
            <li>Offline group management capabilities</li>
            <li>Push notifications for group events</li>
            <li>Google Calendar integration for reminders</li>
            <li>Improved admin analytics dashboard</li>
            <li>Mobile-first UI optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EduSphere;