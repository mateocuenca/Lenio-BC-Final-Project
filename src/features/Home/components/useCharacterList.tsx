// External dependencies
import { useAtom } from "jotai";

//Internal dependencies
import {
  charactersAtom,
  charactersLengthAtom,
} from "../../../shared/state/atoms/charactersAtoms";
import { getCharacters } from "../../../shared/services/characterService";

const useCharacterList = () => {
  //Handling state
  const [characters, setNewCharacters] = useAtom(charactersAtom);
  const [charactersLength] = useAtom(charactersLengthAtom);

  //Fetching more characters
  const fetchMoreData = async () => {
    console.log("fetching more data");
    const moreCharacters = await getCharacters();
    setNewCharacters((previousCharacters) => [
      ...previousCharacters,
      ...moreCharacters,
    ]);
  };

  return { characters, charactersLength, fetchMoreData };
};

export { useCharacterList };
