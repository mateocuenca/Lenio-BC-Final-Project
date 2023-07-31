//External dependencies
import styles from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

//Internal dependencies
import { CharacterCard } from "./CharacterCard";
import { useCharacterList } from "./useCharacterList";
import { Spinner } from "../../../shared/components/atoms/Spinner";

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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
    text-align: center;
 
`;

const CharacterList = () => {
  const { characters, charactersLength, fetchMoreData } = useCharacterList();

  if (characters.length > 0) {
    return (
      <InfiniteScrollContainer>
        <InfiniteScroll
          dataLength={characters.length}
          next={fetchMoreData}
          hasMore={characters.length < charactersLength}
          loader={<Spinner />}
          endMessage={<h4>No more data to load</h4>}
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
};

export default CharacterList;
