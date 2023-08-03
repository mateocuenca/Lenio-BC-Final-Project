//External dependencies
import styles from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

//Internal dependencies
import { CharacterCard } from "./CharacterCard";
import { useCharacterList } from "../hooks/useCharacterList";
import { Spinner } from "../../../shared/components/Spinner";
import { useParams } from "react-router";

const InfiniteScrollContainer = styles.div`
width:100%;
text-align: center;
margin: 0;
padding:0;
`;

const Grid = styles.ul`
    list-style: none;
    display: grid;
    width: 100%;
    margin:0;
    padding: 0;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1rem;
    text-align: center;
 
`;

const CharacterList = () => {
  const { characters, search, charactersLength, fetchMoreData, successSearch } =
    useCharacterList();

  // Get the favourites parameter from the URL
  const params = useParams();
  const favourites = params.favourites;

  // Create local storage for favourite characters if it doesn't exist
  if (!localStorage.getItem("favouriteCharacters"))
    localStorage.setItem("favouriteCharacters", JSON.stringify([]));

  // Get the favourite characters from the local storage and store it in global state
  const favouriteCharactersLocal =
    JSON.parse(localStorage.getItem("favouriteCharacters")) || [];

  // If the user is in the favourites page, show the favourite characters
  if (favourites == "favourites") {
    return favouriteCharactersLocal.length == 0 ? (
      <h4>No favourite characters</h4>
    ) : (
      <Grid>
        {favouriteCharactersLocal.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </Grid>
    );
  }

  // If the search is not successful,show a "not found" message
  if (successSearch == false) {
    return <h4>Character not found</h4>;
  }

  // Show all characters if the search is empty
  if (characters.length > 0 && search.length == 0) {
    return (
      <InfiniteScrollContainer>
        <InfiniteScroll
          dataLength={characters.length}
          next={fetchMoreData}
          hasMore={characters.length < charactersLength}
          loader={<Spinner />}
          endMessage={<h4>No more characters to load</h4>}
        >
          <Grid>
            {characters.map((character) => (
              <CharacterCard character={character} key={character.id} />
            ))}
          </Grid>
        </InfiniteScroll>
      </InfiniteScrollContainer>
    );
  }

  // If the search is successful, show the results
  else if (search.length > 0) {
    return (
      <Grid>
        {search.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </Grid>
    );
  }
};

export default CharacterList;
