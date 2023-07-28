//External dependencies
import { useAtom } from "jotai";

//Internal dependencies
import CharacterList from "../components/CharacterList";
import { loadingAtom } from "../../../shared/state/atoms/loadingAtom";
import { Spinner } from "../../../shared/components/atoms/Spinner";

const HomePage = () => {
  const [loading] = useAtom(loadingAtom);

  if (loading) {
    return <Spinner />;
  } else {
    return <CharacterList />;
  }
};

export { HomePage };
