import * as S from "./styles";
import { ReactComponent as Logo } from "../../styles/img/gtj-logo 1.svg";
import SidebarNav from "../sidebarNav";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { useAuth } from "../../context/auth-context";
import Footer from "../footer";

const CustomLink = styled.a`
  cursor: pointer;
  color: ${colors.gray.medium};
  font-weight: 600;
  &:hover {
    color: ${colors.gray.dark};
  }
`;

function Sidebar() {
  const { logout } = useAuth();
  return (
    <S.Wrapper>
      <S.Shawarma>
        <div style={{padding: "0px 16px"}}>
        <Logo  />
        </div>
        <SidebarNav />
      </S.Shawarma>
      <Footer />
    </S.Wrapper>
  );
}

export default Sidebar;
