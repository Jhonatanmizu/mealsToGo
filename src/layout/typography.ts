import styled from "styled-components/native";
interface Props {
  color?: string;
  size?: number;
  padding?: number;
}
export const Title = styled.Text<Props>`
  font-size: ${({ size }) => size || "16px"};
  padding: ${({ padding }) => padding || "16px"};
  color: ${({ color }) => color || "black"};
`;
