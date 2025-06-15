'use client'

import RoadmapFlow from "@/app/roadmap/page";
import Header from "@/components/Header";
import DiagramImage from "../assets/diagramwhite.png";
import Image from "next/image";
import React from "react";

const page = () => {
  const handleGoToRoadmaps=()=>{
    window.location.href = "/roadmap"
  }
  return (
    <div className="bg-[#222327] h-screen">
      <div className=" p-4">
        <Header />
      </div>

      <main className="text-center justify-center">
        <div className="mx-auto py-16 px-12 xl:w-2/3 items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-black-500">
            Nunca mais se perca no aprendizado.
          </h1>
          <h2 className="mt-6 text-2xl md:text-3xl text-gray-300">
            Rotas detalhadas para o sucesso em qualquer área.
          </h2>

          <button onClick={handleGoToRoadmaps} className="hover:border-black hover:border-2 border-2 rounded-4xl px-4 py-2 mt-10 hover:bg-gray-200 hover:text-black cursor-pointer transition duration-300">
            Ver Roadmaps
          </button>
        </div>

        <div className="relative flex h-80">
          <div className="absolute xl:w-[500px] xl:h-[800px] w-[300px] h-[800px] bg-gradient-to-b from-[#343a40] via-[#495057] to-[#6c757d]  bottom-0 -left-36 transform translate-y-1/2 rounded-br-4xl rounded-tr-4xl"></div>

          <img
            src="/diagramwhite.png"
            className="absolute xl:w-[800px] xl:h-[600px]   xl:left-44 w-[500px] h-[400px] left-20"
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default page;
