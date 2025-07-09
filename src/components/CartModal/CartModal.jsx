import React from 'react';
import { useCart } from '../../context/CartContext';
import './CartModal.css';
import { Link } from 'react-router-dom';

const CartModal = ({ onClose }) => {
  const { cartItems, removeItemFromCart, updateQty } = useCart();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <button className="cart-modal-close" onClick={onClose}>×</button>
        <h2 className="cart-modal-title">Shopping Cart</h2>
        <div className="cart-modal-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">⚠️</div>
              <h3>Cart is empty</h3>
              <p>You have no items in your cart.</p>
              <button className="cart-modal-btn" onClick={onClose}>Continue Shopping</button>
            </div>
          ) : (
            <>
              <ul className="cart-items-list">
                {cartItems.map(item => (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div className="cart-item-info">
                      <span className="cart-item-name">{item.name}</span>
                      <span className="cart-item-price">₹{item.price}</span>
                      <div className="cart-item-qty">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} disabled={item.qty <= 1}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                      </div>
                    </div>
                    <button className="cart-item-remove" onClick={() => removeItemFromCart(item.id)}>×</button>
                  </li>
                ))}
              </ul>
              <div className="cart-modal-footer">
                <div className="cart-modal-subtotal">
                  <span className='fw-bold'>Subtotal</span>
                  <span className='fw-bold'>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="cart-modal-actions">
                  <div className='ayur-tpro-btn mb-2'>
                    <Link to="/cart"><button className="ayur-btn" onClick={onClose}>View Cart</button></Link>
                  </div>
                  <Link to="/checkout"><button className="ayur-btn w-100" onClick={onClose}>Check Out</button></Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;