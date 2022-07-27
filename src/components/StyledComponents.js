import styled from "styled-components";

// HeaderFooter

export const Title = styled.h1`
    background-color: lightgrey;
    font-style: italic;
    text-align: center;
    margin-top: 20px;
    margin-left: 32px;
    margin-right: 32px;
    border-radius: 10px;
`;
export const SubTitle = styled.h2`
    background-color: lightgrey;
    font-style: italic;
    text-align: center;
    margin-top: 20px;
    margin-left: 32px;
    margin-right: 32px;
    border-radius: 10px;
`;

export const NavBar = styled.nav`
    background-color: teal;
    display: flex;
    justify-content: center;
`;

export const HeaderLink = styled.div`
    margin: 18px 24px;
`;

export const Footer = styled.footer`
    background-color: purple;
    text-align: center;
    font-weight: bold;
`;

// Home for Categories

export const CategoryContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align: center;
`;
  
export const CategoryBox = styled.div`
    border: 2px solid black;
    width: 10%;
    margin: 10px;
    text-align: center;
`;

// Products

export const ProductContainer = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align: center;
`;
  
export const ProductBox = styled.div`
    border: 2px solid black;
    width: 20%;
    margin: 10px;
    padding: 10px;
    text-align: center;
`;

export const ProductImage = styled.img`
    width: 95%;
    height: 200px;
`;