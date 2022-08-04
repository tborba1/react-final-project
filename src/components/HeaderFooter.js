import { Title, NavBar, Footer, CartCircle } from "./StyledComponents";
import { Outlet } from "react-router-dom";
import NavLink from "./NavLink";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function HeaderFooter() {
  const { loggedInUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  return (
    <>
      <Title>Taryn's Store</Title>
      <NavBar>
        <NavLink route="/" label="Home" />
        <NavLink route="/products" label="Products" />
        <NavLink route="/cart" label="Cart" />
        <CartCircle>{cart.length}</CartCircle>
        {!loggedInUser && <NavLink route="/login" label="Login" />}
      </NavBar>
      <Outlet />
      <Footer>
        <p>&copy; 2022 Taryn Borba</p>
        <a href="https://github.com/tborba1" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faSquareGithub} size="xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/taryn-borba-894280119/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
      </Footer>
    </>
  );
}
