import React, { useEffect, useState } from "react";
import './Gallery.css';
import { Card } from "./Card";
export const Gallery= () =>{
    const api= 'https://rickandmortyapi.com/api/character';
    const [charas,setCharas]= useState([])
    useEffect(()=>{
        fetchCharas();
    },[]);

    const fetchCharas=async ()=>{
        
        const resp=await fetch(api).then(response =>response.json());
        
        const data= resp;
        console.log(data)
      

        const dataCharas = data?.results?.map((chara)=>{
            return {
                id:chara.id,
                name:chara.name,
                gender:chara.gender,
                status:chara.status,
                image:chara.image,
               

            }
        });
        setCharas(dataCharas)

        

    }
    return (
        <div className="container">
          {charas?.map((elemento)=>(
             <Card nombre={elemento.name} genero={elemento.gender} imagen={elemento.image} status={elemento.status} />
    
          )
    
          )}
         
    
        </div>
      );
}