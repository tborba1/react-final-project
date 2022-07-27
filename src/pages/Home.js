import { useState, useEffect } from "react";
import { 
    CategoryBox, 
    CategoryContainer, 
    SubTitle 
} from "../components/StyledComponents";
import { Outlet } from "react-router-dom";

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
            <SubTitle>Categories</SubTitle>
            <CategoryContainer>
            {categories.map((category) => {
                return (
                    <>
                        <CategoryBox>
                            <div className="content">
                                <h3>{category}</h3>
                            </div>
                        </CategoryBox>
                    </>
                )
            })}
            </CategoryContainer>
            <Outlet />
        </>
    );
}