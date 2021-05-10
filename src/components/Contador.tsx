import React, { useState } from 'react';

export const Contador = () => {

    const [valor, setValor] = useState(0);

    const setContador  = (val:number)=>{

        setValor(valor+val);
    }

    return (
        <>
            <h3>Contador <small>{ valor }</small></h3>
            <button className="btn btn-primary"  onClick={ ()=> setContador(1)}>
                +1
            </button>
            <button className="btn btn-primary" onClick={()=> setContador(-1)}>
                -1
            </button>
        </>
    )
}
