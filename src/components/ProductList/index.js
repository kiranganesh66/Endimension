// components/ProductList/index.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";

import { getProductData } from "../../data/products";
import "antd/dist/antd.css";
import "./index.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductData();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <Link to="/add-product">Add Product</Link>
      <Table dataSource={products} columns={columns} />
    </div>
  );
};

export default ProductList;
