// Display a list of the products and their quantities in the cart
// Allow products to be deleted from the cart
import { Outlet } from "react-router-dom";
import { SubTitle } from "../components/StyledComponents";

export default function Cart() {
  return (
    <>
      <SubTitle>Cart Items</SubTitle>
      <p style={{ textAlign: "center" }}>Your cart is empty.</p>
      <Outlet />
    </>
  );
}
