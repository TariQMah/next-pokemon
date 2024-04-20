"use client";

import { StyledBox } from "@/styledComponent/Box";
import { StyledGrid } from "@/styledComponent/Grid";
import { getPokemon } from "@/server/api/actions";
import { useQuery } from "@tanstack/react-query";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getPokemonIdFromUrl } from "@/utils/contranst";
import Chart from "./Chart";
import { HeadingH3 } from "@/styledComponent/Globals";

const DetailsPokemon = ({ slug }: any) => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["getPokemons"],
    queryFn: () => getPokemon(slug || ""),
  });
  return (
    <StyledGrid gap="5px" columns={2}>
      <div className="">
        <Image
          src={
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonIdFromUrl(
              data?.species?.url
            )}.png` || logo
          }
          alt="Image"
          height={400}
          width={400}
        />

        <Chart data={data?.stats} />
      </div>

      <div className="">
        <HeadingH3>
          Name: <span>{data?.name}</span>
        </HeadingH3>
        <HeadingH3>
          Weight: <span>{data?.weight}</span>
        </HeadingH3>
        <HeadingH3>
          Height: <span>{data?.height}</span>
        </HeadingH3>
        <HeadingH3>
          Order: <span>{data?.order}</span>
        </HeadingH3>
        {data?.abilities?.length > 0 && (
          <>
            <HeadingH3>Abilities</HeadingH3>
            <StyledGrid gap="5px" columns={4}>
              {data?.abilities?.map((item: any, index: number) => (
                <StyledBox key={index}>{item?.ability?.name}</StyledBox>
              ))}
            </StyledGrid>
          </>
        )}

        <HeadingH3>Types</HeadingH3>
        <StyledGrid gap="5px" columns={4}>
          {data?.types?.map((item: any, index: any) => (
            <Link key={index} href={`/category/${item?.type?.name}`}>
              <StyledBox>{item?.type?.name}</StyledBox>
            </Link>
          ))}
        </StyledGrid>
        <HeadingH3>Moves</HeadingH3>
        <StyledGrid gap="5px" columns={4}>
          {data?.moves?.map((item: any, index: any) => (
            <Link key={index} href={`/move/${item?.move?.name}`}>
              <StyledBox>{item?.move?.name}</StyledBox>
            </Link>
          ))}
        </StyledGrid>
      </div>
    </StyledGrid>
  );
};

export default DetailsPokemon;
