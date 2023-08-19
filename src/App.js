import './App.css';
import axios from 'axios';
import { useState } from "react"
import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';




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
         
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={ <About/> }/>   
         </Routes>
         
      </div>
   );
}

export default App;
