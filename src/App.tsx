import { useEffect } from "react";
import "./App.css";
import Header from "./shared/layouts/Header";
import { atom, useAtom } from "jotai";
import { getAllCharacters } from "./shared/services/characterService";

const charactersAtom = atom<any[]>([]);

function App() {
  const [characters, setCharacters] = useAtom(charactersAtom);

  useEffect(() => {
    const fetchData = async () => {
      const allCharacters = await getAllCharacters();
      setCharacters(allCharacters);
    };

    fetchData();
  }, [setCharacters]);

  return (
    <>
      <div className="page">
        <Header />
        <main>Aqui van los resultados</main>
      </div>
    </>
  );
}

export default App;
