"use client";

import styled from "styled-components";

const Conatiner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  background-color: #fbfbfb;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 2px solid #ccc;
  align-items: center;
`;
const HeadingH3 = styled.h3`
  padding: 10px 0;
  margin: 10px 0;
  & span {
    font-weight: normal;
    text-transform: capitalize;
  }
`;
const SearchContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
  padding: 4px;
  flex: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  background: none;
  border: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const MainHeading = styled.h1`
  padding: 10px 0 20px;
`;

const SearchForm = styled.form`
  width: 100%;
`;

const SearchIcon = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  background: none;
  border: none;
`;

const FilterContainer = styled.div`
  display: flex;
  flex: 0.5;
`;
const SearchFilter = styled.select``;
const SearchOption = styled.option``;
export {
  Header,
  SearchInput,
  SearchContainer,
  SearchIcon,
  SearchFilter,
  SearchOption,
  FilterContainer,
  MainHeading,
  Conatiner,
  HeadingH3,
  SearchForm,
};
