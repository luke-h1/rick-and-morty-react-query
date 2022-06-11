/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Character as CharacterType } from "../types/types";

interface Props {
  character: CharacterType;
}

const Character = ({ character }: Props) => {
  return (
    <div className="card">
      <img src={character.image} />
      <div className="text-container">
        <h3>{character.name}</h3>
        <p className="status">
          {character.status} - {character.species}
        </p>
        <p className="title">Last seen on</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
};
export default Character;
