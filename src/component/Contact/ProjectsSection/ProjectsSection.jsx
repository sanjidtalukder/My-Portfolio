import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HobbyHub from "./HobbyHub";
import EnglishJanala from "./EnglishJanala";

const imageUrls = [
  "https://i.ibb.co/LzR2MDVQ/Screenshot-2025-06-28-095436.png",
  "https://i.ibb.co/5hVPBWfw/Screenshot-2025-06-28-095137.png",
  "https://i.ibb.co/VWSg5HLJ/Screenshot-2025-06-28-095153.png",
  "https://i.ibb.co/NnpNp7Xs/Screenshot-2025-06-28-095206.png",
  "https://i.ibb.co/WWMkR9cR/Screenshot-2025-06-28-095316.png",
  "https://i.ibb.co/wZ8YYdBW/Screenshot-2025-06-28-100202.png",
  "https://i.ibb.co/PZxvFw1y/Screenshot-2025-06-28-095405.png",
  "https://i.ibb.co/RkptFDk8/Screenshot-2025-06-28-095419.png",
  "https://i.ibb.co/KzWjjdVD/Screenshot-2025-06-28-095335.png",
  "https://i.ibb.co/kVyXzrNK/Screenshot-2025-06-28-095329.png",
];

const project = {
  name: "My Event Explorer",
  techStack: "React, Tailwind CSS, Firebase",
  description:
    "A responsive event management web app where users can browse, book, and manage events with real-time updates and secure authentication.",
  liveLink: "https://gilded-cocada-e311bd.netlify.app/",
  githubLink: "https://github.com/sanjidtalukder/my-Event-Explorer",
  challenges:
    "Implementing real-time synchronization across users and optimizing performance on mobile devices.",
  improvements: "Adding offline accessibility and integrating personalized calendar event reminders.",
};

const ProjectsSection = () => {
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
    <>
      <HobbyHub />
      <br />
      <section className="py-12 px-4 rounded-2xl shadow-2xl md:px-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left: Animated Carousel */}
          <div
            className="lg:w-1/2 relative h-[450px] rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-black group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              onClick={goToPrev}
 className="absolute left-3 z-20 bg-white/20 hover:bg-primary text-white p-2 rounded-full hidden group-hover:block"            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
            className="absolute right-3 z-20 bg-white/20 hover:bg-primary text-white p-2 rounded-full hidden group-hover:block"
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

          {/* Right: Project Details */}
          <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col justify-center overflow-y-auto max-h-[450px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <div>
            <h2 className="text-2xl font-bold  mb-2">{project.name}</h2>
            <p className="mb-2">
              <span className="font-semibold">Tech Stack:</span> {project.techStack}
            </p>
            <p className="mb-4 text-sm leading-relaxed">{project.description}</p>
 <div className="space-x-4 mb-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Site
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>
          </div>
            <div>
              <h4 className="font-semibold mb-1">Challenges Faced</h4>
              <p className="mb-4 text-sm">{project.challenges}</p>

              <h4 className="font-semibold mb-1">Future Plans & Improvements</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2 text-sm">
                <li>Offline support for event access</li>
                <li>Personalized calendar sync with reminders</li>
                <li>Advanced filtering by category, date & location</li>
                <li>Booking feedback, edit, and cancellation options</li>
                <li>Real-time tracking of seat availability</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
      <br />
      <EnglishJanala />
    </>
  );
};

export default ProjectsSection;
