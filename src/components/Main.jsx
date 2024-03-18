import React, { useState } from 'react'
import * as S from "./styled"

export default function Main() {

    const [primeiroValor, setPrimeiroValor] = useState()
    const [segundoValor, setSegundoValor] = useState()

    const [resultado, setResultado] = useState(0)

    function calcular(operador){
        
        switch(operador){
           case "+":
            setResultado( Number(primeiroValor) + Number(segundoValor))
            break
           case "-":
            setResultado( Number(primeiroValor) - Number(segundoValor))
            break
           case "*":
            setResultado( Number(primeiroValor) * Number(segundoValor))
            break
           case "/":
            setResultado( Number(primeiroValor) / Number(segundoValor))
            break  
            case"c":
            setResultado(0)
            setPrimeiroValor("") 
            setSegundoValor("")
            break
        }
    }

 


  return (
    <main>
    <div>
        <h2>Calculadora VnW</h2>
        <h1>{resultado}</h1>

        <input type="number" value={primeiroValor}
         onChange={(e)=>setPrimeiroValor(e.target.value)}/>


        <input type="number" value={segundoValor} 
        onChange={(e)=>setSegundoValor(e.target.value)} />
        <div>
            <S.Button onClick={()=> calcular("+")}>+</S.Button>
            <S.Button onClick={()=> calcular("-")} >-</S.Button>
            <S.Button onClick={()=> calcular("*")} >*</S.Button>
            <S.Button onClick={()=> calcular("/")}>/</S.Button>
            < S.Button onClick={()=> calcular("c")}>c</S.Button>
        </div>
    </div>
    </main>
  )
}
