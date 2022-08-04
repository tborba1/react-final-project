import {
  DetailsButton,
  ProductBox,
  ProductContent,
  ProductImage,
} from "./StyledComponents";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <>
      <ProductBox>
        <ProductImage src={props.image} />
        <ProductContent>
          <p>${props.price}</p>
          <h5>{props.title}</h5>
          <Link to={`/products/${props.id}`}>
            <DetailsButton>Details</DetailsButton>
          </Link>
        </ProductContent>
      </ProductBox>
    </>
  );
}
