"use client";

import { StyledGrid } from "@/styledComponent/Grid";
import { getPokemonByMove, getSpecificCategory } from "@/server/api/actions";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import Card from "./Card";

const ListTypes = ({ slug, type }: { slug: string | null; type: string }) => {
  const key = type === "move" ? "move" : "types";
  const api =
    type === "move"
      ? getPokemonByMove(slug || "")
      : getSpecificCategory(slug || "");

  const { data, error, isFetched } = useQuery({
    queryKey: [key],
    queryFn: () => api,
  });

  const getPokemonInfo = (item: any) => {
    const pokemonName = type === "move" ? item?.name : item?.pokemon?.name;
    const pokemonUrl = type === "move" ? item?.url : item?.pokemon?.url;
    return { pokemonName, pokemonUrl };
  };

  return (
    <StyledGrid gap="5px" columns={3}>
      {data &&
        data[type === "move" ? "learned_by_pokemon" : "pokemon"].map(
          (item: any, index: number) => {
            const { pokemonName, pokemonUrl } = getPokemonInfo(item);
            return (
              <Link key={index} href={`/pokemon/${pokemonName}`}>
                <Card title={pokemonName} image={pokemonUrl} />
              </Link>
            );
          }
        )}
    </StyledGrid>
  );
};

export default ListTypes;
