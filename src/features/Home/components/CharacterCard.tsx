//External dependencies
import styles from "styled-components";
import { OutlineFavBtn } from "../../../shared/components/atoms/OutlineFavBtn";

const Card = styles.li`
  list-style: none;
  display: grid;
  border: 1px solid #ccc;
  text-align: center;
  `;

const Image = styles.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  `;

const CharacterTitle = styles.h3`
margin: 0;
  padding-bottom:0;
  `;

const CardFooter = styles.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  `;

const CharacterCard = ({ character }) => (
  <Card>
    <Image
      src={character.thumbnail.path + "." + character.thumbnail.extension}
      alt={character.name}
    />
    <CardFooter>
      <CharacterTitle>{character.name}</CharacterTitle>
      <OutlineFavBtn />
    </CardFooter>
  </Card>
);

export { CharacterCard };
