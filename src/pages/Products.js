// Display the image, title, and price of all products in a list or grid.
// When a product is clicked, navigate to the detail page for the selected product.

import { useState, useEffect } from "react";
import { SubTitle } from "../components/StyledComponents";
import { Outlet } from "react-router-dom";

export default function Products () {

    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() => {
        const getCategories = async() => {
            const url = `https://fakestoreapi.com/products/categories`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            setCategories(data);
            
        }
        getCategories();
    },[]);

    return (
        <div style={{ backgroundColor: "yellow"}}>
            <SubTitle>Product Categories:</SubTitle>
            {categories.map((category) => {
                return (
                    <>
                        <div className="box">
                            <div className="content">
                                <h3>{category}</h3>
                            </div>
                        </div>
                    </>
                )
            })}
            <Outlet />
        </div>
    );
}