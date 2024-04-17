"use client";

import styled from "styled-components";
interface GridProps {
  columns: number;
  gap: string;
}
export const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-gap: ${(props) => props.gap};
`;
