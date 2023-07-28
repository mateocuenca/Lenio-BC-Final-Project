const getCharacters = async (offset = 0) => {
  const ts: string = "1";
  const hash: string = "17126bccf69ca89a5f91cb99b3bcebcc";
  const apikey: string = "4bfad9e9b0923eae919d93c4bb53d6dd";
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
    .catch((error) => console.log("ERROR : ", error));
  return response;
};

const getAllCharacters = async () => {
  let offset = 0;
  let allCharacters: any[] = [];
  let hasMoreResults = true;

  while (hasMoreResults) {
    const response = await getCharacters(offset); // Get the complete response
    const { total, results } = response.data; // Extract the 'total' and 'results' from the response

    allCharacters = [...allCharacters, ...results];
    offset += 100;
    hasMoreResults = offset < total;
  }

  return allCharacters;
};

export { getAllCharacters };
