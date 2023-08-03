//External dependencies
import { styled } from "styled-components";

//Internal dependencies
import { useComicCart } from "../hooks/useComicCart";

const Cart = styled.li`
  height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 5px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ComicTitle = styled.h3`
  margin: 0;
  bottom: 0;
  font-size: 1rem;
`;

const ComicCart = ({ comic, characterId }: any) => {
  const { handleClick } = useComicCart();

  return (
    <Cart onClick={() => handleClick(comic, characterId)}>
      <Image
        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
        alt={comic.title}
      />
      <ComicTitle>{comic.title}</ComicTitle>
    </Cart>
  );
};

export { ComicCart };
