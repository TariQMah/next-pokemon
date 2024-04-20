import {
  StyledImageCard,
  StyledImageContainer,
  StyledTitle,
} from "@/styledComponent/ImageCard";
import { getPokemonIdFromUrl } from "@/utils/contranst";
import Image from "next/image";
import React from "react";

interface ChartProps {
  title: string;
  image: string;
}

const Card: React.FC<ChartProps> = ({ image, title }) => {
  return (
    <StyledImageCard gap={"5px"}>
      <StyledImageContainer>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonIdFromUrl(
            image
          )}.png`}
          alt={title}
          width={250}
          height={250}
        />
      </StyledImageContainer>
      <StyledTitle>{title}</StyledTitle>
    </StyledImageCard>
  );
};

export default Card;
