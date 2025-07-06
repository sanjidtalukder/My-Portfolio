import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageUrls = [
  "https://i.ibb.co/5Jmk7T5/Screenshot-2025-06-28-225822.png",
  "https://i.ibb.co/FbZr3HkJ/Screenshot-2025-06-28-225842.png",
  "https://i.ibb.co/hxpvRM1q/Screenshot-2025-06-28-225901.png",
  "https://i.ibb.co/9z1mzLJ/Screenshot-2025-06-28-225926.png",
  "https://i.ibb.co/nN52rKxF/Screenshot-2025-06-28-225935.png",
  "https://i.ibb.co/4R6CxVc9/Screenshot-2025-06-28-225950.png",
  "https://i.ibb.co/d4M4rVdJ/Screenshot-2025-06-28-230009.png",
  "https://i.ibb.co/76WZ3N3/Screenshot-2025-06-28-230017.png",
  "https://i.ibb.co/KpRh8NTm/Screenshot-2025-06-28-232255.png",
  "https://i.ibb.co/4nfnMF24/Screenshot-2025-06-28-232304.png",
  "https://i.ibb.co/VYXd3TDj/Screenshot-2025-06-28-230026.png",
  "https://i.ibb.co/dw36CpDL/Screenshot-2025-06-28-230053.png",
  "https://i.ibb.co/QvbX0yh7/Screenshot-2025-06-28-230115.png",
  "https://i.ibb.co/F280QT7/Screenshot-2025-06-28-230122.png",
  "https://i.ibb.co/JWMnHWhR/Screenshot-2025-06-28-230133.png",
  "https://i.ibb.co/S40kWZG9/Screenshot-2025-06-28-230208.png"
];

const project = {
  name: "HobbyHub - Local Hobby Group Organizer",
  techStack:
    "React.js, Node.js, Express.js, MongoDB, Firebase Auth, Tailwind CSS, DaisyUI",
  description:
    "HobbyHub is a full-stack web application where users can explore, join, or create local hobby groups based on categories. It includes real-time filtering, group approval system, user authentication, and booking management with role-based dashboard access.",
  liveLink: "https://hobbyhub-2cd93.web.app/",
  githubLink_Client: "https://github.com/sanjidtalukder/Hubby-Hub-Client",
  githubLink_Server: "https://github.com/sanjidtalukder/HobbyHub-server",
  challenges:
    "Creating dynamic dashboards for users and admins, managing booking states in real-time, and integrating Firebase Auth with MongoDB securely.",
  improvements:
    "Plan to integrate calendar reminders, push notifications, and offline group management support."
};

const HobbyHub = () => {
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

export default HobbyHub;