import { useState, useEffect } from "react";
import { FilterButton, FilterContainer } from "../components/StyledComponents";

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
      {!isLoading ? (
        <FilterContainer>
          {categories?.length > 0 ? (
            categories?.map((category) => (
              <>
                <FilterButton>{category}</FilterButton>
              </>
            ))
          ) : (
            <div>No results found.</div>
          )}
        </FilterContainer>
      ) : (
        <div style={{ textAlign: "center" }}>Loading...</div>
      )}
    </>
  );
}
