import React from "react";
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeItemFromCart, updateQty } = useCart();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  return (
    <div>
      <div className="ayur-bread-section">
        <div className="ayur-breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ayur-bread-content">
                  <h2>Cart</h2>
                  <div className="ayur-bread-list">
                    <span>
                      <a href="index.html">Home</a>
                    </span>
                    <span className="ayur-active-page">Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ayur-bgcover ayur-cartpage-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="ayur-cart-table table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Product Image</th>
                      <th>Product Name</th>
                      <th>Unit Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length === 0 ? (
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center' }}>Your cart is empty.</td>
                      </tr>
                    ) : (
                      cartItems.map((item, idx) => (
                        <tr key={item.id}>
                          <td>{idx + 1}</td>
                          <td>
                            <img src={item.image} alt={item.name} style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8 }} />
                          </td>
                          <td>
                            <h2 style={{ fontSize: 18 }}>{item.name}</h2>
                          </td>
                          <td>₹{item.price}</td>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <button onClick={() => updateQty(item.id, item.qty - 1)} disabled={item.qty <= 1}>-</button>
                              <input type="number" value={item.qty} min="1" style={{ width: 40, textAlign: 'center' }} readOnly />
                              <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                            </div>
                          </td>
                          <td>₹{(item.price * item.qty).toFixed(2)}</td>
                          <td>
                            <button className="ayur-tab-delete" onClick={() => removeItemFromCart(item.id)}>
                              <img src="/src/assets/images/delete.png" alt="delete" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="ayur-carttotal-wrapper">
                <div className="ayur-cart-total">
                  <h2>Cart Totals</h2>
                  <table className="table table-bordere">
                    <tbody>
                      <tr className="ayur-cartsubtotal">
                        <th>Subtotal</th>
                        <td><span className="amount">₹{subtotal.toFixed(2)}</span></td>
                      </tr>
                      <tr className="ayur-ordertotal">
                        <th>Total</th>
                        <td><span className="amount">₹{subtotal.toFixed(2)}</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="ayur-checkout-btn">
                    <Link to="/checkout" className="ayur-btn">Proceed to Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;