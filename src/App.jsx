import { useEffect, useState } from 'react'
import './App.css'
import Character from './components/Character/Character';

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(()=>  {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const characters = await res.json();
      setCharacters(characters.results)
    }
    fetchCharacters()
  }, []);

  return (
    <>
    {characters.map((character) => <Character key={character.id} character={character}/>)}
    </>
  )
}

export default App
