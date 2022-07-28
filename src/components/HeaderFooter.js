import { Title, NavBar, Footer } from "./StyledComponents";
import { Outlet } from "react-router-dom";
import NavLink from "./NavLink";

export default function HeaderFooter () {

    return (
        <>
        <Title>Fake API Store</Title>
        <NavBar>
            <NavLink route="/" label="Home" />
            <NavLink route="/products" label="Products" />
            <NavLink route="/cart" label="Cart" />
            <NavLink route="/login" label="Login" />
        </NavBar>
        <Outlet />
        <Footer>
            <p>&copy; 2022 Taryn Borba</p>
        </Footer>
        </>
    );
}
