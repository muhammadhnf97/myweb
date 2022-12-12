import React, { useState } from "react";
import Navbar from "./components/Navbar"
import Home from "./components/Home";

export default function App (){
  const [project] = useState([
    {
      name : "Estock Marketplace",
      img : "marketplace-landscape.png",
      url : "https://sunny-frangollo-951718.netlify.app"
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
    <div className="w-screen h-full md:h-screen bg-slate-700 overflow-hidden" style={{ backgroundImage : 'url(./images/bg.png)' }}>
      <div className="max-w-7xl h-fit mx-auto rounded-xl">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <Home 
        project={project}/>
      </div>
    </div>
  )
}


// "homepage": "https://muhammadhnf97.github.io/myweb",