import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="border-b py-2 flex justify-between">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

