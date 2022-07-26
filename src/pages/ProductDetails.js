// Display all product details (image, title, price, category, description)
// Display a "Quantity" input with default value of 1
// Display an "Add to Cart" button
// When the "Add to Cart" button is clicked, the product and quantity should be added to the cart

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavLink from "../components/NavLink";
import {
  SubTitle,
  ProductDetailsBox,
  ProductImage,
  AddButton,
  ProductDetailsContent,
} from "../components/StyledComponents";
import { CartContext } from "../contexts/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (details) => {
    setCart(details);
    console.log(cart);
  };

  useEffect(() => {
    const getDetails = async () => {
      const url = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setDetails(data);
    };
    getDetails();
  }, [id]);

  return (
    <>
      <SubTitle>Product Details</SubTitle>
      <NavLink route="/products" label="Back to Products" />
      <ProductDetailsBox>
        <ProductImage src={details.image} />
        <ProductDetailsContent>
          <h3 style={{ marginBottom: "2px" }}>{details.title}</h3>
          <p style={{ fontWeight: "bold" }}>${details.price}</p>
          <AddButton onClick={() => addToCart([...cart, details])}>
            Add to Cart
          </AddButton>
          <p>{details.description}</p>
          <p>Category: {details.category}</p>
        </ProductDetailsContent>
      </ProductDetailsBox>
    </>
  );
}
