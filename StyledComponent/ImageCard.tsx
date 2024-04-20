"use client";

import styled from "styled-components";
import Image from "next/image";
interface ImageCardProps {
  gap: string;
}

export const StyledImageCard = styled.div<ImageCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.gap};
`;
export const StyledImageContainer = styled.div`
  max-width: 100%;
  height: auto;
`;
export const StyledTitle = styled.h3`
  margin: 0;
`;
