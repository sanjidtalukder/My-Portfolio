import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-16 px-4 rounded-2xl shadow-2xl md:px-8 lg:px-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* About Me */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
            Hello! I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Sanjid Talukder</span>, a dedicated and curious Junior Web Developer from Dhaka, Bangladesh.
            My programming journey began with a deep interest in how websites work — and that curiosity turned into a passion.
            I’m currently pursuing my B.Sc. in Computer Science & Engineering at Dhaka International University.
            <br /><br />
            I enjoy creating interactive and user-friendly web applications using tools like <span className="font-medium">React, Tailwind CSS, Firebase, and MongoDB</span>.
            I love tackling new challenges, especially those that require logical thinking and clean UI/UX.
            Building real-world projects and continuously learning new technologies keeps me motivated every day.
            <br /><br />
            Outside of coding, I’m someone who loves to stay active and enjoy life! I have a passion for <span className="font-medium">gardening</span> — nurturing plants brings me peace and joy.
            I also love to play <span className="font-medium">cricket</span> and <span className="font-medium">football</span> with friends, which keeps me energetic and refreshed.
            <br /><br />
            Overall, I believe in growth, creativity, and making things that matter — both in code and in life.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
