import { useContext } from "react";
import { CartContent } from "./StyledComponents";
import { CartContext } from "../contexts/cart/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function CartCard(props) {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart(product);
    console.log(cart);
  };

  return (
    <div>
      <CartContent key={props.product.id}>
        <p>Title: {props.product.title}</p>
        <p>Price: ${props.product.price}</p>
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={() =>
            addToCart(cart.filter((c) => c.id !== props.product.id))
          }
        />
      </CartContent>
    </div>
  );
}
