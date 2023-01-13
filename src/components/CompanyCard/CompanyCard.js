import * as S from "./styles";
import styled from "@emotion/styled";
import { typography, fonts } from "../../styles/typography";
import { RiBriefcaseLine } from "react-icons/ri";
import { RiFocus3Line } from "react-icons/ri";



const Title = styled.h1`
  font-family: ${fonts.secondary};
  ${typography.head.xs};
  font-weight: 500;
  color: #373737;
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

function CompanyCard({ company }) {
  
  return (
    <S.Wrapper>
      <S.CompanyCover>
        <p>Imagen</p>
        <S.CompanyInfo>
          <Title>{company}</Title>
          <S.WrapperType>
            <InfoText>
              <RiBriefcaseLine />
               jobs opening
            </InfoText>
          </S.WrapperType>
        </S.CompanyInfo>
      </S.CompanyCover>
      <S.ButtonContainer>
        <p>
          <RiFocus3Line /> Follow
        </p>
        <p>See More</p>
      </S.ButtonContainer>
    </S.Wrapper>
  );
}

export default CompanyCard;
