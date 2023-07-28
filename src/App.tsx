import { useEffect } from "react";
import "./App.css";
import Header from "./shared/layouts/Header";
import { atom, useAtom } from "jotai";
import { getAllCharacters } from "./shared/services/characterService";

const charactersAtom = atom<any[]>([]);

function App() {
  const [characters, setCharacters] = useAtom(charactersAtom);
  const hasCharacters = characters.length > 0;

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
        <main>
          {hasCharacters ? (
            <ul>
              {characters.map((character) => (
                <li key={character.id}>{character.name}</li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
