import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageUrls = [
  "https://i.ibb.co/BVrHKJcn/Screenshot-2025-06-29-161641.png",
  "https://i.ibb.co/Z695Fm9q/Screenshot-2025-06-29-161633.png",
  "https://i.ibb.co/ZR1JgkVR/Screenshot-2025-06-29-161556.png",
  "https://i.ibb.co/svgmsrmf/Screenshot-2025-06-29-161537.png",
  "https://i.ibb.co/fzD5BW0s/Screenshot-2025-06-29-161526.png",
  "https://i.ibb.co/QvX1FT8g/Screenshot-2025-06-29-161516.png",
  "https://i.ibb.co/NgF9vXd5/Screenshot-2025-06-29-161506.png",
  "https://i.ibb.co/tp7yfkMN/Screenshot-2025-06-29-161455.png",
  "https://i.ibb.co/C3pFqG8Y/Screenshot-2025-06-29-161430.png"
];

const project = {
  name: "English Janala",
  techStack: "HTML5, Tailwind CSS, DaisyUI, JavaScript, SweetAlert2",
  description:
    "English Janala is a beginner-friendly vocabulary learning platform that helps users learn English words through categorized lessons. It features a clean animated UI, simple login system, and interactive word details with pronunciation, meaning, and synonyms for better retention. Users can easily navigate lesson-wise vocabulary, and view each word's meaning, usage, and synonyms in a smooth popup viewer. Designed with mobile-first approach, this app ensures seamless experience for learners of all ages.",
  liveLink: "https://sanjidtalukder.github.io/English-Janala/",
  githubLink: "https://github.com/sanjidtalukder/English-Janala",
  challenges:
    "Creating an engaging yet simple interface for beginner users, ensuring smooth vocabulary loading from API, and maintaining mobile responsiveness across devices.",
};

const EnglishJanala = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 3500);
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
    <section className="py-12 px-4 rounded-2xl shadow-2xl md:px-8 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
       <h2 className="text-3xl font-bold mb-10 text-center">Featured Project</h2>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left: Image Carousel */}
        <div
          className="lg:w-1/2 h-[450px] relative rounded-xl overflow-hidden bg-black group flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={goToPrev}
            className="absolute left-3 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full hidden group-hover:block"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-3 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full hidden group-hover:block"
          >
            <ChevronRight size={24} />
          </button>

          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentImageIndex}
              src={imageUrls[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-contain absolute rounded-xl"
            />
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
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
                    : "bg-white/50 hover:bg-white"
                }` }
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 flex flex-col justify-between max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
          <div>
            <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
            <p className="mb-2">
              <span className="font-semibold">Tech Stack:</span>{" "}
              {project.techStack}
            </p>
            <p className="mb-4">
              {showMore
                ? project.description
                : project.description.slice(0, 180) + "..."}
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-primary underline ml-2"
              >
                {showMore ? "See Less" : "See More"}
              </button>
            </p>

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
              <h4 className="font-semibold mb-1">Challenges Faced:</h4>
              <p className="mb-4 text-sm">{project.challenges}</p>

              <h4 className="font-semibold mb-1">
                Potential Improvements & Future Plans:
              </h4>
              <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                <li>Progress tracking for completed lessons</li>
                <li>Daily word goals with reminders</li>
                <li>Voice pronunciation support</li>
                <li>Bookmark favorite words</li>
                <li>Dark mode toggle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnglishJanala;
