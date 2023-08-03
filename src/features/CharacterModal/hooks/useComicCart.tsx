//External dependencies
import { useNavigate } from "react-router";

const useComicCart = () => {
  //Handling Click
  const navigate = useNavigate();
  const handleClick = (comic: any, characterId: any) => {
    navigate(`/comic/${comic.id}`);
  };

  return { handleClick };
};

export { useComicCart };
