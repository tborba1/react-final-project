import styled from "styled-components";

// HeaderFooter

export const Title = styled.h1`
  background-color: lightgrey;
  font-style: italic;
  text-align: center;
  margin-top: 20px;
  // margin-left: 32px;
  // margin-right: 32px;
  // border-radius: 10px;
`;
export const SubTitle = styled.h2`
  background-color: lightgrey;
  font-style: italic;
  text-align: center;
  margin-top: 20px;
  // margin-left: 32px;
  // margin-right: 32px;
  // border-radius: 10px;
`;

export const NavBar = styled.nav`
  background-color: #005e54;
  display: flex;
  justify-content: center;
`;

export const HeaderLink = styled.div`
  margin: 18px 24px;
  // color: white;
`;

export const Footer = styled.footer`
  background-color: #003547;
  color: white;
  text-align: center;
  font-weight: bold;
`;

// Home for Categories

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CategoryBox = styled.div`
  border: 2px solid black;
  width: 10%;
  margin: 10px;
  text-align: center;
`;

// Filters

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilterButton = styled.button`
  margin: 10px;
  font-family: Nunito;
  background-color: #ed8b16;
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

export const ProductDetailsBox = styled.div`
  border: 2px solid black;
  width: 50%;
  margin: 10px;
  padding: 10px;
  text-align: center;
`;

export const ProductContent = styled.div`
  // background-color: #b7bf99;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 50%;
  height: 100%;
`;

export const DetailsButton = styled.button`
  font-family: Nunito;
  background-color: #c2bb00;
`;

// Cart

export const CartContent = styled.div`
  background-color: #edaa25;
  text-align: left;
`;

// Login Form

export const FormContainer = styled.div`
  background-color: #b7bf99;
  // width: 50%;
  // height: 50%;
  margin-left: 200px;
  margin-right: 200px;
  padding: 50px;
  border: 2px solid black;
`;

export const LoginButton = styled.button`
  font-family: Nunito;
  background-color: #005e54;
  color: white;
`;

/* Color Theme Swatches in Hex 
color: #003547; dark blue
color: #005E54; teal
color: #C2BB00; dirty lime green
color: #B7BF99; light dirty lime green
color: #E1523D; bright red
color: #C43302; dark red
color: #ED8B16; tangerine 
color: #EDAA25; dark tangerine
*/
