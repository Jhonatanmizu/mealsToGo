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
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.bg.primary};
  margin-bottom: ${({ theme }) => theme.space[3]};
`;
export const RestaurantTitle = styled(Card.Title)<LayoutProps & CardTitleProps>`
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)<
  LayoutProps & CardCoverProps
>`
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.bg.primary};

  padding: ${({ padding }) => padding || "20px"};
`;
export const RestaurantCardContent = styled(Card.Content)<
  LayoutProps & CardContentProps
>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors};
`;
