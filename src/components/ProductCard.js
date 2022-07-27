import { useState } from "react";
import { DetailsButton, ProductBox, ProductContent, ProductImage } from "./StyledComponents";
import ProductDetailsModal from "./ProductDetailsModal";

export default function ProductCard(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <ProductImage src={props.image} />
                <ProductContent>
                <p>${props.price}</p>
                <h5>{props.title}</h5>
                </ProductContent>
            <DetailsButton onClick={() => setIsModalOpen(true)}>Details</DetailsButton>
            {!isModalOpen
            ? null
            : <ProductDetailsModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} products={props.id} />
            }
        </div>
    );
}