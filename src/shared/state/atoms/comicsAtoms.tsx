//External dependencies
import { atom } from "jotai";

const comicsAtom = atom<any[]>([]);
const loadingComicsAtom = atom<boolean>(true);

export { comicsAtom, loadingComicsAtom };
