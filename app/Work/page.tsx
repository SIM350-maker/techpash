"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
//import "swiper/css";
//import "swiper/css/navigation";

import { SiFramer, SiTailwindcss } from "react-icons/si";
import { FaReact, FaBootstrap, FaFigma, FaJsSquare } from "react-icons/fa";
import Link from "next/link";



export default function ProjectSlider() {
    const projects = [
        {
            id: "01",
            title: "React",
            desc: "A foundational project demonstrating core React concepts including components, props, state, and hooks.",
            tech: ["React JS", "Tailwind css", "Javascript" ],
            img: "/project-1.jpg",
        },
        {
            id: "02",
            title: "Travels Project",
            desc: "A responsive travel booking interface with dynamic filtering, animated transitions, and clean UI design.",
            tech: ["Figma", "Tailwind css", "React.js"],
            img: "/project-2.jpg",
        },
        {
            id: "03",
            title: "Portfolio Project",
            desc: "A personal portfolio showcasing projects, skills, and contact form with smooth animations and responsive layout.",
            tech: ["Bootstrap css", "Motion", "React.js"],
            img: "/project-3.jpg"
        },
        {
            id: "04",
            title: "Business Portfolio",
            desc: "A sleek business showcase site with animated sections, service highlights, and modern branding.",
            tech: ["Tailwind css", "Motion", "React.Js"],
            img: "/project-4.jpg"
        },
    ]
  return (
    <div className="px-[8%] lg:px-[16%] py-15 text-white">
        <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next"
        }}
        spaceBetween={40}
        slidesPerView={1}
        >
            {projects.map((project) => (
                <SwiperSlide key={project.id}>
                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Left Side */}
                        <div className="work-content">
                            <h2 className="text-8xl font-bold stroke-text ">{project.id}</h2>
                            <h3 className="text-5xl font-semibold font-unbounded mt-4" >{project.title}</h3>
                            <p className="text-gray-400 mt-3 text-lg leading-relaxed">{project.desc}</p>

                            {/* Tech icons*/}
                            <div className="flex gap-4 mt-4">
                                {project.tech.map((tech, index) =>{
                                    let IconComponent;
                                    switch (tech.toLocaleLowerCase()){
                                        case "react js":
                                        case "react js":
                                            IconComponent = FaReact;
                                            break;
                                        case "tailwind css":
                                            IconComponent = SiTailwindcss;
                                            break;
                                        case "javascript":
                                            IconComponent = FaJsSquare;
                                            break;
                                        case "bootstrap css":
                                            IconComponent = FaBootstrap;
                                            break;
                                        case "figma":
                                            IconComponent = FaFigma;
                                            break;
                                        case "motion":
                                            IconComponent = SiFramer;
                                            break;
                                        default:
                                            IconComponent = null;
                                    }
                                    return IconComponent ? (
                                        <div key={index} className="work-icons text-4xl text-[color:var(--primary-color)] cursor-pointer hover:text-white
                                        transition-all duration-300" title={tech}>
                                            <IconComponent/>
                                        </div>
                                    ) : null;
                                })}
                            </div>     

                            {/*  Icons */}                       
                            <div className="work-share flex gap-4 mt-6 border-t border-gray-500 pt-5">
                                <Link
                                    href="#"
                                    className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white
                                    transition-all duration-500"
                                    >
                                        <i className="bi bi-arrow-up-right text-2xl"></i>
                                </Link>
                                <Link
                                    href="#"
                                    className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:text-black hover:bg-white
                                    transition-all duration-500"
                                    >
                                        <i className="bi bi-github text-2xl"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="relative work-image">
                            <Image
                                    src={project.img}
                                    alt={project.title}
                                    width={650}
                                    height={300}
                                    className="rounded-lg shadow-lg"
                                />                            
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            
            {/* Custom Navigation button */}
            <div className="flex gap-3 justify-end mt-6">
                <button className="custom-prev w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)]
                text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500"
                 aria-label="Previous slide"
                >

                    <i className="bi bi-arrow-left text-2xl"></i>
                </button>
                <button className="custom-next w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)]
                text-white rounded shadow hover:bg-white hover:text-black cursor-pointer transition-all duration-500"
                aria-label="Next slide"
                >

                    <i className="bi bi-arrow-right text-2xl"></i>
                </button>
            </div>
        </Swiper>
    </div>
  );
}
