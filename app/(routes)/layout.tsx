"use client";

import {
  Conatiner,
  FilterContainer,
  Header,
  SearchContainer,
  SearchForm,
  SearchIcon,
  SearchInput,
} from "@/styledComponent/Globals";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/server/api/actions";
import Multiselect from "multiselect-react-dropdown";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  let path = usePathname();

  const { push } = useRouter();
  const [searchValue, setSearchValue] = useState<null | string>("");
  const [filters, setFilters] = useState<null | string[]>();

  const onFilter = (event: any) => {
    event.preventDefault();
    const params = filters?.map((item: any) => item.name) || [];
    const commaSeparatedString = params.join(",");
    let url = `/search/${searchValue?.toLowerCase()}`;
    if (commaSeparatedString?.length > 0)
      url += `?filters=${commaSeparatedString}`;
    push(url);
  };

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const onSelect = (selectedList: any, selectedItem: any) => {
    setFilters(selectedList);
  };

  const onRemove = (selectedList: any, removedItem: any) => {
    const updatedFilters = (filters || []).filter(
      (filter) => filter !== removedItem
    );
    setFilters(updatedFilters);
  };

  const renderOptions = useCallback(() => {
    const response = data?.results?.map((item: any, index: number) => ({
      name: `${item.name}`,
      key: index,
      id: index,
    }));
    return response;
  }, [data]);

  useEffect(() => {
    const pathArray = path.split("/");
    const search = searchParams.get("filters");

    setSearchValue(
      pathArray[1] === "search" ? pathArray[pathArray.length - 1] : ""
    );
    const selectedFilters = search ? search.split(",") : [];
    const filteredData = data?.results?.filter((obj: any) =>
      selectedFilters.includes(obj.name)
    );
    setFilters(filteredData);
  }, [data, searchParams, path]);
  return (
    <>
      <Header>
        <Link href={"/"}>
          <Image src={logo} height={103} width={256} alt="logo" />
        </Link>
        <FilterContainer>
          <SearchForm onSubmit={onFilter}>
            <SearchContainer>
              <SearchInput
                value={searchValue || ""}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="please type here and press enter"
              />
              <SearchIcon>
                <Search size={20} />
              </SearchIcon>
            </SearchContainer>
          </SearchForm>

          <Multiselect
            options={renderOptions()}
            selectedValues={filters}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
          />
        </FilterContainer>
      </Header>
      <Conatiner>{children}</Conatiner>
    </>
  );
}
