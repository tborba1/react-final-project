import { useState, useEffect } from "react";
import { SubTitle } from "../components/StyledComponents";
import { Outlet, Link } from "react-router-dom";

export default function Categories () {

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
        <>
            <SubTitle>Categories:</SubTitle>
            <div className="container">
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
            </div>
            <Outlet />
        </>
    );
}