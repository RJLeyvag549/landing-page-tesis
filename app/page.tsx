"use client";

import { useEffect, useState } from "react";
import { Monitor, Smartphone, CheckSquare, LineChart, Home, Users, Plus } from "lucide-react";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col min-h-[200vh] bg-gradient-to-b from-[#b2dfe9] to-[#80cedb] font-sans text-slate-800 relative">
      {/* Background shape mimicking the image vibe */}
      <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

      {/* 1. HERO SECTION (Fondo Azul - Estático) */}
      <section className="bg-gradient-to-b from-[#1b3664] to-[#206798] text-white pt-3 pb-8 md:pt-4 md:pb-12 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
            {/* Logo House + */}
            <div className="relative flex items-center justify-center shrink-0">
              <Home className="w-12 h-12 md:w-20 md:h-20 text-[#26cfa8]" fill="currentColor" strokeWidth={1} />
              <Plus className="absolute w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={4} />
            </div>

            {/* Titles */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase drop-shadow-lg">
                Sistema Web de Gestión <br className="hidden md:block" />
                y Control para <span className="text-[#26cfa8]">ELEAM</span>
              </h1>
              <p className="text-xs md:text-lg mt-2 font-medium text-cyan-50 opacity-90 max-w-2xl">
                Un proyecto de tesis para el establecimiento de adulto mayor de Coronel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY NAVBAR (La barra blanca con efecto Inception) */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 -mt-10 md:-mt-14 ${isScrolled ? 'py-1' : 'py-0'
          }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ease-in-out bg-white text-slate-800 flex items-center
          ${isScrolled
              ? 'w-full shadow-2xl px-4 md:px-10 py-2 border-b border-slate-200'
              : 'w-[92%] lg:w-[85%] xl:w-[75%] rounded-2xl border border-slate-100 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] py-3 px-4 md:px-8'
            }`}
        >
          {/* Mini-Branding (Solo visible en scroll) */}
          <div
            className={`flex items-center gap-3 transition-all duration-500 overflow-hidden ${isScrolled ? 'w-auto opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-10 pointer-events-none'
              }`}
          >
            <div className="relative flex items-center justify-center shrink-0">
              <Home className="w-6 h-6 text-[#26cfa8]" fill="currentColor" />
              <Plus className="absolute w-3 h-3 text-white" strokeWidth={5} />
            </div>
            <span className="font-black text-xl tracking-tighter text-[#1e3a8a] whitespace-nowrap">ELEAM</span>
            <div className="h-8 w-[2px] bg-slate-200 ml-2 hidden md:block"></div>
          </div>

          <div className="flex-1">
            <NavItems isScrolled={isScrolled} />
          </div>
        </div>
      </nav>

      {/* 3. MAIN CONTENT */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center md:items-start text-white">

          <div className="flex-1 space-y-8 drop-shadow-md bg-[#2576a8]/20 p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/30">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-serif">
              ¿Qué es?
            </h2>
            <p className="text-lg md:text-2xl leading-relaxed text-slate-50 font-medium">
              Es una plataforma web diseñada para gestionar bitácoras, turnos, avisos y administración de medicamentos, optimizando la labor diaria del personal en el ELEAM de Coronel.
            </p>
          </div>

          {/* Graphic Placeholder (Browser Mockup Restored) */}
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
                  <div className="flex justify-between w-[150px] relative mt-2 pt-2 z-10">
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

        <div className="h-[100vh] mt-24 opacity-50 flex items-center justify-center border-t border-white/20">
          <p className="text-white text-xl italic">Contenido en construcción...</p>
        </div>
      </main>
    </div>
  );
}

function NavItems({ isScrolled }: { isScrolled: boolean }) {
  const items = [
    { label: "Proyecto", icon: Monitor },
    { label: "Funciones", icon: Smartphone },
    { label: "Beneficios", icon: CheckSquare },
    { label: "Impacto", icon: LineChart },
    { label: "ELEAM", icon: Home },
  ];

  return (
    <ul className={`flex items-center w-full transition-all duration-500 ${isScrolled ? 'justify-end gap-2 md:gap-6' : 'justify-around'}`}>
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i} className={`flex flex-col md:flex-row items-center gap-2 group cursor-pointer hover:bg-slate-50 p-2 rounded-xl transition-all duration-300`}>
            <div className={`bg-[#2c4c68] text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#26cfa8] group-hover:scale-110 shadow-sm
               ${isScrolled ? 'w-8 h-8' : 'w-10 h-10 md:w-14 md:h-14'}`}
            >
              <Icon className={`${isScrolled ? 'w-4 h-4' : 'w-6 h-6 md:w-8 md:h-8'}`} strokeWidth={1.5} />
            </div>
            <span className={`font-bold transition-all duration-300 
              ${isScrolled ? 'text-[10px] md:text-sm text-slate-800' : 'text-xs md:text-base text-slate-900'} tracking-tight`}>
              {item.label}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
