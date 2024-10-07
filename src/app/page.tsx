import Image from "next/image";
import { Container } from "postcss";
import React from "react";

export default function Home() {

  const style= 
  {
    container: "flex flex-col flex-wrap justify-center items-center",
    content: "flex flex-wrap flex-row gap-3 m-4 justify-center",
    box: "bg-white h-auto w-40 flex justify-center items-center flex-col",
    btn:"bg-gradient-to-r from-black to-cinza w-full p-2 text-center text-white",
    h1:"bg-gradient-to-r from-black to-cinza w-full p-8 text-center text-white",
    p:"w-3/4 text-center m-4",
    section: "m-6 flex justify-center flex-col items-center m-20 bg-gradient-to-r from-black to-cinza text-white p-4 rounded"
    // box:"bg-amareloEscuro h-auto w-60 flex-wrap justify-center items-center",
    // content: "flex flex-row flex-wrap"

  }
  return (
    <>

    <div className="min-h-screen h-auto">
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

    <section id="react" className={style.section}>
      <h1 className="mb-4 text-center">React</h1>
      <p className="w-3/4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam excepturi neque veniam voluptatem ipsa vitae culpa unde reiciendis perferendis quo placeat quis ex eius, assumenda soluta rem blanditiis ad. Non.</p>
    </section>

    <section id="tail" className={style.section}>
      <h1 className="mb-4 text-center">Tailwind</h1>
      <p className="w-3/4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, illum. Optio consectetur repellendus, cupiditate recusandae quae rerum laboriosam non labore nemo assumenda numquam vel expedita eveniet, fuga dicta doloremque quibusdam?</p></section>

    <section id="next" className={style.section}>
      <h1 className="mb-4 text-center">Next</h1>
      <p className="w-3/4 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ut, dignissimos exercitationem libero facilis molestias magni cum. Illo quaerat numquam natus unde, deserunt in delectus consequuntur odio dolore accusantium maxime?</p></section>

    <section id="jquery" className={style.section}>
      <h1 className="mb-4 text-center">Jquery</h1>
      <p className="w-3/4 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil totam corrupti ea eum possimus culpa velit illo mollitia dolore cumque excepturi provident reiciendis nemo, alias, sapiente facilis iure ipsa molestiae.</p></section>
    </div>



    </>
  );
}
