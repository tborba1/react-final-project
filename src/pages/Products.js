// Display the image, title, and price of all products in a list or grid.
// When a product is clicked, navigate to the detail page for the selected product.

import { useState, useEffect } from "react";
import { 
    SubTitle, 
    ProductImage,
    ProductContainer,
    ProductBox 
} from "../components/StyledComponents";
import { Outlet } from "react-router-dom";

export default function Products () {

    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect(() => {
        const getProducts = async() => {
            const url = `https://fakestoreapi.com/products`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setProducts(data);
            
        }
        getProducts();
    },[]);

    return (
        <>
            <SubTitle>Products:</SubTitle>
            <ProductContainer>
            {products.map((product) => {
                return (
                    <>
                        <ProductBox>
                            <div className="content">
                                <ProductImage src={product.image} />
                                <h5>{product.title}</h5>
                                <p>{product.price}</p>
                            </div>
                        </ProductBox>
                    </>
                )
            })}
            </ProductContainer>
            <Outlet />
        </>
    );
}