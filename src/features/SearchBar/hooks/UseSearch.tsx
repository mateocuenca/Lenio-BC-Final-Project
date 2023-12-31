// External dependencies
import { useAtom } from "jotai";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

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

  //Handling URL and Input query state
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  //Handling submit
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(`/?query=${query}`);
  };

  //Handling change
  const handleChange = async (e: any) => {
    const value = e.target.value;
    setQuery(value);
  };

  const fetchSearch = async (query: any) => {
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
