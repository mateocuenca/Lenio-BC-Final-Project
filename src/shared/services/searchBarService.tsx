import { apikey, hash, ts } from "../../config/constants/apiParams";

const searchCharacters = async (name: string) => {
  const limit = "100";
  const params = new URLSearchParams({
    ts,
    apikey,
    hash,
    limit,
    nameStartsWith: name,
  });

  const URL = `https://gateway.marvel.com/v1/public/characters?${params.toString()}`;

  const response = await fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR: ", error));
  return response.data.results;
};

export { searchCharacters };
