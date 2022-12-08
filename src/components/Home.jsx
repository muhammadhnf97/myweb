import React from "react";
import ProjectCard from "./ProjectCard";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Home(props){
    return (
        <div className="w-full h-fit bg-cover grid grid-cols-3 overflow-hidden gap-3">
            <div className="col-span-2 row-span-2 h-full justify-center bg-center bg-cover flex flex-col shadow-md duration-200 relative overflow-hidden">
                <div className="w-full h-full justify-center bg-center bg-cover duration-200 hover:transform hover:scale-105 absolute" style={{ backgroundImage : "url(./images/home.png)" }}>
                </div>
                <h1 className="absolute text-4xl font-bold top-30 left-5 text-white drop-shadow-xl">Hi, I'am Hanif</h1>
                <p className="absolute text-2xl top-44 left-5 text-white drop-shadow-xl">React JS Developer</p>
            </div>
            <div className="h-fit flex flex-row items-center text-center p-10 shadow-md border-spacing-2 duration-200 border-2 border-slate-900 border-opacity-70 hover:border-white bg-slate-900 hover:bg-slate-800 bg-opacity-70 hover:bg-opacity-60  text-white">
                <p className="text-lg z-10">I like <span className="italic font-semibold">simple and smooth</span> but aesthetic design.</p>
            </div>
            <div className="h-fit py-5 px-10 text-left shadow-md border-spacing-2 duration-200 border-2 border-slate-900 border-opacity-70 hover:border-white bg-slate-900 hover:bg-slate-800 bg-opacity-70 hover:bg-opacity-60  text-white">
                <h2 className="text-3xl font-bold pb-5">Contact me </h2>
                <div className="flex mb-2">
                    <FaLinkedin className="self-center mr-3 w-7 h-7" />
                    <a href="https://www.linkedin.com/in/muhammad-hanif-a362a6234/" className="self-center hover:border-b-4 border-white duration-150 border-[#145364]">Muhammad Hanif Furqani</a>
                </div>
                <div className="flex">
                    <SiGithub className="self-center mr-3 w-7 h-7" />
                    <a href="https://github.com/muhammadhnf97" className="self-center hover:border-b-4 border-white duration-150 border-[#145364]">muhammadhnf97</a>
                </div>
            </div>
            <div className="h-fit py-10 px-10 text-left shadow-md border-spacing-2 duration-200 border-2 border-slate-900 border-opacity-70 hover:border-white bg-slate-900 hover:bg-slate-800 bg-opacity-70 hover:bg-opacity-60  text-white">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-lg">I'm a <span className="italic font-semibold">freelance Web Developer</span> which strong in <span className="italic font-semibold">Frontend. I usually works with React JS and Tailwind CSS. </span> I graduated in 2021 with Major <span className="italic font-semibold">Informatics Engineering.</span></p>
            </div>
            <div className="col-span-2 h-full py-3 px-10 text-center shadow-md border-spacing-2 duration-200  border-2 border-slate-900 border-opacity-70 hover:border-white bg-slate-900 hover:bg-slate-800 bg-opacity-70 hover:bg-opacity-60  text-white">
                <h2 className="text-3xl font-bold py-2">Skills</h2>
                <p className="text-lg">Javascript, React JS, Next JS, CSS, Tailwind CSS, Php, MySql</p>
                <p className="text-2xl font-bold py-5">Beside Programming</p>
                <p className="text-lg">Photoshop, Canva & Filmora</p>
            </div>
            <div className="col-span-3 h-[17rem] py-3 px-10 shadow-md border-spacing-2 duration-200 border-2 border-slate-900 border-opacity-70 hover:border-white bg-slate-900 hover:bg-slate-800 bg-opacity-70 hover:bg-opacity-60  text-white">
                <h2 className="text-3xl font-bold py-2.5">Project</h2>
                <ProjectCard 
                project={props.project}/>
            </div>
        </div>
    )
}