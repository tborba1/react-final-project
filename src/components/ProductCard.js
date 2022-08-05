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
          <h4 style={{ marginBottom: "2px" }}>{props.title}</h4>
          <p>${props.price}</p>
          <Link to={`/products/${props.id}`}>
            <DetailsButton>Details</DetailsButton>
          </Link>
        </ProductContent>
      </ProductBox>
    </>
  );
}
