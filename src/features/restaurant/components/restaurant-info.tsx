import React from "react";
import Svg, { SvgXml } from "react-native-svg";

import {
  RestaurantCard,
  RestaurantCardContent,
  RestaurantCardCover,
  RestaurantTitle,
} from "../../../layout/card";
import { StarsContainer, Wrapper } from "../../../layout/container";
import { Caption, Paragraph, Subtitle } from "../../../layout/typography";
import { RestaurantData } from "../../../models/RestaurantData";
import star from "../../../assets/star";
interface Props {
  restaturantInfo?: RestaurantData;
}
export default function RestaurantInfo({ restaturantInfo = {} }: Props) {
  const {
    name = "Some rest",
    icon = "temp",
    photos = [
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    address = "Citybank",
    isOpenNow = true,
    rating = 5,
    isClosed = false,
  } = restaturantInfo;
  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantTitle title="Algo" subtitle="Somenthing" />
        <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
        <RestaurantCardContent>
          <Wrapper>
            <Subtitle>{name}</Subtitle>
            <Caption>{address}</Caption>
            <StarsContainer>
              {ratingArray.map(() => {
                return <SvgXml height="20" width="20" xml={star} />;
              })}
            </StarsContainer>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse
            </Paragraph>
          </Wrapper>
        </RestaurantCardContent>
      </RestaurantCard>
    </>
  );
}
