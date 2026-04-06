"use client";

import { useEffect, useState } from "react";
import { Monitor, Smartphone, CheckSquare, LineChart, Home, Users, Plus } from "lucide-react";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY > 50;

  return (
    <div className="flex flex-col min-h-[200vh] bg-gradient-to-b from-[#b2dfe9] to-[#80cedb] font-sans text-slate-800 relative">
      {/* Background shape mimicking the image vibe */}
      <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 flex flex-col relative w-full shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        
        {/* Blue background section */}
        <div 
          className={`transition-all duration-500 ease-in-out bg-gradient-to-b from-[#1b3664] to-[#206798] text-white flex flex-col items-center justify-center
          ${isScrolled ? 'py-3' : 'pt-10 pb-16 md:pt-16 md:pb-24'}`}
        >
          <div className={`flex items-center gap-4 transition-all duration-500 ${isScrolled ? 'flex-row' : 'flex-col md:flex-row'}`}>
            
            {/* Logo House + */}
            <div className={`relative flex items-center justify-center transition-all duration-500 ${isScrolled ? 'mr-0' : 'mb-4 md:mb-0 md:mr-4'}`}>
              <Home 
                className={`transition-all duration-500 ${isScrolled ? 'w-8 h-8 text-[#26cfa8]' : 'w-16 h-16 md:w-24 md:h-24 text-[#26cfa8]'}`} 
                fill="currentColor" 
                strokeWidth={1}
              />
              <Plus 
                className={`absolute transition-all duration-500 ${isScrolled ? 'w-4 h-4 text-white' : 'w-8 h-8 md:w-10 md:h-10 text-white'}`} 
                strokeWidth={4} 
              />
            </div>

            {/* Titles */}
            <div className={`flex flex-col transition-all duration-500 ${isScrolled ? 'items-center text-center' : 'items-center text-center md:items-start md:text-left'}`}>
               <h1 className={`font-bold transition-all duration-500 leading-tight uppercase drop-shadow-md pb-1 border-b-2 border-transparent
                 ${isScrolled ? 'text-lg md:text-2xl' : 'text-3xl md:text-4xl lg:text-5xl'}`}>
                 Sistema Web de Gestión <br className={`${isScrolled ? 'hidden' : 'hidden md:block'}`} />
                 y Control para <span className="text-[#26cfa8]">ELEAM</span>
               </h1>
               
               <p className={`font-medium transition-all duration-500 text-cyan-50 
                 ${isScrolled ? 'text-[0px] opacity-0 h-0 w-0 m-0 overflow-hidden' : 'text-sm md:text-lg mt-3 md:mt-4 h-auto opacity-90'}`}>
                 Un proyecto de tesis de Ingeniería de Ejecución en Computación e Informática
               </p>
            </div>
          </div>
        </div>

        {/* Floating/Extending Navbar */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center z-20" style={{ transform: isScrolled ? 'translateY(100%)' : 'translateY(50%)' }}>
          <div 
            className={`transition-all duration-500 ease-in-out bg-white text-slate-800 flex items-center justify-between
            ${isScrolled 
              ? 'w-full shadow-md py-2 px-4 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border-b border-slate-200' 
              : 'w-[95%] lg:w-[85%] xl:w-[75%] rounded border border-slate-100 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] py-4 px-2 md:px-8'
            }`}
          >
             <NavItems isScrolled={isScrolled} />
          </div>
        </div>
      </header>

      {/* Main Content Spacer for overlapping navbar */}
      <div className={`transition-all duration-500 ${isScrolled ? 'h-16' : 'h-16 md:h-12 lg:h-10'}`}></div>

      {/* Main content body */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24 relative z-10">
        {/* Section: ¿Qué es? */}
        <div className="flex flex-col lg:flex-row gap-8 items-center md:items-start text-white p-2">
          
          {/* Text wrapper with text-shadow for better legibility against backgrounds */}
          <div className="flex-1 space-y-6 drop-shadow-md bg-[#2576a8]/20 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif flex items-center gap-2">
               ¿Que es?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-50 font-medium">
              El <strong>Sistema Web de Gestión y Control para Establecimientos de Larga Estadía de Adulto Mayor (ELEAM)</strong>, es una plataforma web que permite gestionar bitácoras, turnos, avisos, administración de medicamentos, y organizar la información importante del día a día del personal de trato directo del eleam de Coronel.
            </p>
          </div>

          {/* Right side graphic mockup */}
          <div className="flex-1 w-full max-w-md pt-4 md:pt-0">
            <div className="bg-[#113958] rounded-tl-xl rounded-tr-xl rounded-bl-md rounded-br-md p-6 w-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative aspect-[4/3] flex items-center justify-center border-b-[6px] border-[#0a2336]">
               
               {/* Browser buttons */}
               <div className="absolute top-0 left-0 right-0 h-8 bg-[#17486e] rounded-tl-xl rounded-tr-xl flex gap-1.5 items-center px-4">
                 <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
               </div>

               {/* Center network representation */}
               <div className="flex flex-col items-center justify-center mt-6 w-full h-full relative">
                  
                  {/* Central Node */}
                  <div className="bg-[#155b76] w-16 h-16 rounded-full flex items-center justify-center border-[3px] border-[#26cfa8] z-10 shadow-lg mb-8 relative">
                     <Users className="text-white w-8 h-8" />
                     {/* Connecting lines */}
                     <div className="absolute top-[100%] left-[50%] w-0.5 h-10 bg-[#26cfa8] -translate-x-[50%]"></div>
                     <div className="absolute top-[100%] left-[50%] w-[120px] h-0.5 bg-[#26cfa8] -translate-x-[50%] translate-y-10"></div>
                  </div>
                  
                  {/* Bottom Nodes Wrapper */}
                  <div className="flex justify-between w-[150px] relative mt-2 pt-2 z-10 relative">
                     <div className="absolute top-0 left-0 w-0.5 h-6 bg-[#26cfa8] -translate-y-2 translate-x-7"></div>
                     {/* Node 1 */}
                     <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center border-[3px] border-[#155b76] shrink-0 shadow-lg overflow-hidden relative group">
                       <span className="w-8 h-8 bg-[#ceeef1] rounded-full absolute -bottom-2"></span>
                       <span className="w-4 h-4 bg-[#ceeef1] rounded-full absolute top-2"></span>
                     </div>

                     <div className="absolute top-0 right-0 w-0.5 h-6 bg-[#26cfa8] -translate-y-2 -translate-x-7"></div>
                     {/* Node 2 */}
                     <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center border-[3px] border-[#155b76] shrink-0 shadow-lg overflow-hidden relative group">
                       <span className="w-8 h-8 bg-[#ceeef1] rounded-full absolute -bottom-2"></span>
                       <span className="w-4 h-4 bg-[#ceeef1] rounded-full absolute top-2"></span>
                     </div>
                  </div>

               </div>
            </div>
          </div>
        </div>
        
        {/* Fill empty space so scrolling is possible */}
        <div className="h-[120vh] flex flex-col py-32 space-y-8 opacity-40">
           {/* Dummy content */}
        </div>
      </main>
    </div>
  );
}

function NavItems({ isScrolled }: { isScrolled: boolean }) {
  const items = [
    { label: "Mi Proyecto", icon: Monitor },
    { label: "Caracteristicas", icon: Smartphone },
    { label: "Beneficios", icon: CheckSquare },
    { label: "Proyección", icon: LineChart },
    { label: "El Eleam", icon: Home },
  ];

  return (
    <ul className={`flex ${isScrolled ? 'justify-center md:justify-end gap-2 md:gap-4 md:space-x-4 w-full pr-0 md:pr-10' : 'w-full justify-around md:space-x-4 flex-wrap gap-y-4'} mx-auto transition-all duration-500`}>
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i} className={`flex ${isScrolled ? 'flex-row' : 'flex-col md:flex-row'} items-center gap-1 md:gap-3 group cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors`}>
            {/* Icon Circle */}
            <div className={`bg-[#2c4c68] text-white rounded-full flex items-center justify-center transition-all duration-300
               ${isScrolled ? 'w-6 h-6 md:w-8 md:h-8 group-hover:bg-[#26cfa8]' : 'w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 border-2 border-[#162737] group-hover:bg-[#26cfa8]'}`}
            >
              <Icon className={`${isScrolled ? 'w-3 h-3 md:w-4 md:h-4' : 'w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8'}`} strokeWidth={1.5} />
            </div>
            
            {/* Label */}
            <span className={`font-bold transition-all duration-300 text-center
              ${isScrolled ? 'text-[10px] md:text-sm text-slate-800' : 'text-xs md:text-sm lg:text-base text-slate-900'} tracking-tight group-hover:text-cyan-700`}>
              {item.label}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
