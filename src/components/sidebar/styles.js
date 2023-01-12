import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  padding: 32px 0px;
  background-color: ${colors.gray[100]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

export const Shawarma = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;
