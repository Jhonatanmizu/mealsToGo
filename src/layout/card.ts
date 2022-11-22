import {
  Card,
  CardContentProps,
  CardCoverProps,
  CardProps,
  CardTitleProps,
} from "react-native-paper";
import styled from "styled-components/native";
interface Props {
  color?: string;
  size?: number;
  padding?: number;
  borderRadius?: number;
}
export const RestaurantCard = styled(Card)<Props & CardProps>`
  background-color: ${({ color }) => color || "white"};
`;
export const RestaurantTitle = styled(Card.Title)<Props & CardTitleProps>`
  background-color: ${({ color }) => color || "white"};
`;
export const RestaurantCardCover = styled(Card.Cover)<Props & CardCoverProps>`
  background-color: ${({ color }) => color || "white"};
  padding: ${({ padding }) => padding || "20px"};
`;
export const RestaurantCardContent = styled(Card.Content)<
  Props & CardContentProps
>`
  background-color: ${({ color }) => color || "white"};
`;
