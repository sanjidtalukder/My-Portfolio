import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Hero from '../../component/Hero/Hero';
import AboutMe from '../../component/AboutMe/AboutMe';
import Skills from '../../component/Skills/Skills';
import Education from '../../component/Education/Education';
import Contact from '../../component/Contact/Contact';
import Experience from '../../component/Experience/Experience';
import ProjectsSection from '../../component/Contact/ProjectsSection/ProjectsSection';

const Home = () => {
    return (
        <>
       <div className="min-h-screen bg-base-100 ">
            <Navbar />
                <main className="px-4 md:px-8 lg:px-16 pt-6">
                    <Hero /><br></br>
                    <AboutMe></AboutMe><br></br>
                    <Skills></Skills><br></br>
                    <Education></Education><br></br>
                    <Experience></Experience><br></br>
                    <ProjectsSection></ProjectsSection><br></br>
                    <Contact></Contact><br></br>
    
                </main>
        </div>

       
        </>
        
    );
};

export default Home;