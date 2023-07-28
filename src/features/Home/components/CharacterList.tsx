//External dependencies
import { useAtom } from "jotai";
import styles from "styled-components";

//Internal dependencies
import { charactersAtom } from "../../../shared/state/atoms/charactersAtom";
import { CharacterCard } from "./CharacterCard";

const Grid = styles.ul`
    list-style: none;
    display: grid;
    width: 100%;
    margin:0;
    padding: 0;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    text-align: center;
 
`;

const CharacterList = () => {
  const [characters] = useAtom(charactersAtom);
  return (
    <Grid>
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </Grid>
  );
};

export default CharacterList;
