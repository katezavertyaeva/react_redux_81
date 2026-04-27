import { AnimalCardWrapper, Title, Description, AnimalImage } from "./styles";
import type { AnimalCardProps } from "./types";

function AnimalCard({ name, species, img }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <Title>{name}</Title>
      <Description>{species}</Description>
      <AnimalImage src={img} />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
