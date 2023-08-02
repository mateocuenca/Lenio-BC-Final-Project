//External dependencies
import { useNavigate } from "react-router";

const useComicCart = () => {
  //Handling Click
  const navigate = useNavigate();
  const handleClick = (comic, characterId) => {
    navigate(`/${comic.id}`);
  };

  return { handleClick };
};

export { useComicCart };
