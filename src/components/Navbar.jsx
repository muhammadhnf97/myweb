import React from "react";

export default function Navbar(){
    return (
        <div className="w-full  mx-auto h-16">
            <div className="h-full flex justify-between items-center">
                <h1 className="text-3xl font-black text-[#145364]">//Niph.</h1>
                {/* <ul className="flex h-full justify-center text-center items-center">
                    <li className="font-bold mx-5 w-16 hover:text-lg border-b-4 border-red-900 duration-100 cursor-pointer">Home</li>
                    <li className="font-bold mx-5 w-16 hover:text-lg border-b-4 border-red-900 duration-100 cursor-pointer">Project</li>
                    <li className="font-bold mx-5 w-16 hover:text-lg border-b-4 border-red-900 duration-100 cursor-pointer">Contact</li>
                </ul> */}
            </div>
        </div>
    )
}