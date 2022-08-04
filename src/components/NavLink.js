import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink as RouterNavLink } from "react-router-dom";
import { HeaderLink } from "./StyledComponents";

export default function NavLink({ route, label }) {
  function styleByActiveStatus(isActive) {
    return isActive
      ? { fontWeight: "bold", textDecoration: "none", color: "#C2BB00" }
      : { fontWeight: "normal", textDecoration: "none", color: "white" };
  }

  return (
    <>
      <RouterNavLink
        to={route}
        style={({ isActive }) => styleByActiveStatus(isActive)}
      >
        <HeaderLink>
          {label === "Cart" ? (
            <FontAwesomeIcon className="Cart" icon={faCartShopping} />
          ) : (
            label
          )}
        </HeaderLink>
      </RouterNavLink>
    </>
  );
}
