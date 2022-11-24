import { LayoutProps } from "./../models/LayoutProps";
import styled from "styled-components/native";

export const Title = styled.Text<LayoutProps>`
  font-size: ${({ size }) => size || "16px"};
  padding: ${({ padding }) => padding || "16px"};
  color: ${({ color }) => color || "black"};
`;
