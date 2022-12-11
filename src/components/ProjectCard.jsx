import React from "react";

export default function ProjectCard(props){
    const projects = props.project.map(data=>{
        return (
            <div className="flex-col px-2 my-3 md:my-0">
                <div className="mx-auto md:mx-0 h-40 w-56 border-4 rounded-md overflow-hidden flex items-start">
                    <a href={data.url} target="_blank" rel="noreferrer">
                    <img src={`./images/${data.img}`} alt="dataImg" className="hover:transform hover:scale-105 duration-200" />
                    </a>
                </div>
                <p className="">{data.name}</p>
            </div>
        )
    })
    return (
        <div className="flex flex-col md:flex-row">
                {projects}
        </div>
    )
}