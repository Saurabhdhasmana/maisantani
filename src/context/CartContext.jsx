import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (newItem) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === newItem.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === newItem.id ? { ...item, qty: item.qty + (newItem.qty || 1) } : item
        );
      } else {
        return [...prevItems, { ...newItem, qty: newItem.qty || 1 }];
      }
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, qty: qty > 0 ? qty : 1 } : item));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
