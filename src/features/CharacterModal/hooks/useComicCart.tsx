//External dependencies
import { useAtom } from "jotai";

//Internal dependencies
import { selectedComicAtom } from "../../../shared/state/atoms/comicsAtoms";

const useComicCart = () => {
  //Handling state
  const [, setComic] = useAtom(selectedComicAtom);

  return { setComic };
};

export { useComicCart };
