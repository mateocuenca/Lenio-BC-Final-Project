// Internal dependencies
import { ts, apikey, hash } from "../../config/constants/apiParams";

// Get all comics for a character
const getComics = async (characterId: any) => {
  const params = new URLSearchParams({
    ts,
    apikey,
    hash,
  });

  const URL = `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?${params.toString()}`;

  const response = await fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR: ", error));
  return response.data.results;
};

// Get a single comic by id
const getComicById = async (comicId: any) => {
  const params = new URLSearchParams({
    ts,
    apikey,
    hash,
  });

  const URL = `https://gateway.marvel.com/v1/public/comics/${comicId}?${params.toString()}`;

  const response = await fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR: ", error));
  return response.data.results;
};

export { getComics, getComicById };
