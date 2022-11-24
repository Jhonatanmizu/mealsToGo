import { LayoutProps } from "./../models/LayoutProps";
import {
  Card,
  CardContentProps,
  CardCoverProps,
  CardProps,
  CardTitleProps,
} from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantCard = styled(Card)<LayoutProps & CardProps>`
  background-color: ${({ color }) => color || "white"};
`;
export const RestaurantTitle = styled(Card.Title)<LayoutProps & CardTitleProps>`
  background-color: ${({ color }) => color || "white"};
`;
export const RestaurantCardCover = styled(Card.Cover)<
  LayoutProps & CardCoverProps
>`
  background-color: ${({ color }) => color || "white"};
  padding: ${({ padding }) => padding || "20px"};
`;
export const RestaurantCardContent = styled(Card.Content)<
  LayoutProps & CardContentProps
>`
  background-color: ${({ color }) => color || "white"};
`;
