// Display the image, title, and price of all products in a list or grid.
// When a product is clicked, navigate to the detail page for the selected product.

import { useState, useEffect } from "react";
import { 
    SubTitle, 
    ProductImage,
    ProductContainer,
    ProductBox,
    ProductContent, 
    DetailsButton
} from "../components/StyledComponents";
import { Outlet } from "react-router-dom";
import ProductDetailsModal from "../components/ProductDetailsModal";

export default function Products (props) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(products);

    useEffect(() => {
        setIsLoading(true);
        const getProducts = async() => {
        const url = `https://fakestoreapi.com/products`;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setProducts(data);
        setIsLoading(false);
        }
        getProducts();
    },[]);

    return (
        <>
            <SubTitle>Products</SubTitle>
            {!isLoading ? (
                <ProductContainer>
                    {products?.length > 0 ? (
                        products?.map((product) => (
                            <>
                                <ProductBox>
                                    <div>
                                        <ProductImage src={product.image} />
                                        <ProductContent>
                                            <p>${product.price}</p>
                                            <h5>{product.title}</h5>
                                        </ProductContent>
                                        <DetailsButton onClick={() => setIsModalOpen(true)}>Details</DetailsButton>
                                        {!isModalOpen
                                        ? null
                                        : <ProductDetailsModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} details={props} />
                                        }
                                    </div>
                                </ProductBox>
                            </>
                ))
            ): (
                <div>No results found.</div>
            )}
            </ProductContainer>
            ): (
                <div style={{textAlign: "center"}}>Loading...</div>
            )}
            <Outlet />
        </>
    );
}