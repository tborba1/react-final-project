import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

export default function HeaderFooter () {

    const NavBar = styled.nav`
    background-color: teal;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    `;

    const Footer = styled.footer`
    background-color: purple;
    text-align: center;
    font-weight: bold;
    `;
    
    const TitleDiv = styled.h1`
    background-color: lightgrey;
    font-style: italic;
    text-align: center;
    margin-top: 20px;
    margin-left: 32px;
    margin-right: 32px;
    border-radius: 10px;
    `;

    return (
        <div>
        <TitleDiv>HeaderFooter Component</TitleDiv>
        <NavBar>
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
        </NavBar>
        <Outlet />
        <Footer>
            <p>&copy; 2022 Taryn Borba</p>
        </Footer>
        </div>
    );
}
