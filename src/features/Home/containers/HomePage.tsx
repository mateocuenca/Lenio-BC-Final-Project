//External dependencies
import { useAtom } from "jotai";

//Internal dependencies
import CharacterList from "../components/CharacterList";
import { Spinner } from "../../../shared/components/atoms/Spinner";
import { loadingCharactersAtom } from "../../../shared/state/atoms/charactersAtoms";

const HomePage = () => {
  const [loading] = useAtom(loadingCharactersAtom);

  if (loading) {
    return <Spinner />;
  } else {
    return <CharacterList />;
  }
};

export { HomePage };
