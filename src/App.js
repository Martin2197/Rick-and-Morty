import './App.css';
import axios from 'axios';
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
   
   const onClose = (id) => {
      const filtered = characters.filter((char) => char.id ==! id)
      setCharacters(filtered) 
   }
   
   function onSearch(characterID) {
      axios(`https://rickandmortyapi.com/api/character/${characterID}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch((error) => {
         window.alert(error.response.data.error);
      });
   }

return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
