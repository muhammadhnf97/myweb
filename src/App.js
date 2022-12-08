import React, { useState } from "react";
import Navbar from "./components/Navbar"
import Home from "./components/Home";

export default function App (){
  const [project] = useState([
    {
      name : "Estock Marketplace",
      img : "marketplace-landscape.png",
      url : ""
    },
    {
      name : "Quizzies Game",
      img : "quizzies.png",
      url : "https://stellar-fenglisu-fb69ff.netlify.app"
    },
    {
      name : "Tenzies Game",
      img : "tenzies.png",
      url : "https://resplendent-brigadeiros-5980fc.netlify.app"
    },
  ])
  return (
    <div className="w-screen h-screen bg-cover">
      <div className="max-w-7xl h-fit mx-auto rounded-xl">
        <Navbar />
        <Home 
        project={project}/>
      </div>
    </div>
  )
}