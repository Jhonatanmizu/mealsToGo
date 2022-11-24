import { LayoutProps } from "./../models/LayoutProps";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeView = styled.SafeAreaView<LayoutProps>`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

export const ListContainer = styled.View<LayoutProps>`
  flex: 1;
  padding: 16px;
  background-color: ${({ bgColor }) => bgColor || "#f2f2f2"};
  width: 100%;
`;

export const SearchContainer = styled.View<LayoutProps>`
  padding: 16px;
  background-color: ${({ bgColor }) => bgColor || "#f2f2f2"};
  width: 100%;
`;
