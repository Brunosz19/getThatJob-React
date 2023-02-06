import * as S from "./styles"
import { RiArrowDownSLine } from "react-icons/ri";
import styled from "@emotion/styled";
import { format } from 'date-fns';

const MorDetailsButton = styled("button")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1.25px;
  color: #616161;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
`;


export default function JobStatus({onClick, status, declined}){
  return (<div style={{ display: "flex" }}>
  <S.ApplicationsmmLetter
    style={{ width: "80px", textAlign: "center" }}
  >
    Send 1 min ago
  </S.ApplicationsmmLetter>
  <S.ApplicationsmmLetter
    style={{ width: "80px", textAlign: "center" }}
  >
    {status === "waiting" && "Waiting for review"}
    {status === "inProgress" && "Review in progress"}
    {status === "finished" && "Review finished"}
    {status === "declined" && `Declined on ${format(new Date(declined), 'dd/MM/yy')}`}
  </S.ApplicationsmmLetter>
  <MorDetailsButton
      onClick={onClick}
  >
    <RiArrowDownSLine />
  </MorDetailsButton>
</div>)
}