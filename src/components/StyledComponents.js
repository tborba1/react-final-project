import styled from "styled-components";

/* Colors
color: #C2BB00; dark lime green - for active page link and CartCircle
color: #003547; dark blue - for Title and Footer background
color: #005E54; teal - for NavBar
*/

export const Colors = {
  active: "#C2BB00",
  main: "#003547",
  nav: "#005E54",
  accent: "lightgrey",
};

// HeaderFooter

export const Title = styled.h1`
  background-color: ${Colors.main};
  text-align: center;
  color: white;
  margin: 0;
  padding: 5px;
`;
export const SubTitle = styled.h2`
  background-color: ${Colors.accent};
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
`;

export const NavBar = styled.nav`
  background-color: ${Colors.nav};
  display: flex;
  justify-content: center;
`;

export const HeaderLink = styled.div`
  margin: 18px 24px;
`;

export const Footer = styled.footer`
  background-color: ${Colors.main};
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
  border: 1px solid ${Colors.accent};
  border-radius: 5px;
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
`;

// Products

export const ProductContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const ProductBox = styled.div`
  border: 1px solid ${Colors.accent};
  border-radius: 5px;
  width: 50vh;
  margin: 10px;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductDetailsBox = styled.div`
  border: 1px solid ${Colors.accent};
  border-radius: 5px;
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
`;

export const AddButton = styled.button`
  font-family: Nunito;
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
  border-bottom: 2px solid ${Colors.accent};
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
  border: solid ${Colors.accent};
`;

export const CartCircle = styled.div`
  background-color: ${Colors.active};
  font-weight: bold;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  text-align: center;
  margin: 18px;
  color: white;
  padding: 0;
`;

// Login Form

export const FormContainer = styled.div`
  padding: 20px;
  width: 30%;
  margin: auto;
  border: 1px solid black;
  border-radius: 5px;
`;

export const LoginButton = styled.button`
  font-family: Nunito;
  margin-top: 5px;
`;
