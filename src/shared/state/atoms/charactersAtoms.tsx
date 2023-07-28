//External dependencies
import { atom } from "jotai";

const charactersAtom = atom<any[]>([]);
const loadingCharactersAtom = atom<boolean>(true);

export { charactersAtom, loadingCharactersAtom };
