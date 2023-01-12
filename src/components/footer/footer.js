import styled from "@emotion/styled";
import * as S from "./styles";
import { fonts, typography } from "../../styles/typography";
import { DiRuby } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";

const Text = styled.p`
  font-family: ${fonts.primary};
  ${typography.text.xs}
  color: #616161;
  font-weight: 400;
`;

function Footer() {
  return (
    <S.Wrapper>
      <Text>© 2023 - Get That Job</Text>
      <Text>Codeable - Cohort 8 Final Project</Text>
      <S.Members>
        <Text>Build with ❤ by:</Text>
        <S.WrapperIcon>
          <AiOutlineGithub />
          <Text>Bruno Saenz</Text>
        </S.WrapperIcon>
        <S.WrapperIcon>
          <AiOutlineGithub />
          <Text>Diego Miñano</Text>
        </S.WrapperIcon>
        <S.WrapperIcon>
          <AiOutlineGithub />
          <Text>Carlos Mendoza</Text>
        </S.WrapperIcon>
      </S.Members>
      <S.SourceCode>
        <S.WrapperIcon>
          <DiRuby />
          <Text>Ruby on Rails REST API</Text>
        </S.WrapperIcon>
        <S.WrapperIcon>
          <FaReact />
          <Text>React Responsive SPA</Text>
        </S.WrapperIcon>
      </S.SourceCode>
    </S.Wrapper>
  );
}

export default Footer;
