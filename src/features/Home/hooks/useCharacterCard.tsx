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
  const [, setFavouriteCharacters] = useAtom(favouriteCharactersAtom);
  const localFavourites = localStorage.getItem("favouriteCharacters");
  const localFavouritesString = localFavourites || "[]";
  const localFavouritesParsed = JSON.parse(localFavouritesString);

  const openModal = async (characterId: any) => {
    setIsOpen(true);
    const comics = await getComics(characterId);
    setComics(comics);
    if (comics.length === 0) setEmptyComics(true);
    setIsLoading(false);
  };

  const isInFavourites = (character: any) => {
    const isCharacterInLocalStorage = localFavouritesParsed.find(
      (favouriteCharacter: any) => favouriteCharacter.id === character.id
    );
    const isCharacterInLocalStorageFound = !!isCharacterInLocalStorage;
    return isCharacterInLocalStorageFound;
  };

  const saveToFavourites = (character: any) => {
    //Check if character is already in local storage favourites

    const isCharacterInLocalStorage = localFavouritesParsed.find(
      (favouriteCharacter: any) => favouriteCharacter.id === character.id
    );
    const isCharacterInLocalStorageFound = !!isCharacterInLocalStorage;

    //If character is not in local storage favourites, add it
    if (!isCharacterInLocalStorageFound) {
      localFavouritesParsed.push(character);
      localStorage.setItem(
        "favouriteCharacters",
        JSON.stringify(localFavouritesParsed)
      );
      setFavouriteCharacters(localFavouritesParsed);
      //If character is in local storage favourites, remove it
    } else {
      const newLocalFavourites = localFavouritesParsed.filter(
        (favouriteCharacter: any) => favouriteCharacter.id !== character.id
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
    isInFavourites,
    saveToFavourites,
  };
};

export { useCharacterCard };
