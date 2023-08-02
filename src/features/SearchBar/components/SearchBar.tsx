// Internal dependencies
import { useCallback, useEffect } from "react";
import { useSearch } from "../hooks/UseSearch";
import { debounce } from "lodash";

const SearchBar = () => {
  const { handleChange, handleSubmit, query, fetchSearch } = useSearch();

  const debouncedFetchSearch = useCallback(debounce(fetchSearch, 500), []);

  useEffect(() => {
    debouncedFetchSearch(query);
  }, [query]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="query"
        name="query"
        value={query}
        placeholder="Search character"
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
