import { LayoutProps } from "./../models/LayoutProps";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeView = styled.SafeAreaView<LayoutProps>`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

export const ListContainer = styled.ScrollView<LayoutProps>`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.bg.primary};
  width: 100%;
`;

export const SearchContainer = styled.View<LayoutProps>`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.bg.primary};
  width: 100%;
`;

export const Wrapper = styled.View<LayoutProps>`
  padding: ${({ theme }) => theme.space[3]};
`;

export const StarsContainer = styled.View<LayoutProps>`
  display: flex;
  padding: ${({ theme }) => theme.space[2]} 0;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
`;
