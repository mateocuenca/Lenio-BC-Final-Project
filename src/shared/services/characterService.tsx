// Internal dependencies
import { ts, apikey, hash } from "../../config/constants/apiParams";

// Define a global set to store used offsets
let usedOffsetsSet = new Set();

// Function to shuffle an array in-place using Fisher-Yates algorithm
const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

//Get the total number of characters
const getCharactersLength = async () => {
  const limit = "20";
  const params = new URLSearchParams({
    ts,
    apikey,
    hash,
    limit,
  });

  const URL = `https://gateway.marvel.com/v1/public/characters?${params.toString()}`;

  const response = await fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR: ", error));
  return response.data.total;
};

//Get a list of 21 characters
const getCharacters = async () => {
  const limit = "21";
  const total = await getCharactersLength(); // Fetch the total count of characters

  // Calculate the number of requests needed to fetch all characters
  const numRequests = Math.ceil(total / limit);

  let offset;

  // Check if all offsets have been used, if so, reset the usedOffsetsSet
  if (usedOffsetsSet.size === numRequests) {
    usedOffsetsSet.clear();
  }

  // Find a random offset that hasn't been used
  do {
    offset = Math.floor(Math.random() * numRequests) * limit;
  } while (usedOffsetsSet.has(offset));

  // Add the generated offset to the usedOffsetsSet
  usedOffsetsSet.add(offset);

  const params = new URLSearchParams({
    ts,
    apikey,
    hash,
    limit,
    offset: `${offset}`,
  });

  const URL = `https://gateway.marvel.com/v1/public/characters?${params.toString()}`;

  const response = await fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR: ", error));

  // Shuffle the fetched characters randomly before returning
  const shuffledCharacters = [...response.data.results];
  shuffleArray(shuffledCharacters);

  return shuffledCharacters;
};

export { getCharacters, getCharactersLength };
