//External dependencies
import { atom } from "jotai";

// const comicsAtom = atom<any[]>([]);
// const loadingComicsAtom = atom<boolean>(true);
const selectedComicAtom = atom<any>(null);

export { selectedComicAtom };
