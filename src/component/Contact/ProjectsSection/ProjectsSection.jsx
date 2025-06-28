import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Using lucide icons (optional)

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
    "A web-based event management platform where users can explore, book, and manage various events seamlessly with real-time updates and secure authentication.",
  liveLink: "https://gilded-cocada-e311bd.netlify.app/",
  githubLink: "https://github.com/sanjidtalukder/my-Event-Explorer",
  challenges:
    "Implementing real-time synchronization and optimizing performance for mobile devices.",
  improvements: "Add offline support and integrate calendar reminders.",
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
    <section className="py-16 rounded-2xl shadow-2xl px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">My Project</h2>

      <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
        {/* Left: Animated Carousel */}
        <div
          className="lg:w-1/2 relative  h-[350px] rounded-xl overflow-hidden shadow-lg flex items-center justify-center bg-black group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Arrows */}
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

          {/* Image animation */}
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

          {/* Dots */}
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
        <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
          <p className="mb-2">
            <span className="font-semibold">Technology Stack:</span>{" "}
            {project.techStack}
          </p>
          <p className="mb-4">{project.description}</p>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mb-3"
          >
            View Live Project
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mb-6"
          >
            GitHub Repository
          </a>

          <div>
            <h4 className="font-semibold mb-1">Challenges Faced:</h4>
            <p className="mb-4">{project.challenges}</p>

            <h4 className="font-semibold mb-1">
              Potential Improvements & Future Plans:
            </h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2">
              <li>JWT-based secure login and protected routes</li>
              <li>Event filtering by category and date</li>
              <li>Booking system with success feedback & cancellation option</li>
              <li>Dynamic charts showing user booking statistics</li>
              <li>Real-time seat availability display</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
