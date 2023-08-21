import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";
import { useProductsContext } from "../context/products_context";
import { useEffect, useState } from "react";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  const { products_loading } = useProductsContext();
  const [showNoProductsMessage, setShowNoProductsMessage] = useState(false);

  useEffect(() => {
    if (!products_loading) {
      const timeoutId = setTimeout(() => {
        if (products.length < 1) {
          setShowNoProductsMessage(true);
        } else {
          setShowNoProductsMessage(false);
        }
      }, 1);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [products_loading, products]);

  if (showNoProductsMessage) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products}></ListView>;
  }

  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
