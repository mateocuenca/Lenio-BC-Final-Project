//External dependencies
import { atom } from "jotai";

const searchAtom = atom<any[]>([]);
const successAtom = atom(true);

export { searchAtom, successAtom };
