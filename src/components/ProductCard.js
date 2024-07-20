import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 m-4 shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h3 className="text-xl font-bold mt-2">{product.name}</h3>
      <p>{product.description}</p>
      <p className="text-lg font-semibold">₹{product.price}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">Add to Cart</button>
    </div>
  );
};

export default ProductCard;

