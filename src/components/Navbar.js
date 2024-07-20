import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Pootharekulu Store</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/products" className="hover:underline">Products</Link></li>
          <li><Link to="/cart" className="hover:underline">Cart</Link></li>
          <li><Link to="/profile" className="hover:underline">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

