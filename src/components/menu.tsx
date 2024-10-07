import {ROUTES} from "@/constants/routes"
import Link from "next/link";


export const Menu = ({op1, op2, op3} : 
{
    op1: string;
    op2: string;
    op3: string;
}

// a ? quer dizer argumento opcoional, pessimo para performance

) =>{
    const style = 
    {
    p:"text-white bg-cinza p-2 rounded hover:bg-amareloEscuro w-40 text-center font-size-small",
    nav:"flex flex-wrap text-white bg-black gap-3 p-3 text-large flex-row justify-center align-center"
    }

    return(
        <>
         <nav className={style.nav}>
          <Link href={ROUTES.home} className={style.p}>{op1}</Link>
          <Link href={ROUTES.imc} className={style.p}>{op2}</Link>
          <Link className={style.p} href={ROUTES.mid}>{op3}</Link>
        </nav>
        </>
    );
}