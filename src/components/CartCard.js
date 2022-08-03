import { useContext } from "react";
import { CartContent } from "./StyledComponents";
import { CartContext } from "../contexts/cart/CartContext";

export default function CartCard(props) {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart(product);
    console.log(cart);
  };

  return (
    <div>
      <CartContent>
        <table>
          <thead>
            <th>Product Title</th>
            <th>Product Price</th>
            <th>Remove from Cart</th>
          </thead>
          <tbody>
            <tr key={props.product.id}>
              <td>{props.product.title}</td>
              <td>${props.product.price}</td>
              <td>
                <button
                  onClick={() =>
                    addToCart(cart.filter((c) => c.id !== props.product.id))
                  }
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </CartContent>
    </div>
  );
}
