"use client"

import { useState } from "react"
import { FaBootstrap, FaJs, FaNode, FaReact } from "react-icons/fa";
import { SiCss3, SiHtml5, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Resume() {
    const[activeTab, setActiveTab] = useState("Experience");

    const tabs = ["Experience", "Education", "Skills", "About me"];

    //Experience
    const experiences = [
        {
            date:"2025",
            role:"Fullstack developer",
            company:"Chuka university",
        },
        {
            date:"2025",
            role:"Mobile Telemedicine developer",
            company:"Intersoft company",
        },
        {
            date:"2024-2025",
            role:"Backend developer",
            company:"Chuka university",
        },
        {
            date:"2023-2024",
            role:"Fullstack developer",
            company:"Chuka university",
        },
        {
            date:"2022-2023",
            role:"Frontend developer",
            company:"Chuka university",
        },
        {
            date:"2022-2023",
            role:"Associate degree in applied Computer Science",
            company:"Chuka university",
        },
     ];

     // Education
     const educations = [        
            {year: "2022 - 2026", degree: "B.Sc. Applied Computer Science", institute:"Chuka University" },
            {year: "2018 - 2021", degree: "High School", institute:"Njoro Boy's High school" },
     ];

     // Skills
     const Skills = [
        { name: "HTML", icon: <SiHtml5/> },
        { name: "CSS", icon: <SiCss3/> },
        { name: "Javascript", icon: <FaJs/> },
        { name: "React", icon: <FaReact/> },
        { name: "Bootstrap", icon: <FaBootstrap/>},
        { name: "Next.js", icon: <SiNextdotjs/> },
        { name: "Tailwind Css", icon: <SiTailwindcss/> }, 
        { name: "Node.js", icon: <FaNode/>},
     ];
  return (
    <section className="px-[8%] lg:px-[16%] py-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Left Sidebar */}
            <div>
                <h2 className="text-4xl font-unbounded font-bold mb-4">
                    Why hire me?
                </h2>
                <p className="text-gray-400 mt-10 mb-10">
                    Iam a web developer skilled in Next.js, Tailwind CSS, and form validation. I build clean, responsive interfaces and solve problems with clarity, speed, and care.
                </p>
                <div className="flex flex-col gap">
                    {tabs.map((tab => (
                        <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-4 text-left rounded-md font-semibold transition-all cursor-pointer
                            ${activeTab === tab ? "bg-[var(--primary-color)] text-white" 
                            : "bg-gray-500/5 text-gray-400 hover:bg-gray-500/20 hover:text-white"
                            }`}
                        >
                        {tab}
                        </button>
                    )))}
                </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-2">
                <h2 className="text-4xl font-unbounded font-bold mb-4">
                    {activeTab}
                </h2>
                <p className="text-gray-400 mb-10">
                    I build responsive web apps using Next.js, Tailwind CSS, and Zod. I’ve designed academic systems, refined UI layouts, and solved deployment issues with clarity and care.
                </p>

                {/* Experience */}
                {activeTab ===  "Experience" && (
                    <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index} 
                                    className="bg-gray-500/5 hover:bg-gray-500.10
                                    border border-gray-800 rounded-lg px-5 py-10
                                    hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                                >
                                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">                                
                                        {exp.date}
                                    </h3>
                                    <h4 className="text-3xl font-normal font-unbounded mb-1">{exp.role}</h4>
                                    <p className="text-gray-400 flex items-center text-sm mt-2">
                                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">*</span>{exp.company}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {/* Education */}
                {activeTab === "Education" && (
                    <div className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {educations.map((edu, index) => (
                                <div
                                    key={index} 
                                    className="bg-gray-500/5 hover:bg-gray-500.10
                                    border border-gray-800 rounded-lg px-5 py-10
                                    hover:border-[var(--primary-color)] transition-all duration-500 cursor-pointer"
                                >
                                    <h3 className="text-[color:var(--primary-color)] font-semibold my-2">                                
                                        {edu.year}
                                    </h3>
                                    <h4 className="text-3xl font-normal font-unbounded mb-1">{edu.degree}</h4>
                                    <p className="text-gray-400 flex items-center text-sm mt-2">
                                        <span className="text-[color:var(--primary-color)] text-2xl pe-2">*</span>{edu.institute}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            {/* Skills */}
            {activeTab === "Skills" && (
                <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200 mt-4">
                    {Skills.map((skill, index) => (
                        <li key={index} className="relative cursor-pointer bg-gray-500/5 rounded
                        py-11 flex flex-col items-center group">
                            <i className="text-6xl group-hover:text-[color:var(--primary-color)]
                            transition-all duration-500">
                                {skill.icon}
                            </i>
                            {/* Tooltip */}
                            <span className="absolute bottom-[5px] scale-0 rounded bg-gray-800 px-2 py-1 font-semibold text-1xl text-white
                            transition-all duration-300 group-hover:scale-100 group-hover:text-[color:var(--primary-color)]">
                                {skill.name}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
            {/* About */}
            {activeTab === "About me" && (
                <div className="text-gray-400 space-y-4">
                    <p>
                        Hi! Iam <span className="text-[color:var(--primary-color)] "> Simon Ipara </span>
                         passionate and hardworking full-stack Developer who enjoys crafting modern web applications and sleek, user-friendly interfaces.
                    </p>
                    <ul className="space-y-2">
                        <li><strong>Experience:</strong> 2+ years in web Development</li>
                        <li><strong>Nationality:</strong> Kenyan</li>
                        <li><strong>Freelance:</strong> Available for projects</li>
                        <li><strong>Phone:</strong> (+254) 7912 67 482</li>
                        <li><strong>Email:</strong> simonipash@gmail.com</li>
                        <li><strong>Language:</strong> English, Kiswahili</li>
                    </ul>
                    <p>
                        I Specialize in React, Next.js, Node.js, and Tailwind CSS. I love turning ideas into functional, elegant web solutions that users enjoy.
                    </p>
                </div>
            )}
        
         </div>
        </div>
    </section>
  )
}
