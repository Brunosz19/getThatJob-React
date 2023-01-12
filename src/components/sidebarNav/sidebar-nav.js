import styled from "@emotion/styled";
import { BsSearch } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { RiFocus3Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import SidebarNavItem from "./sidebar-nav-item";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function SidebarNav() {
  const navigation = [
    {
      name: "Find that job",
      to: "/find-that-job",
      icon: <BsSearch />,
    },
    {
      name: "Your aplications",
      icon: <RiArticleLine />,
      to: "/your-aplications",
    },
    { name: "Following", to: "/following", icon: <RiFocus3Line /> },
    {
      name: "Profile",
      icon: <BiUser />,
      to: "/profile",
    },
    {
      name: "Log out",
      icon: <BiLogOutCircle />,
      to: "/logout",
    },
  ];

  return (
    <Wrapper>
      {navigation.map((nav) => (
        <SidebarNavItem key={nav.name} {...nav} />
      ))}
    </Wrapper>
  );
}

export default SidebarNav;
