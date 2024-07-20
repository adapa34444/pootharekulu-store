import React from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  const items = [
    // Example cart data
    {
      id: 1,
      name: 'Classic Sugar Pootharekulu',
      price: 300
    },
    // Add more items as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <Cart items={items} />
    </div>
  );
};

export default CartPage;

