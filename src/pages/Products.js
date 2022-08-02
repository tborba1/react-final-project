// Display the image, title, and price of all products in a list or grid.
// When a product is clicked, navigate to the detail page for the selected product.

import React, { useState, useEffect } from "react";
import {
  SubTitle,
  ProductContainer,
  ProductBox,
  FilterButton,
  FilterContainer,
} from "../components/StyledComponents";
import ProductCard from "../components/ProductCard";
import { Outlet } from "react-router-dom";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  let componentMounted = true;
  // console.log(products);

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const url = `https://fakestoreapi.com/products`;
      const response = await fetch(url);
      if (componentMounted) {
        setProducts(await response.clone().json());
        setFilter(await response.json());
        setIsLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = products.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <>
      <SubTitle>Products</SubTitle>
      <FilterContainer>
        <FilterButton onClick={() => setFilter(products)}>All</FilterButton>
        <FilterButton onClick={() => filterProduct("electronics")}>
          Electronics
        </FilterButton>
        <FilterButton onClick={() => filterProduct("jewelery")}>
          Jewelery
        </FilterButton>
        <FilterButton onClick={() => filterProduct("men's clothing")}>
          Men's Clothing
        </FilterButton>
        <FilterButton onClick={() => filterProduct("women's clothing")}>
          Women's Clothing
        </FilterButton>
      </FilterContainer>

      {!isLoading ? (
        <ProductContainer>
          {products?.length > 0 ? (
            filter.map((product) => (
              <ProductBox>
                <ProductCard
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  id={product.id}
                />
              </ProductBox>
            ))
          ) : (
            <div>No results found.</div>
          )}
        </ProductContainer>
      ) : (
        <div style={{ textAlign: "center" }}>Loading...</div>
      )}
      <Outlet />
    </>
  );
}
