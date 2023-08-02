//External dependencies
import styles from "styled-components";
import { OutlineFavBtn } from "../../../shared/components/OutlineFavBtn";
import CharacterModal from "../../CharacterModal/components/CharacterModal";
import { useCharacterCard } from "../hooks/useCharacterCard";

const Card = styles.li`
  position: relative;
  height: 300px;
  display: grid;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 5px;
  `;

const Image = styles.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  `;

const CharacterTitle = styles.h3`
  position: absolute;
  color:white;
  margin:0;
  bottom:0;
  padding: 1rem;
  `;

const CardContainer = styles.div`
cursor: pointer;
&: before{
  content: '';
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 50%);
 }
`;

const CardOutlineFavBtn = styles(OutlineFavBtn)`
position: absolute;
right:0;
 background-color: transparent;
 color:white;
 border: none;

  &:hover {
    background-color: transparent;
  }

  &:focus {
    background-color: transparent;
  }

`;

const CharacterCard = ({ character }) => {
  const { comics, openModal, isOpen, setIsOpen, isLoading, emptyComics } =
    useCharacterCard();
  return (
    <Card>
      <CardContainer onClick={() => openModal(character.id)}>
        <Image
          src={character.thumbnail.path + "." + character.thumbnail.extension}
          alt={character.name}
        />
        <CharacterTitle>{character.name}</CharacterTitle>
      </CardContainer>
      <CardOutlineFavBtn />
      <CharacterModal
        characterId={character.id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        comics={comics}
        characterName={character.name}
        isLoading={isLoading}
        emptyComics={emptyComics}
      />
    </Card>
  );
};

export { CharacterCard };
