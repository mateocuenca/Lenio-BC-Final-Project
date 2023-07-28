import { useAtom } from "jotai";
import {
  charactersAtom,
  loadingCharactersAtom,
} from "./shared/state/atoms/charactersAtoms";
import { getAllCharacters } from "./shared/services/characterService";

const useApp = () => {
  //Handling state
  const [, setCharacters] = useAtom(charactersAtom);
  const [, setLoading] = useAtom(loadingCharactersAtom);

  //Fetching data
  const fetchData = async () => {
    const allCharacters = await getAllCharacters();
    setCharacters(allCharacters);
    setLoading(false);
  };

  return { fetchData };
};

export { useApp };
