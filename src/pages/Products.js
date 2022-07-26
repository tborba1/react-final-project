// Display the image, title, and price of all products in a list or grid.
// When a product is clicked, navigate to the detail page for the selected product.

import { ProductsDiv } from "../components/StyledComponents";
import { Outlet } from "react-router-dom";

export default function Products () {

    return (
        <div style={{ backgroundColor: "yellow"}}>
            <ProductsDiv>Products Page</ProductsDiv>
            <p>More text here</p>
            <p>More text here</p>
            <p>More text here</p>
            <Outlet />
        </div>
    );
}