import './App.css';
import axios from 'axios';
import { useState } from "react"
import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Home from './components/Home';




function App() { 
   const [character, setCharacter] = useState({})
   const [characters, setCharacters] = useState([]);
   
   const onClose = (id) => {
      const filtered = characters.filter((char) => char.id !== id)
      setCharacters(filtered)  
   }
   
   function onSearch(characterID, string = "all") {
      axios(`https://rickandmortyapi.com/api/character/${characterID}`).then(({ data }) => {
         if (data.id) {
            if(string != "all"){
               setCharacter(data)
            }else{
               setCharacters([...characters, data]);
            }
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
            <Route path="/home" element={<Home characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={ <About/> }/>   
            <Route path='/detail/:id' element={<Detail character={character} onSearch={onSearch}/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
