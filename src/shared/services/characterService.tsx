const getCharacters = async (offset = 0) => {
  const ts: string = "1";
  const hash: string = "62e7d48094c147098933d40c09e39054";
  const apikey: string = "68bad928443e1f6ff994342b06e6b887";
  const limit: string = "100";

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
  return response;
};

const getAllCharacters = async () => {
  const limit = 100; // The maximum number of characters that can be fetched in a single request
  const {
    data: { total },
  } = await getCharacters(); // Fetch the total count of characters

  // Calculate the number of requests needed to fetch all characters
  const numRequests = Math.ceil(total / limit);

  // Create an array of request promises
  const requestPromises = Array.from({ length: numRequests }, (_, index) =>
    getCharacters(index * limit)
  );

  try {
    // Use Promise.all to make all requests simultaneously
    const allResponses = await Promise.all(requestPromises);

    // Concatenate and filter properties from all responses
    const allCharacters = allResponses.reduce((acc, response) => {
      const filteredCharacters = response.data.results.map(
        (character: any) => ({
          id: character.id,
          name: character.name,
          description: character.description,
          thumbnail: character.thumbnail,
          comics: character.comics,
        })
      );

      return [...acc, ...filteredCharacters];
    }, []);

    // Randomly sort the characters
    allCharacters.sort(() => Math.random() - 0.5);

    return allCharacters;
  } catch (error) {
    console.log("Error fetching characters: ", error);
    return [];
  }
};

export { getAllCharacters };
