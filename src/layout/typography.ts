import { LayoutProps } from "./../models/LayoutProps";
import styled from "styled-components/native";

export const Title = styled.Text<LayoutProps>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ size, theme }) => size || theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const Subtitle = styled.Text<LayoutProps>`
  font-size: ${({ size, theme }) => size || theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const Paragraph = styled.Text<LayoutProps>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ size, theme }) => size || theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

export const Caption = styled.Text<LayoutProps>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ size, theme }) => size || theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.ui.primary};
`;
