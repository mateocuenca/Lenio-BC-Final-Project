//External dependencies
import ReactDom from "react-dom";

// Internal dependencies
import { ComicCart } from "./ComicCart";
import { styled } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Spinner } from "../../../shared/components/Spinner";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 400px;
  width: 300px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  overflow: scroll;
  borderradius: 5px;

  @media (min-width: 752px) {
    width: 400px;
    height: 530px;
  }

  &:;
`;

const ComicList = styled.ul`
  list-style: none;
  display: grid;
  width: 100%;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5rem;
  text-align: center;
`;

const ModalTitle = styled.h2`
  margin-top: 2;
  padding: 0;
  text-align: center;
`;

const ModalSubheading = styled.h3`
  margin-bottom: 2;
  padding: 0;
  text-align: center;
`;

const ModalDescription = styled.p`
  margin-bottom: 2;
  padding: 0;
  text-align: center;
  color: #000;
`;

const ModalError = styled.p`
  margin-bottom: 2;
  padding: 0;
  text-align: center;
  color: red;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseModalBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 0;
  background-color: transparent;
  border: none;
  &:hover {
    background-color: transparent;
  }
`;

const CharacterModal = ({
  characterId,
  isOpen,
  setIsOpen,
  comics,
  characterName,
  isLoading,
  emptyComics,
  description,
}) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <Modal>
        <CloseModalBtn onClick={() => setIsOpen(false)}>
          <AiOutlineClose size={25} />
        </CloseModalBtn>
        <ModalTitle>{characterName} </ModalTitle>
        <ModalSubheading>Character description</ModalSubheading>
        <ModalDescription>
          {description ? description : "No description found"}
        </ModalDescription>
        <ModalSubheading>Comics</ModalSubheading>
        {isLoading && (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}

        {emptyComics && <ModalError>No comics found</ModalError>}
        <ComicList>
          {comics.map((comic) => (
            <ComicCart key={comic.id} comic={comic} characterId={characterId} />
          ))}
        </ComicList>
      </Modal>
    </>,
    document.getElementById("portal")
  );
};

export default CharacterModal;
