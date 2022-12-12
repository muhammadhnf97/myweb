import React from "react";
import ProjectCard from "./ProjectCard";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import {BsTelegram} from "react-icons/bs";

export default function Home(props){
    return (
        <>
        <div className="w-full h-fit md:grid md:grid-cols-3 md:overflow-hidden md:gap-3">
            <div className="h-96 mb-3 relative justify-center bg-center duration-200 overflow-hidden md:mb-0 md:row-span-2 md:h-full md:col-span-2 md:my-0">
                <div className="w-full h-full justify-center bg-center bg-cover duration-200 hover:transform hover:scale-105 absolute" style={{ backgroundImage : "url(./images/home.png)" }}>
                </div>
                <h1 className="absolute text-white drop-shadow-xl text-2xl md:text-4xl font-bold bottom-16 left-1/2 -translate-x-1/2 transform md:translate-x-0 md:bottom-30 md:left-5">Hi, I'am Hanif</h1>
                <p className="absolute text-white drop-shadow-xl text-lg md:text-2xl bottom-10 left-1/2 -translate-x-1/2 transform md:translate-x-0 md:bottom-10 md:left-5">React JS Developer</p>
            </div>
            <div className="mx-2 md:mx-0 md:rounded-none rounded-lg h-fit mb-3 md:mb-0 md:col-span-1 z-10 text-center p-10 shadow-md duration-200 border-2 border-slate-900 border-opacity-70 hover:border-white bg-slate-900 hover:bg-slate-800 bg-opacity-90 hover:bg-opacity-60 text-white relative">
                <p className="md:text-lg">I like <span className="italic font-semibold">simple and smooth</span> but aesthetic design.</p>
            </div>
            <div className="mx-2 md:mx-0 md:rounded-none rounded-lg group relative z-10 mb-3 h-fit py-2 px-10 text-left shadow-md border-spacing-2 duration-200 border-2 border-slate-900 border-opacity-70 hover:border-white bg-slate-900 hover:bg-slate-800 bg-opacity-90 hover:bg-opacity-60 text-white overflow-hidden">
                <h2 className="text-3xl font-bold pb-2">Contact me</h2>
                <img src="./images/gear.png" alt="gear" className="w-10 absolute top-2 right-2 group-hover:animate-spin "/>
                <div className="flex">
                    <FaLinkedin className="self-center mr-3 w-7 h-7" />
                    <a href="https://www.linkedin.com/in/muhammad-hanif-a362a6234/" target="_blank" rel="noreferrer" className="self-center hover:border-b-4 border-white duration-150 border-white">Muhammad Hanif Furqani</a>
                </div>
                <div className="flex my-1">
                    <SiGithub className="self-center mr-3 w-7 h-7" />
                    <a href="https://github.com/muhammadhnf97" target="_blank" rel="noreferrer" className="self-center hover:border-b-4 border-white duration-150 border-white">muhammadhnf97</a>
                </div>
                <div className="flex">
                    <BsTelegram className="self-center mr-3 w-7 h-7" />
                    <a href="https://t.me/muhammadhnf97" target="_blank" rel="noreferrer" className="self-center hover:border-b-4 border-white duration-150 border-white">Hanif</a>
                </div>
            </div>
            <div className="mx-2 md:mx-0 md:rounded-none rounded-lg relative mb-3 md:mb-0 text-center md:col-span-1 z-10 overflow-hidden h-fit py-10 px-10 md:text-left shadow-md duration-200 border-2 border-slate-900 border-opacity-70 hover:border-white bg-slate-900 hover:bg-slate-800 bg-opacity-90 hover:bg-opacity-60 text-white group">
                <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
                <p className="text-base md:text-lg">I'm a <span className="italic font-semibold">freelance Web Developer</span> which strong in <span className="italic font-semibold">Frontend. I usually works with React JS and Tailwind CSS. </span> I graduated in 2021 with Major <span className="italic font-semibold">Informatics Engineering.</span></p>
            </div>
            <div className="mx-2 md:mx-0 md:rounded-none rounded-lg mb-3 relative md:col-span-2 h-full py-3 px-10 text-center shadow-md border-spacing-2 duration-200  border-2 border-slate-900 border-opacity-70 hover:border-white bg-slate-900 hover:bg-slate-800 bg-opacity-90 hover:bg-opacity-60  text-white overflow-hidden group">
                <h2 className="text-2xl md:text-3xl font-bold py-2">Skills</h2>
                <p className="text-base md:text-lg">Javascript, React JS, Next JS, CSS, Tailwind CSS, Php, MySql</p>
                <p className="text-2xl font-bold py-2">Beside Programming</p>
                <p className="text-base md:text-lg">Photoshop, Canva & Filmora</p>
                <img src="./images/gear.png" alt="gear" className="w-16 md:w-36 absolute -top-5 -left-5 md:-top-10  md:-left-10 group-hover:animate-spin "/>
                <img src="./images/gear.png" alt="gear" className="w-16 md:w-56 absolute  -bottom-5 -right-5 md:-bottom-[108px]  md:-right-16 group-hover:animate-spin "/>
            </div>
            <div className="mx-2 md:mx-0 md:rounded-none rounded-lg relative z-10 col-span-3 h-fit md:h-[17rem] py-3 px-10 shadow-md border-spacing-2 duration-200 border-2 border-slate-900 border-opacity-70 hover:border-white bg-slate-900 hover:bg-slate-800 bg-opacity-90 hover:bg-opacity-60  text-white overflow-hidden text-center md:text-left">
                <h2 className="text-3xl font-bold py-2.5">Project</h2>
                <ProjectCard 
                project={props.project}/>
            </div>
        </div>
        </>
    )
}
