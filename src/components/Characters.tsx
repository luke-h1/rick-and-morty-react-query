import { useEffect, useState } from "react";
import { Character } from "../types/types";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    console.log(data.results);
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return <div>

  </div>;
};
export default Characters;
