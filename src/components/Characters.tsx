import { Character } from "../types/types";
import { useQuery } from "react-query";

const Characters = () => {
  const { data, status } = useQuery<Character[]>("characters", async () => {
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
    <div>
      {data &&
        data.map((character) => (
          <div key={character.id}>
            <h1>{character.name}</h1>
          </div>
        ))}
    </div>
  );
};
export default Characters;
