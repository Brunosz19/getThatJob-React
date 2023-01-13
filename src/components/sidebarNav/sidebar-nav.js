import styled from "@emotion/styled";
import { BsSearch } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { RiFocus3Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { CgBriefcase } from "react-icons/cg";
import { AiOutlineFileAdd } from "react-icons/ai";
import SidebarNavItem from "./sidebar-nav-item";
import { useAuth } from "../../context/auth-context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function SidebarNav() {
  const { user } = useAuth();

  const navigationPro = [
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

  const navigationRec = [
    {
      name: "Job Posting",
      to: "/job-posting",
      icon: <CgBriefcase />,
    },
    {
      name: "Create New Job",
      to: "/create-new-job",
      icon: <AiOutlineFileAdd />,
    },
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

  const navigation =
    Object.keys(user).length === 10 ? navigationPro : navigationRec;

  return (
    <Wrapper>
      {navigation.map((nav) => (
        <SidebarNavItem key={nav.name} {...nav} />
      ))}
    </Wrapper>
  );
}

export default SidebarNav;
