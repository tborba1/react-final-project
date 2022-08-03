import { useState, useContext } from "react";
import {
  DetailsButton,
  ProductContent,
  ProductImage,
} from "./StyledComponents";
import ProductDetailsModal from "./ProductDetailsModal";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cart/CartContext";

export default function ProductCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart(product);
    console.log(cart);
  };

  return (
    <div>
      <ProductImage src={props.image} />
      <ProductContent>
        <p>${props.price}</p>
        <h5>{props.title}</h5>
      </ProductContent>
      <DetailsButton onClick={() => setIsModalOpen(true)}>
        Quick Look
      </DetailsButton>
      <Link to={`/products/${props.id}`}>
        <DetailsButton>Details</DetailsButton>
      </Link>
      {cart.includes(props) ? (
        <button
          onClick={() => addToCart(cart.filter((c) => c.id !== props.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button onClick={() => addToCart([...cart, props])}>Add to Cart</button>
      )}

      {!isModalOpen ? null : (
        <ProductDetailsModal
          isOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          products={props.id}
        />
      )}
    </div>
  );
}
