// External dependencies
import { useAtom } from "jotai";
import { useState } from "react";

//Internal dependencies
import {
  searchAtom,
  successAtom,
} from "../../../shared/state/atoms/searchAtom";
import { searchCharacters } from "../../../shared/services/searchBarService";

const useSearch = () => {
  //Handling search state
  const [, setSearch] = useAtom(searchAtom);
  const [, setSuccess] = useAtom(successAtom);

  //Handling query state
  const [query, setQuery] = useState("");

  //Handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //Handling change
  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const fetchSearch = async (query) => {
    if (query === "") {
      setSearch([]);
      setSuccess(true);
      return null;
    } else {
      const search = await searchCharacters(query);

      if (search.length === 0 && query.length > 0) {
        setSuccess(false);
      } else {
        setSuccess(true);
      }
      setSearch(search);
    }
  };

  return { handleChange, handleSubmit, query, setQuery, fetchSearch };
};

export { useSearch };
