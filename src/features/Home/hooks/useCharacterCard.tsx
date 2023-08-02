// Internal dependencies
import { useState } from "react";
import { getComics } from "../../../shared/services/comicsService";

const useCharacterCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [emptyComics, setEmptyComics] = useState(false);

  const openModal = async (characterId) => {
    setIsOpen(true);
    const comics = await getComics(characterId);
    setComics(comics);
    if (comics.length === 0) setEmptyComics(true);
    setIsLoading(false);
  };

  return { comics, openModal, isOpen, setIsOpen, isLoading, emptyComics };
};

export { useCharacterCard };
