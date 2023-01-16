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
import { logout } from "../../services/auth-services";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function SidebarNav() {
  const { user } = useAuth();

  function handleLogout(){
    logout()

    window.location.reload();
  }

  const navigationPro = [
    {
      name: "Find that job",
      to: "/find-that-job",
      icon: <BsSearch />,
    },
    {
      name: "Your applications",
      icon: <RiArticleLine />,
      to: "/your-applications",
    },
    { name: "Following", to: "/following", icon: <RiFocus3Line /> },
    {
      name: "Profile",
      icon: <BiUser />,
      to: "/professional/profile",
    },
    {
      name: "Logout",
      icon: <BiLogOutCircle />,
      to: "/landing",
      onClick: handleLogout
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
      to: "/new-job",
      icon: <AiOutlineFileAdd />,
    },
    {
      name: "Profile",
      icon: <BiUser />,
      to: "/recruiter/profile",
    },
    {
      name: "Logout",
      icon: <BiLogOutCircle />,
      to: "/landing",
      onClick: handleLogout
    },
  ];

  const navigation =
    user.role === "professional" ? navigationPro : navigationRec;

  return (
    <Wrapper>
      {navigation.map((nav) => (
        <SidebarNavItem key={nav.name} {...nav} />
      ))}
    </Wrapper>
  );
}

export default SidebarNav;
