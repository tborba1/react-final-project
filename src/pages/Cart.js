// Display a list of the products and their quantities in the cart
// Allow products to be deleted from the cart
import { Outlet } from "react-router-dom";
import { ProductContainer, SubTitle } from "../components/StyledComponents";
import { useContext } from "react";
import { CartContext } from "../contexts/cart/CartContext";
import ProductCard from "../components/ProductCard";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <SubTitle>Cart Items</SubTitle>

      <ProductContainer>
        {cart.length > 0 ? (
          cart.map((product) => (
            <>
              <p>Items in Cart: {cart.length}</p>
              <ProductCard product={product} cart={cart} />
            </>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Your cart is empty.</p>
        )}
      </ProductContainer>
      <Outlet />
    </>
  );
}
