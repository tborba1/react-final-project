import { Title, NavBar, Footer } from "./StyledComponents";
import { Outlet } from "react-router-dom";
import NavLink from "./NavLink";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function HeaderFooter() {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <Title>Fake API Store</Title>
      <NavBar>
        <NavLink route="/" label="Home" />
        <NavLink route="/products" label="Products" />
        <NavLink route="/cart" label="Cart" />
        {!loggedInUser && <NavLink route="/login" label="Login" />}
      </NavBar>
      <Outlet />
      <Footer>
        <p>&copy; 2022 Taryn Borba</p>
      </Footer>
    </>
  );
}
