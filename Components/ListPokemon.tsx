"use client";

import { StyledBox } from "@/StyledComponent/Box";
import { StyledGrid } from "@/StyledComponent/Grid";
import { getCategories, getSpecificCategory } from "@/server/api/actions";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListCategories = ({ slug }: any) => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["types"],
    queryFn: () => getSpecificCategory(slug || ""),
  });
  console.log("data?: ", data);
  return (
    <StyledGrid gap="5px" columns={3}>
      {data?.pokemon?.map((item: any, index: number) => (
        <Link key={index} href={`/pokemon/${item?.pokemon?.name}`}>
          <div>
            <Image
              src={`/${item.pokemon.name}`}
              height={100}
              width={100}
              alt={item.pokemon?.name}
            />
            <StyledBox>{item.pokemon?.name}</StyledBox>
          </div>
        </Link>
      ))}
    </StyledGrid>
  );
};

export default ListCategories;
