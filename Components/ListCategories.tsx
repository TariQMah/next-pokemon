"use client";

import { StyledBox } from "@/StyledComponent/Box";
import { StyledGrid } from "@/StyledComponent/Grid";
import { getCategories } from "@/server/api/actions";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const ListCategories = () => {
  const { data, error, isFetched } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return (
    <StyledGrid gap="5px" columns={3}>
      {data?.results?.map((item: any, index: number) => (
        <Link key={index} href={`/category/${item.name}`}>
          <StyledBox>{item.name}</StyledBox>
        </Link>
      ))}
    </StyledGrid>
  );
};

export default ListCategories;
