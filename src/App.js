import './App.css';
import axios from 'axios';
import { useState } from "react"
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';



function App() { 

   const [characters, setCharacters] = useState([]);
   
   const onClose = (id) => {
      const filtered = characters.filter((char) => char.id !== id)
      setCharacters(filtered)  
   }
   
   function onSearch(characterID) {
      axios(`https://rickandmortyapi.com/api/character/${characterID}`).then(({ data }) => {
         if (data.name) {
            setCharacters([...characters, data]);
         } else {
            window.alert(`¡No hay personajes con este ID!: ${characterID}`);
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
