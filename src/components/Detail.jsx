import axios from "axios"
import { useParams, useState } from "react-router-dom"
import { useEffect } from "react";


export default function Detail({character, onSearch}){ 
    const { id } = useParams();
    

useEffect(() => { 
    onSearch(id, "detail")
 }, [id]);

useEffect(() => {
    console.log(character)
},[character])

    return <div></div>
}

/* axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
                if (data.name) {
                   setCharacter(data);
                 } else {
                   window.alert('No hay personajes con ese ID');
                }
                   });
                   return setCharacter({});*/