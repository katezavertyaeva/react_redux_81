import { StyledNavLink } from "./styles";
import type { NavigationLinkProps } from "./types";

function NavigationLink({to, linkName}: NavigationLinkProps) {
  return (
    <StyledNavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
        color: isActive ? "rgb(28, 111, 83)" : "rgb(28, 85, 111)",
      })}
    >
      {linkName}
    </StyledNavLink>
  );
}

export default NavigationLink