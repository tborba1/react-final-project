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
  ProductContent,
  AddButton,
} from "../components/StyledComponents";
import { CartContext } from "../contexts/cart/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = (details) => {
    setCart(details);
    console.log(cart);
  };

  useEffect(() => {
    setIsLoading(true);
    const getDetails = async () => {
      const url = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setDetails(data);
      setIsLoading(false);
    };
    getDetails();
  }, [id]);

  return (
    <>
      <SubTitle>Product Details</SubTitle>
      <NavLink route="/products" label="Back to Products" />
      <ProductDetailsBox>
        <ProductImage src={details.image} />
        <ProductContent>
          <p>${details.price}</p>
          <h3>{details.title}</h3>
          <p style={{ fontWeight: "bold" }}>Category:</p>
          <p>{details.category}</p>
          <p style={{ fontWeight: "bold" }}>Description:</p>
          <p>{details.description}</p>
        </ProductContent>
        <AddButton onClick={() => addToCart([...cart, details])}>
          Add to Cart
        </AddButton>
      </ProductDetailsBox>
    </>
  );
}
