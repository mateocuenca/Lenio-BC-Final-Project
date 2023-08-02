// External dependencies
import { useState } from "react";
import { useParams } from "react-router-dom";

//Internal dependencies
import { getComicById } from "../../../shared/services/comicsService";
import { formatDate } from "../utils/formatDate";
import { categorizeItemsByRole } from "../utils/rolesArray";

const useComic = () => {
  //Handling state
  const [comic, setComic] = useState([]);

  //Handling comic data
  const [comicData, setComicData] = useState({});

  //Get comic id from URL
  const params = useParams();
  const comicId = params.comicId;

  //Fetching comic by id
  const fetchComicById = async () => {
    const [comic] = await getComicById(comicId);
    setComic(comic);
    setComicData({
      formattedDate: formatDate(comic.dates[0].date),
      writers: categorizeItemsByRole(comic.creators.items).writers,
      pencillers: categorizeItemsByRole(comic.creators.items).pencillers,
      editors: categorizeItemsByRole(comic.creators.items).editors,
      isDescriptionEmpty: comic.description === null,
      comicURL: comic.urls[0].url,
    });
  };

  /*  //Handling comic data
  const formattedDate = formatDate(comic.dates[0].date);
  const { writers, pencillers, editors } = categorizeItemsByRole(
    comic.creators.items
  );
  const isDescriptionEmpty = comic.description === null;
  const comicURL = comic.urls[0].url; */

  return {
    fetchComicById,
    comic,
    comicData,
  };
};

export { useComic };
