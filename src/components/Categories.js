import React from "react";

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => (
  <section className="category-buttons">
    {/* {categories.map((cat) => (
      <button
        key={cat.id}
        className={`category-btn ${selectedCategory === cat.id ? "selected" : ""}`}
        onClick={() => setSelectedCategory(cat.id)}
      >
        {cat.label}
      </button>
    ))} */}
  </section>
);

export default Categories;
