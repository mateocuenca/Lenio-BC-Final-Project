//External dependencies
import { useAtom } from "jotai";

// Internal dependencies
import {
  charactersAtom,
  loadingCharactersAtom,
  charactersLengthAtom,
} from "./shared/state/atoms/charactersAtoms";
import {
  getCharacters,
  getCharactersLength,
} from "./shared/services/characterService";

const useApp = () => {
  //Handling state
  const [, setInitialCharacters] = useAtom(charactersAtom);
  const [, setLoading] = useAtom(loadingCharactersAtom);
  const [, setCharactersLength] = useAtom(charactersLengthAtom);

  //Fetching data
  const fetchInitialData = async () => {
    const initialCharacters = await getCharacters();
    setInitialCharacters(initialCharacters);
    setLoading(false);
  };

  //Fetching characters length
  const fetchCharactersLength = async () => {
    const charactersLength = await getCharactersLength();
    setCharactersLength(charactersLength);
  };
  return { fetchInitialData, fetchCharactersLength };
};

export { useApp };
