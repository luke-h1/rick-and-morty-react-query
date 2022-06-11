import { useEffect, useState } from "react";
import { Character, CharactersResponse } from "../types/types";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await (response.json() as Promise<CharactersResponse>);
    console.log(data);
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return <div>
    {characters && characters.map((character) => (
      <div key={character.id}>
        <h1>{character.name}</h1>
      </div>
    ))}
  </div>;
};
export default Characters;
