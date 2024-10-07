import Image from "next/image";
import { Container } from "postcss";
import React from "react";

export default function Home() {

  const style= 
  {
    container: "flex flex-col flex-wrap justify-center items-center",
    content: "flex flex-wrap flex-row gap-3 m-4 justify-center",
    box: "bg-white h-auto w-80 flex justify-center items-center flex-col",
    btn:"bg-gradient-to-r from-amareloEscuro to-laranjaPastel w-3/4 p-2 text-center text-white",
    h1:"bg-gradient-to-r from-amareloEscuro to-laranjaPastel w-full p-8 text-center text-white",
    p:"w-3/4 text-center m-4"
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
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit  Voluptates expedita quae recusandae hic perferendis quibusdam dolore autem eius obcaecati culpa repudiandae reiciendis dignissimos ducimus, quos minus commodi nulla dicta omnis!</p>
            <button className={style.btn}>Read More</button>
          </div>
          <div className={style.box}>
            <h1 className={style.h1}>Tailwind</h1>
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates expedita quae recusandae hic perferendis quibusdam dolore autem eius obcaecati culpa repudiandae reiciendis dignissimos ducimus, quos minus commodi nulla dicta omnis!</p>
            <button className={style.btn}>Read More</button>
          </div>
          <div className={style.box}>
            <h1 className={style.h1}>Next</h1>
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates expedita quae recusandae hic perferendis quibusdam dolore autem eius obcaecati culpa repudiandae reiciendis dignissimos ducimus, quos minus commodi nulla dicta omnis!</p>
            <button className={style.btn}>Read More</button>
          </div>
          <div className={style.box}>
            <h1 className={style.h1}>JQuery</h1>
            <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates expedita quae recusandae hic perferendis quibusdam dolore autem eius obcaecati culpa repudiandae reiciendis dignissimos ducimus, quos minus commodi nulla dicta omnis!</p>
            <button className={style.btn}>Read More</button>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
