// data/products.js
const products = [
  {
    id: 1,
    category: "Electronics",
    name: "Smartphone",
    description: "A powerful smartphone with advanced features.",
    price: 499.99,
  },
  {
    id: 2,
    category: "Clothing",
    name: "T-shirt",
    description: "A comfortable cotton t-shirt for everyday wear.",
    price: 19.99,
  },
  // Add more products as needed
];

export const getProductData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
