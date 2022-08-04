import { useContext } from "react";
import { CartContent, CartDetails, CartImage } from "./StyledComponents";
import { CartContext } from "../contexts/CartContext";
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
      <CartDetails key={props.product.id}>
        <CartImage src={props.product.image} />
        <CartContent>
          <p>{props.product.title}</p>
          <p style={{ paddingLeft: "20px" }}>${props.product.price}</p>
        </CartContent>
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ paddingLeft: "20px", marginTop: "15px" }}
          onClick={() =>
            addToCart(cart.filter((c) => c.id !== props.product.id))
          }
        />
      </CartDetails>
    </div>
  );
}
