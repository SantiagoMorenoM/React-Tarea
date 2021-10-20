import React from "react";
import './Card.css';
export const Card = ({nombre,genero,status,imagen})=>{

    return (<div className='card'>
        <img 
        src={imagen}
        alt=''/>
        <h3 className='nombre'>
            Name:{nombre}
        </h3>
        <h3 className='genero'>
            Gender:{genero}
        </h3>
        <h3 className='status'>
            Status:{status}
        </h3>
       <button className='go'>Go somewhere</button>

    </div>

    ) ;
}