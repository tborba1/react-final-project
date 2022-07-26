// Display the image, title, and price of all products in a list or grid.
// When a product is clicked, navigate to the detail page for the selected product.

import styled from "styled-components";
import { Outlet } from "react-router-dom";

export default function Products () {

    const ProductsDiv = styled.h2`
    background-color: lightgrey;
    font-style: italic;
    text-align: center;
    margin-top: 20px;
    margin-left: 32px;
    margin-right: 32px;
    border-radius: 10px;
    `;

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