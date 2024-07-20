import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    // Example product data
    {
      id: 1,
      name: 'Classic Sugar Pootharekulu',
      description: 'Traditional Andhra sweet made with paper-thin rice starch layers.',
      price: 300,
      image: 'https://example.com/classic_sugar_pootharekulu.jpg'
    },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Pootharekulu Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

