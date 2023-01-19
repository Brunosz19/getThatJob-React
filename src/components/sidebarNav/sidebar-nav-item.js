import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { colors } from "../../styles/colors";
import { typography } from "../../styles/typography";
import { Link, NavLink } from "react-router-dom";

// const currentStyles = (current) => {
//   if (current) {
//     return `
//     background-color: ${colors.pink[400]};
//     color: ${colors.white};
//     &:hover {
//       background-color: ${colors.pink[400]};
//     }
//     `;
//   }
// };

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  display: flex;
  border: none;
  width: 240px;
  gap: 0.75rem;
  text-decoration: none;
  ${typography.text.md};
  color: ${colors.gray[600]};
  font-weight: 500;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: ${colors.pink[100]};
  }
  &:visited {
    color: ${colors.gray[600]};
  }
`;

function SidebarNavItem({ name, icon, to, onClick = {} }) {
  return (
    <div>
      <Link to={to} style={{textDecoration: "none",}}>
        <StyledNavLink
          onClick={onClick}
          to={to}
          style={({ isActive }) => {
            if (!isActive) return;
            return {
              backgroundColor: "#F5F5F6",
              color: "#373737",
              "&:hover": {
                backgroundColor: "#F48FB1",
              },
              "&:visited": {
                color: colors.white,
              },
            };
          }}
          >
          {icon}
          {name}
        </StyledNavLink>
      </Link>
    </div>
  );
}

SidebarNavItem.propTypes = {
  current: PropTypes.bool,
  name: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default SidebarNavItem;