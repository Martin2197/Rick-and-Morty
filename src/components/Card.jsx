import { Link } from "react-router-dom";

export default function Card({character, onClose}) {
   const {id, name, species, gender, origin, image, status } = character; 
   return (
      <div id={id}>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail:${id}`}>
            <h2>{name}</h2>
         </Link>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         <h4>{origin.name}</h4>
         <h4>{status}</h4>
         <img src={image} alt="not found" />
      </div>
   );
}
 