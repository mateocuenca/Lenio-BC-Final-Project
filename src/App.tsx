//External dependencies
import { useEffect, useRef } from "react";

//Internal dependencies
import { useApp } from "./useApp";
import { Header } from "./shared/layouts/Header/Header";
import { Main } from "./shared/layouts/Main/Main";

//Stylesheets
import "./App.css";

function App() {
  const { fetchInitialData, fetchCharactersLength } = useApp();

  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === false) {
      fetchInitialData();
      fetchCharactersLength();
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
