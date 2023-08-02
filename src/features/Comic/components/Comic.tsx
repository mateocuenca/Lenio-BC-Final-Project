// Internal dependencies
import { styled } from "styled-components";
import { useComic } from "../hooks/useComic";
import { formatDate } from "../utils/formatDate";
import { categorizeItemsByRole } from "../utils/rolesArray";

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

const Comic = () => {
  const { comic } = useComic();

  const formattedDate = formatDate(comic.dates[0].date);
  const { writers, pencillers, editors } = categorizeItemsByRole(
    comic.creators.items
  );

  const isDescriptionEmpty = comic.description === null;

  return (
    <FlexResponsiveContainer>
      <Image
        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
        alt={comic.title}
      />
      <TextContainer>
        <Title>{comic.title}</Title>
        <DetailsContainer>
          <DetailsItem>Published: {formattedDate}</DetailsItem>
          <DetailsItem>Writer: {writers}</DetailsItem>
          <DetailsItem>Penciller: {pencillers}</DetailsItem>
          <DetailsItem>Editor: {editors}</DetailsItem>
        </DetailsContainer>
        <Description>
          {isDescriptionEmpty ? "No description available" : comic.description}
        </Description>
      </TextContainer>
    </FlexResponsiveContainer>
  );
};

export { Comic };
