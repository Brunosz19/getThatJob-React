import * as S from "./styles";
import styled from "@emotion/styled";
import { typography, fonts } from "../../styles/typography";
import { RiCalendar2Line } from "react-icons/ri";
import { BiDollarCircle } from "react-icons/bi";
import { RiBuilding3Line } from "react-icons/ri";
import { RiFocus3Line } from "react-icons/ri";

const Title = styled.h1`
  font-family: ${fonts.secondary};
  ${typography.head.xs};
  font-weight: 500;
  color: #373737;
`;

const Name = styled.h2`
  font-family: ${fonts.secondary};
  ${typography.text.lg};
  font-weight: 500;
  color: #616161;
`;

const InfoText = styled.p`
  font-family: ${fonts.primary};
  ${typography.text.xs};
  font-weight: 400;
  color: #8e8e8e;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

function JobCard({
  category,
  company_info,
  title,
  job_type,
  min_salary,
  max_salary,
}) {
  return (
    <S.Wrapper>
      <S.JobCover>
        <img src={company_info?.logo} alt={title}></img>
        <S.JobInfo>
          <InfoText>
            <RiBuilding3Line />
            {category}
          </InfoText>
          <Title>{title}</Title>
          <Name>{company_info?.name}</Name>
          <S.WrapperType>
            <InfoText>
              <RiCalendar2Line />
              {job_type}
            </InfoText>
            <InfoText>
              <BiDollarCircle />
              {(min_salary / 1000).toFixed(1)}k -{" "}
              {(max_salary / 1000).toFixed(1)}k
            </InfoText>
          </S.WrapperType>
        </S.JobInfo>
      </S.JobCover>
      <S.ButtonContainer>
        <p>
          <RiFocus3Line /> Follow
        </p>
        <p>See More</p>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export default JobCard;
