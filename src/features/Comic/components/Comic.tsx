// Internal dependencies
import { styled } from "styled-components";
import { useComic } from "../hooks/useComic";
import { formatDate } from "../utils/formatDate";
import { categorizeItemsByRole } from "../utils/rolesArray";
import { useEffect } from "react";
import { Spinner } from "../../../shared/components/Spinner";

const FlexResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  padding-bottom: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  padding-bottom: 2rem;
`;

const Image = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
`;
const Title = styled.h1`
  font-size: 1.2em;
  align-items: flex-start;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  padding-bottom: 2rem;
`;

const DetailsItem = styled.p`
  font-size: 1em;
  align-items: flex-start;
  margin: 0;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1em;
  align-items: flex-start;
  margin: 0;
`;

const GoToComicLink = styled.a`
  font-size: 1em;
  margin: 0;
  font-weight: bold;
  padding-top: 1rem;
`;

const Comic = () => {
  const { fetchComicById, comic, comicData } = useComic();

  useEffect(() => {
    fetchComicById();
  }, []);

  if (!comic || Object.keys(comicData).length === 0) {
    return <Spinner />;
  }

  return (
    <FlexResponsiveContainer>
      <Image
        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
        alt={comic.title}
      />
      <TextContainer>
        <Title>{comic.title}</Title>
        <DetailsContainer>
          <DetailsItem>Published: {comicData.formattedDate}</DetailsItem>
          <DetailsItem>Writer: {comicData.writers}</DetailsItem>
          <DetailsItem>Penciller: {comicData.pencillers}</DetailsItem>
          <DetailsItem>Editor: {comicData.editors}</DetailsItem>
        </DetailsContainer>
        <Description>
          {comicData.isDescriptionEmpty
            ? "No description available"
            : comic.description}
        </Description>
        <GoToComicLink href={comicData.comicURL} target="_blank">
          Go to comic
        </GoToComicLink>
      </TextContainer>
    </FlexResponsiveContainer>
  );
};

export { Comic };
