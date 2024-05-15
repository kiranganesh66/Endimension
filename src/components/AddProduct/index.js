// components/AddProduct/index.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product submitted:", { category, name, description, price });
    // Add logic to submit product
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Back to Product List</Link>
    </div>
  );
};

export default AddProduct;
