import { useState, useEffect } from "react";
import {
  CategoryBox,
  CategoryContainer,
  SubTitle,
} from "../components/StyledComponents";
import { Outlet } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(categories);

  useEffect(() => {
    setIsLoading(true);
    const getCategories = async () => {
      const url = `https://fakestoreapi.com/products/categories`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setCategories(data);
      setIsLoading(false);
    };
    getCategories();
  }, []);

  return (
    <>
      <SubTitle>Categories</SubTitle>
      {!isLoading ? (
        <CategoryContainer>
          {categories?.length > 0 ? (
            categories?.map((category) => (
              <>
                <CategoryBox>
                  <div>
                    <h3>{category}</h3>
                  </div>
                </CategoryBox>
              </>
            ))
          ) : (
            <div>No results found.</div>
          )}
        </CategoryContainer>
      ) : (
        <div style={{ textAlign: "center" }}>Loading...</div>
      )}
      <Outlet />
    </>
  );
}
