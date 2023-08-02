// External dependencies
import { useAtom } from "jotai";
import { selectedComicAtom } from "../../../shared/state/atoms/comicsAtoms";

const useComic = () => {
  //Handling state
  const [comic] = useAtom(selectedComicAtom);

  return { comic };
};

export { useComic };
