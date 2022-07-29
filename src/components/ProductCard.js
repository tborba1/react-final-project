import { useState } from "react";
import {
  DetailsButton,
  ProductContent,
  ProductImage,
} from "./StyledComponents";
import ProductDetailsModal from "./ProductDetailsModal";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <DetailsButton>Buy Now</DetailsButton>
      </Link>
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
