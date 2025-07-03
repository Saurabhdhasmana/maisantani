import React from 'react';
import { FaHome, FaUser, FaShoppingCart, FaHeart, FaShoppingBag } from 'react-icons/fa';
import './BottomNavbar.css';

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar d-md-none">
      <div className="nav-item">
        <FaHome />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <FaShoppingBag />
        <span>Shop</span>
      </div>
      <div className="nav-item">
        <FaShoppingCart />
        <span>Cart</span>
      </div>
      <div className="nav-item">
        <FaUser />
        <span>Account</span>
      </div>
    </div>
  );
};

export default BottomNavbar;
