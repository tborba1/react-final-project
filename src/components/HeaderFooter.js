import { Title, NavBar, HeaderLink, Footer } from "./StyledComponents";
import { NavLink, Outlet } from "react-router-dom";

function styleByActiveStatus(isActive) {
    return isActive
    ? {fontWeight: "bold", textDecoration: "none", color: "#C2BB00"}
    : {fontWeight: "normal", textDecoration: "none", color: "white"}

}

export default function HeaderFooter () {

    return (
        <>
        <Title>Fake API Store</Title>
        <NavBar>
            <NavLink to="/" style={({ isActive} ) => styleByActiveStatus(isActive)} >
                <HeaderLink>Home</HeaderLink>
            </NavLink>
            <NavLink to="/products" style={({ isActive} ) => styleByActiveStatus(isActive)}>
                <HeaderLink>Products</HeaderLink>
            </NavLink>
            <NavLink to="/cart" style={({ isActive} ) => styleByActiveStatus(isActive)}>
                <HeaderLink>Cart</HeaderLink>
            </NavLink>
        </NavBar>
        <Outlet />
        <Footer>
            <p>&copy; 2022 Taryn Borba</p>
        </Footer>
        </>
    );
}
