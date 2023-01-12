import styled from "@emotion/styled";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  background-color: #ffffff;

  border: 1px solid #e1e2e1;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  gap: 10px;
`;

export const JobCover = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WrapperType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const WrapperDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0px 0px;
  gap: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
