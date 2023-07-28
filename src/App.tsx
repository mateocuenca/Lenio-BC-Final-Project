//External dependencies
import { useEffect, useRef } from "react";
import { useAtom } from "jotai";

//Internal dependencies
import { Header } from "./shared/layouts/Header/Header";
import { getAllCharacters } from "./shared/services/characterService";
import { charactersAtom } from "./shared/state/atoms/charactersAtom";
import { loadingAtom } from "./shared/state/atoms/loadingAtom";
import { Main } from "./shared/layouts/Main/Main";

//Stylesheets
import "./App.css";

function App() {
  const [, setCharacters] = useAtom(charactersAtom);
  const [, setLoading] = useAtom(loadingAtom);
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      const fetchData = async () => {
        const allCharacters = await getAllCharacters();
        setCharacters(allCharacters);
        setLoading(false);
      };

      fetchData();
      return () => {
        effectRan.current = true;
      };
    }
  }, []);

  return (
    <>
      <div className="page">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
