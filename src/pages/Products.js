// Display the image, title, and price of all products in a list or grid.
// When a product is clicked, navigate to the detail page for the selected product.

import React, { useState, useEffect, useContext } from "react";
import {
  SubTitle,
  ProductContainer,
  FilterButton,
  FilterContainer,
} from "../components/StyledComponents";
import ProductCard from "../components/ProductCard";
import { Outlet } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const url = `https://fakestoreapi.com/products`;
      const response = await fetch(url);
      setProducts(await response.clone().json());
      setFilter(await response.json());
      setIsLoading(false);
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
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
                id={product.id}
                cart={cart}
                setCart={setCart}
              />
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
