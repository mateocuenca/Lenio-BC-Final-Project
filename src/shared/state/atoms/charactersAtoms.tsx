//External dependencies
import { atom } from "jotai";

const charactersAtom = atom<any[]>([]);
const loadingCharactersAtom = atom<boolean>(true);
const charactersLengthAtom = atom<number>(0);
const favouriteCharactersAtom = atom<any[]>([]);

export {
  charactersAtom,
  loadingCharactersAtom,
  charactersLengthAtom,
  favouriteCharactersAtom,
};
