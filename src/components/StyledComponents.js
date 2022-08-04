import styled from "styled-components";

// HeaderFooter

export const Title = styled.h1`
  background-color: #003547;
  font-style: italic;
  text-align: center;
  color: white;
  margin: 0;
  padding: 5px;
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
`;

export const ProductBox = styled.div`
  border: 2px solid lightgrey;
  width: 50vh;
  margin: 10px;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductDetailsBox = styled.div`
  border: 2px solid lightgrey;
  width: 95vw;
  height: 85vh;
  margin: 10px;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

export const ProductContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductDetailsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;

export const ProductImage = styled.img`
  width: 60%;
  height: 100%;
`;

export const DetailsButton = styled.button`
  font-family: Nunito;
  background-color: #c2bb00;
`;

export const AddButton = styled.button`
  font-family: Nunito;
  background-color: #588157;
  color: white;
`;

// Cart

export const CartContainer = styled.div`
  width: 80%
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
`;

export const CartDetails = styled.div`
  display: flex;
  border-bottom: 2px solid lightgrey;
  padding: 10px;
`;

export const CartContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin-right: 50px;
`;

export const CartImage = styled.img`
  width: 5vw;
  padding-right: 15px;
  border: solid lightgrey;
`;

export const CartCircle = styled.div`
  background-color: #ed8b16;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  margin: 18px;
  color: white;
  padding: 0;
`;

// Login Form

export const FormContainer = styled.div`
  background-color: #b7bf99;
  padding: 20px;
  width: 30%;
  margin: auto;
  border: 2px solid black;
`;

export const LoginButton = styled.button`
  font-family: Nunito;
  background-color: #005e54;
  color: white;
  margin-top: 5px;
`;

// export const Colors = {
//   primary: "",
//   secondary: "",
//   button: "",
// };

/* Color Theme Swatches in Hex 
color: #003547; dark blue
color: #005E54; teal
color: #588157; dark olive green
color: #C2BB00; dirty lime green
color: #B7BF99; light dirty lime green
color: #C43302; dark red
color: #ED8B16; tangerine 
color: #EDAA25; dark tangerine
*/
