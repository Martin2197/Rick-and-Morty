import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
      {characters.map(character =>(
         <Card 
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            status={character.status}
            image={character.image}
            onClose = {() => window.alert("Emulamos que cerramos la card")}
         />
            
            
      ))}
   </div>);
}
