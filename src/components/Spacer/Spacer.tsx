import { Text, View } from "react-native";
import React, { ReactNode } from "react";
import styled from "styled-components/native";
import { LayoutProps } from "../../models/LayoutProps";
type upSpace = "topSmall" | "topLarge" | "topMedium";
type bottomSpace = "bottomSmall" | "bottomLarge" | "bottomMedium";
type leftSpace = "leftSmall" | "leftLarge" | "leftMedium";
type rightSpace = "rightSmall" | "rightLarge" | "rightMedium";
interface Props {
  children: ReactNode;
  variant: upSpace | bottomSpace | leftSpace | rightSpace;
}
const TopSmall = styled.View<LayoutProps>`
  margin-top: ${({ theme }) => theme.space[1]};
`;
const TopMedium = styled.View`
  margin-top: ${({ theme }) => theme.space[2]};
`;
const TopLarge = styled.View`
  margin-top: ${({ theme }) => theme.space[3]};
`;

const LeftSmall = styled.View`
  margin-left: ${({ theme }) => theme.space[1]};
`;
const LeftMedium = styled.View`
  margin-left: ${({ theme }) => theme.space[2]};
`;
const LeftLarge = styled.View`
  margin-left: ${({ theme }) => theme.space[3]};
`;
const RightSmall = styled.View`
  margin-right: ${({ theme }) => theme.space[1]};
`;
const RightMedium = styled.View`
  margin-right: ${({ theme }) => theme.space[2]};
`;
const RightLarge = styled.View`
  margin-right: ${({ theme }) => theme.space[3]};
`;
const BottomSmall = styled.View`
  margin-bottom: ${({ theme }) => theme.space[2]};
`;
const BottomMedium = styled.View`
  margin-bottom: ${({ theme }) => theme.space[3]};
`;
const BottomLarge = styled.View`
  margin-bottom: ${({ theme }) => theme.space[3]};
`;
export default function Spacer({ children, variant }: Props) {
  if (variant === "topMedium") {
    return <TopMedium>{children}</TopMedium>;
  }
  if (variant === "topLarge") {
    return <TopLarge>{children}</TopLarge>;
  }
  if (variant === "topSmall") {
    return <TopSmall>{children}</TopSmall>;
  }
  if (variant === "leftSmall") {
    return <LeftSmall>{children}</LeftSmall>;
  }
  if (variant === "leftMedium") {
    return <LeftMedium>{children}</LeftMedium>;
  }
  if (variant === "leftLarge") {
    return <LeftLarge>{children}</LeftLarge>;
  }
  if (variant === "bottomSmall") {
    return <BottomSmall>{children}</BottomSmall>;
  }
  if (variant === "bottomMedium") {
    return <BottomMedium>{children}</BottomMedium>;
  }
  if (variant === "bottomLarge") {
    return <BottomLarge>{children}</BottomLarge>;
  }
  if (variant === "rightSmall") {
    return <RightSmall>{children}</RightSmall>;
  }
  if (variant === "rightMedium") {
    return <RightMedium>{children}</RightMedium>;
  }
  if (variant === "rightLarge") {
    return <RightLarge>{children}</RightLarge>;
  }
  return <View>{children}</View>;
}
