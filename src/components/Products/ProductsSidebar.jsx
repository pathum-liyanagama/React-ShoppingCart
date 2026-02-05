import React, { useEffect, useState } from "react";
import "./ProductsSidebar.css";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import apiClient from "../../utils/api-client";

const ProductsSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiClient
      .get("/category")
      .then((response) => {
        console.log(response);
        setCategories(response.data);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error fetching categories:", err);
      });
  }, []);

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories.map((category) => (
          <LinkWithIcon
            key={category._id}
            id={category._id}
            title={category.name}
            link={`products?category=${category.name}`}
            icon={`http://localhost:5001/category/${category.image}`}
            sidebar={true}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
