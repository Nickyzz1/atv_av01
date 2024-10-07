"use client" // sempre que usar um hook
import React, {useState} from "react"
import { Tilt } from 'react-tilt'

const media = () =>
{

    
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


    const [number1, setNumber1] = useState<string>("");
    const [number2, setNumber2] = useState<string>("");
    const [number3, setNumber3] = useState<string>("");
    const [number4, setNumber4] = useState<string>("");
    const [number5, setNumber5] = useState<string>("");
    const [resp, setResp] = useState<number | undefined >();
    const [isAprovado, setIsAprovado] = useState< string | undefined >("reprovado");
    
    const msgError= "Digite um número válido"
    const msgError2= "Digite suas notas para saber se foi aprovado"
 
    const handleSCalculator = () => 
    {
            const n1 = parseFloat(number1)
            const n2 = parseFloat(number2)
            const n3 = parseFloat(number3)
            const n4 = parseFloat(number4)
            const n5 = parseFloat(number5)

            if(!isNaN(n1) && !isNaN(n2)) //se isso for um numero pois nega nn ser um numero "n1??"" == boolean
            {
                setResp((n1 + n2 + n3 + n4+ n5)/5)
                let mid = (n1 + n2 + n3 + n4+ n5)/5
            
                    if(mid > 7)
                    {
                        setIsAprovado("Aprovado")
                    }
                    else{

                        setIsAprovado("Reprovado")
                    }
            }
            
            else{
                setResp(undefined)
            }
    }
    const style = {
        container: "flex flex-col flex-wrap",
        content: "flex flex-col bg-cinza text-white p-4 rounded items-center gap-3",
    }
    return(
        <>
        <div className="min-h-screen h-auto flex flex-col justify-center items-center bg-azul text-white">
        <h1 className="text-center text-large m-6">Calculando média</h1>
            <div className={style.container}>
                <div className={style.content}>
                    <p>{!isNaN(resp ?? NaN) ? isAprovado : msgError2}</p>
                    <h1>Média</h1>
                    <input className="rounded p-4 text-black" type="text" placeholder="Nota 1"  value={number1} onChange={(event)=> setNumber1(event.target.value)}/>
                    <input className="rounded p-4 text-black" type="text" placeholder="Nota 2"  value={number2} onChange={(event)=> setNumber2(event.target.value)}/>
                    <input className="rounded p-4 text-black" type="text" placeholder="Nota 3"  value={number3} onChange={(event)=> setNumber3(event.target.value)}/>
                    <input className="rounded p-4 text-black" type="text" placeholder="Nota 4"  value={number4} onChange={(event)=> setNumber4(event.target.value)}/>
                    <input className="rounded p-4 text-black" type="text" placeholder="Nota 5"  value={number5} onChange={(event)=> setNumber5(event.target.value)}/>
                    <button className="bg-black p-4 rounded" onClick={handleSCalculator}>Calcular</button>
                    <h2>Resultado</h2>
                    <div>
                        <p>{!isNaN(resp ?? NaN) ? resp : msgError}</p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default media;