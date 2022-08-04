// Display a list of the products and their quantities in the cart
// Allow products to be deleted from the cart
import { Outlet } from "react-router-dom";
import { CartContainer, SubTitle } from "../components/StyledComponents";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <>
      <SubTitle>Cart Items</SubTitle>
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
      </CartContainer>
      <Outlet />
    </>
  );
}
