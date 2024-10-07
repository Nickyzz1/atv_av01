"use client"
import Image from "next/image";
import { Container } from "postcss";
import React from "react";
import { Tilt } from 'react-tilt'
import next from "@/app/assets/img/react.png"
import tail from "@/app/assets/img/tailof.jpg"
import react from "@/app/assets/img/react.png"
import jquery from "@/app/assets/img/jquery.webp"

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


export default function Home() {

  const style= 
  {
    container: "flex flex-col flex-wrap justify-center items-center",
    content: "flex flex-wrap flex-row gap-6 m-4 justify-center",
    box: "h-auto w-40 flex justify-center items-center flex-col shadow-[0_10px_33px_1px_rgba(255,255,255,0.1)]",
    btn:"bg-gradient-to-r from-black to-cinza w-full p-2 text-center text-white rounded hover:bg-black",
    h1:"bg-gradient-to-r from-black to-cinza w-full p-8 text-center text-white rounded",
    p:"w-3/4 text-center m-4 p-2 bg-white",
    section: "flex justify-center flex-col items-center m-20 bg-gradient-to-r from-black to-cinza text-white p-4 rounded w-[320px] self-center shadow-[0_15px_33px_1px_rgba(0,0,0)] hover:scale-[1.05] ease-[cubic-bezier(0.95,0.05,0.795,0.035)] cursor-pointer"
    // box:"bg-amareloEscuro h-auto w-60 flex-wrap justify-center items-center",
    // content: "flex flex-row flex-wrap"

  }
  return (
    <>

    <div className="min-h-screen h-auto scroll-smooth bg-azul">
      
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.box}>
            <h1 className={style.h1}>React</h1>
            
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit  Voluptates </p>
            <a href="#react"><button className={style.btn}>Read More</button></a>
          </div>
          <div className={style.box}>
            <h1 className={style.h1}>Tailwind</h1>
          
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates </p>
            <a href="#tail"><button className={style.btn}>Read More</button></a>
          </div>
          <div className={style.box}>
            <h1 className={style.h1}>Next</h1>
           
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates </p>
            <a href="#next"><button className={style.btn}>Read More</button></a>
          </div>
          <div className={style.box}>
            <h1 className={style.h1}>JQuery</h1>
          
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates </p>
            <a href="#jquery" ><button className={style.btn}> Read More</button></a>
          </div>
        </div>
      </div>

    <div className="flex flex-col justify-center  m-12">
       
        
            <section id="react" className={style.section}>
              <h1 className="mb-4 text-center text-medium">React</h1>
              <a href="https://pt.wikipedia.org/wiki/React_(JavaScript)" target="_blanc">
                <Image className="rounded-full m-4 hover:shadow-[0_3px_1px_1px_rgba(255,255,255)]" src={react} width={150} height={300} alt="" priority/>
              </a>
              <p className="w-3/4 text-center">React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</p>
            </section>

 
        <section id="tail" className={style.section}>
          <h1 className="mb-4 text-center text-medium">Tailwind</h1>
          <a href="https://en.wikipedia.org/wiki/Tailwind_CSS">
            <Image className="rounded-full m-4  hover:shadow-[0_3px_1px_1px_rgba(255,255,255)]" src={tail} width={200} height={300} alt=""  priority></Image>
          </a>
          <p className="w-3/4 text-center">Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.</p></section>
      
        <section id="next" className={style.section}>
          <h1 className="mb-4 text-center text-medium">Next</h1>
          <h1 className="mb-4 text-center ">Next</h1>
          <a href="https://en.wikipedia.org/wiki/Next.js">
            <Image className="rounded-full m-4  hover:shadow-[0_3px_1px_1px_rgba(255,255,255)]" src={next} width={200} height={300} alt=""  priority></Image>
          </a>
          <p className="w-3/4 text-center">Next is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.</p></section>

        <section id="jquery" className={style.section}>
          <h1 className="mb-4 text-center text-medium">Jquery</h1>
          <a href="https://en.wikipedia.org/wiki/JQuery">
            <Image className="rounded-full m-4  hover:shadow-[0_3px_1px_1px_rgba(255,255,255)]" src={jquery} width={200} height={300} alt=""  priority></Image>
          </a>
          <p className="w-3/4 text-center">What is jQuery? jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.</p></section>
      
      </div>

    </div>


    </>
  );
}
