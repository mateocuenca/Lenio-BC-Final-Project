// External dependencies
import { useAtom } from "jotai";

// Internal dependencies
import { useState } from "react";
import { getComics } from "../../../shared/services/comicsService";
import { favouriteCharactersAtom } from "../../../shared/state/atoms/charactersAtoms";

const useCharacterCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [emptyComics, setEmptyComics] = useState(false);
  const [favouriteCharacters, setFavouriteCharacters] = useAtom(
    favouriteCharactersAtom
  );

  const openModal = async (characterId) => {
    setIsOpen(true);
    const comics = await getComics(characterId);
    setComics(comics);
    if (comics.length === 0) setEmptyComics(true);
    setIsLoading(false);
  };

  const saveToFavourites = (character) => {
    //Check if character is already in local storage favourites
    const localFavourites = JSON.parse(
      localStorage.getItem("favouriteCharacters")
    );

    const isCharacterInLocalStorage = localFavourites.find(
      (favouriteCharacter) => favouriteCharacter.id === character.id
    );

    const isCharacterInLocalStorageFound = !!isCharacterInLocalStorage;

    //If character is not in local storage favourites, add it
    if (!isCharacterInLocalStorageFound) {
      localFavourites.push(character);
      localStorage.setItem(
        "favouriteCharacters",
        JSON.stringify(localFavourites)
      );
      setFavouriteCharacters(localFavourites);
      //If character is in local storage favourites, remove it
    } else {
      const newLocalFavourites = localFavourites.filter(
        (favouriteCharacter) => favouriteCharacter.id !== character.id
      );
      localStorage.setItem(
        "favouriteCharacters",

        JSON.stringify(newLocalFavourites)
      );
      setFavouriteCharacters(newLocalFavourites);
    }
  };

  return {
    comics,
    openModal,
    isOpen,
    setIsOpen,
    isLoading,
    emptyComics,
    saveToFavourites,
  };
};

export { useCharacterCard };
