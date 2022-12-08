import React from "react";

export default function ProjectCard(props){
    const projects = props.project.map(data=>{
        return (
            <div className="flex-col px-2">
                <div className="h-40 w-56 border-4 rounded-md overflow-hidden flex items-start">
                    <a href={data.url} target="_blank">
                    <img src={`./images/${data.img}`} className="hover:transform hover:scale-105 duration-200" />
                    </a>
                </div>
                <p className="">{data.name}</p>
            </div>
        )
    })
    return (
        <div className="flex">
                {projects}
        </div>
    )
}