import { TitleDiv, NavBar, HeaderLink, Footer } from "./StyledComponents";
import { NavLink, Outlet } from "react-router-dom";

export default function HeaderFooter () {

    return (
        <>
        <TitleDiv>HeaderFooter Component</TitleDiv>
        <NavBar>
            <NavLink style={{textDecoration:"none"}} to="/">
                <HeaderLink>Home</HeaderLink>
            </NavLink>
            <NavLink style={{textDecoration:"none"}} to="/products">
                <HeaderLink>Products</HeaderLink>
            </NavLink>
        </NavBar>
        <Outlet />
        <Footer>
            <p>&copy; 2022 Taryn Borba</p>
        </Footer>
        </>
    );
}