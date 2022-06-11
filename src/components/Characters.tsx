import { Character as CharacterType, CharactersResponse } from "../types/types";
import { useQuery } from "react-query";
import Character from "./Character";
import { useState } from "react";

const Characters = () => {
  const [page, setPage] = useState<number>(1);

  // @ts-ignore
  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, status, isPreviousData, isLoading, isError } = useQuery<CharactersResponse>(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  return (
    <div className="characters">
      {data &&
        data.results.map((character) => (
          <Character character={character} key={character.id} />
        ))}
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={isPreviousData || !data?.info.next}
        >
          next
        </button>
      </div>
    </div>
  );
};
export default Characters;
