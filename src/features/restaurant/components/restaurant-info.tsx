import React from "react";
import { SvgXml } from "react-native-svg";

import {
  RestaurantCard,
  RestaurantCardContent,
  RestaurantCardCover,
  RestaurantTitle,
} from "../../../layout/card";
import {
  Section,
  SectionEnd,
  StarsContainer,
  Wrapper,
} from "../../../layout/container";
import { Caption, Subtitle } from "../../../layout/typography";
import { RestaurantData } from "../../../models/RestaurantData";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { theme } from "../../../infrastructure/theme";
import Spacer from "../../../components/Spacer/Spacer";
interface Props {
  restaturantInfo?: RestaurantData;
}
export default function RestaurantInfo({ restaturantInfo = {} }: Props) {
  const {
    name,
    icon,
    photos = [
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ],
    address,
    isOpenNow,
    rating,
    isClosed,
  } = restaturantInfo;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        {/* <RestaurantTitle title="Algo" subtitle="Something" /> */}
        <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
        <RestaurantCardContent>
          <Wrapper>
            <Subtitle>{name}</Subtitle>
            <Section>
              <StarsContainer>
                {ratingArray.map(() => {
                  return <SvgXml height="20" width="20" xml={star} />;
                })}
              </StarsContainer>
              <SectionEnd>
                {isClosed && (
                  <Spacer variant="rightMedium">
                    <Subtitle color={theme.colors.ui.error}>
                      CLOSED TEMPORARILY
                    </Subtitle>
                  </Spacer>
                )}
                {isOpenNow && <SvgXml height="20" width="20" xml={open} />}
              </SectionEnd>
            </Section>
            <Caption>{address}</Caption>
          </Wrapper>
        </RestaurantCardContent>
      </RestaurantCard>
    </>
  );
}
