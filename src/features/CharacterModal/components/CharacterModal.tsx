//External dependencies
import ReactDom from "react-dom";

// Internal dependencies
import { ComicCart } from "./ComicCart";
import { styled } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { Spinner } from "../../../shared/components/Spinner";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  height: "400px",
  width: "300px",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "30px",
  zIndex: 1000,
  overflow: "scroll",
  borderRadius: "5px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0, .7)",
  zIndex: 1000,
};

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
  margin: 0;
  padding: 2rem;
  text-align: center;
`;

const ModalDescription = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  color: var(--red-marvel);
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
}) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <CloseModalBtn onClick={() => setIsOpen(false)}>
          <AiOutlineClose size={25} />
        </CloseModalBtn>
        <ModalTitle>{characterName} </ModalTitle>
        {isLoading && (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        )}
        {emptyComics && <ModalDescription>No comics found</ModalDescription>}
        <ComicList>
          {comics.map((comic) => (
            <ComicCart key={comic.id} comic={comic} characterId={characterId} />
          ))}
        </ComicList>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default CharacterModal;
