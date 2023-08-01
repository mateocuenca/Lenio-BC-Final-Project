// External dependencies
import { useAtom } from "jotai";

//Internal dependencies
import {
  charactersAtom,
  charactersLengthAtom,
} from "../../../shared/state/atoms/charactersAtoms";
import {
  searchAtom,
  successAtom,
} from "../../../shared/state/atoms/searchAtom";
import { getCharacters } from "../../../shared/services/characterService";

const useCharacterList = () => {
  //Handling state
  const [characters, setNewCharacters] = useAtom(charactersAtom);
  const [charactersLength] = useAtom(charactersLengthAtom);
  const [search] = useAtom(searchAtom);
  const [successSearch] = useAtom(successAtom);

  //Fetching more characters
  const fetchMoreData = async () => {
    const moreCharacters = await getCharacters();
    setNewCharacters((previousCharacters) => [
      ...previousCharacters,
      ...moreCharacters,
    ]);
  };

  return { characters, search, charactersLength, fetchMoreData, successSearch };
};

export { useCharacterList };
