import './App.css';
import { useState, useEffect } from "react"
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
//import characters from './data';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};



function App() {

   const [characters, setCharacters] = useState([]);
   
   const onClose = () => window.alert("Emulamos que cerramos la card");
   
   function onSearch (characterID) {
      console.log(characterID);
      setCharacters([...characters, example]); 
}
  
return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
