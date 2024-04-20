"use client";

import { StyledBox } from "@/styledComponent/Box";
import { StyledGrid } from "@/styledComponent/Grid";
import { getCategories, getFilterSearch } from "@/server/api/actions";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import Card from "./Card";

const SearchPokemon = ({ params }: any) => {
  const searchParams = useSearchParams();

  const search = searchParams.get("filters");

  const { data, error, isFetched, isLoading } = useQuery({
    queryKey: ["search"],
    queryFn: () => getFilterSearch(params || "", search || ""),
  });

  return (
    <>
      <StyledGrid gap="5px" columns={3}>
        {isLoading
          ? "Loading...."
          : data?.length > 0
          ? data?.map((item: any, index: number) => (
              <Link key={index} href={`/pokemon/${item?.pokemon?.name}`}>
                <Card title={item?.pokemon?.name} image={item?.pokemon?.url} />
              </Link>
            ))
          : "No pokemon found in this category"}
      </StyledGrid>
    </>
  );
};

export default SearchPokemon;
