import { Character as CharacterType } from "../types/types";
import { useQuery } from "react-query";
import Character from "./Character";

const Characters = () => {
  const { data, status } = useQuery<CharacterType[]>("characters", async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    return data.results;
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error!</p>;
  }

  return (
    <div className='characters'>
      {data &&
        data.map((character) => (
          <Character character={character} key={character.id} />
        ))}
    </div>
  );
};
export default Characters;
