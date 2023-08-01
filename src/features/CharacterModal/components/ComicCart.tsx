import { styled } from "styled-components";

const Cart = styled.li`
  height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 5px;
  margin: 0;
  padding: 0;
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

const ComicDescription = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
`;

const ComicCart = ({ title, thumbnail, description }) => {
  return (
    <Cart>
      <Image src={thumbnail.path + "." + thumbnail.extension} />
      <ComicTitle>{title}</ComicTitle>
    </Cart>
  );
};

export { ComicCart };
