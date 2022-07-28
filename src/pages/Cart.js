// Display a list of the products and their quantities in the cart
// Allow products to be deleted from the cart

import { Outlet } from "react-router-dom";

export default function Cart () {
    
    return (
        <>
            <p style={{textAlign: "center"}}>Your cart is empty.</p>
            <Outlet />
        </>
    );
}