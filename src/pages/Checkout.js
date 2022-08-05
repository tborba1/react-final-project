// Display the name, price, and quantity of all items in the the cart
// Display the total cost of the cart.
// Display a checkout form with inputs for
//      Name
//      Shipping Address
//      Billing Address
//      Credit Card Info (number field only?)
//      Submit button
// Submitting the order form should clear the cart and return the user to the main products page

import { Outlet } from "react-router-dom";
import { CartContainer, SubTitle } from "../components/StyledComponents";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import CartCard from "../components/CartCard";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <SubTitle>Checkout</SubTitle>
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        Items in Cart: {cart.length > 0 ? cart.length : 0}
      </p>
      <CartContainer>
        {cart.length > 0 ? (
          cart.map((product) => (
            <CartCard
              product={product}
              key={product.id}
              cart={cart}
              setCart={setCart}
            />
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Your cart is empty.</p>
        )}
        <p>Cart Total = $</p>
        <FontAwesomeIcon icon={faCreditCard} />
      </CartContainer>
      <Outlet />
    </>
  );
}
