import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  // Fetch product details by ID
  // Example product data
  const product = {
    id,
    name: 'Classic Sugar Pootharekulu',
    description: 'Traditional Andhra sweet made with paper-thin rice starch layers.',
    price: 300,
    image: 'https://example.com/classic_sugar_pootharekulu.jpg'
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p>{product.description}</p>
      <p className="text-lg font-semibold">₹{product.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Add to Cart</button>
    </div>
  );
};

export default ProductPage;

