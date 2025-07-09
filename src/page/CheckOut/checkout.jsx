import React, { useState } from "react";
import { useCart } from '../../context/CartContext';
import { Link } from "react-router-dom";
import axios from 'axios'
import './checkout.css';




const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  // Form states
  const [name, setName] = useState("");
  const [shipping, setShipping] = useState("");

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");



  // Calculate subtotal and totalAmount from cartItems
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
  const totalAmount = subtotal; // add shipping/discount if needed

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      let paymentMethodValue = paymentMethod;
      if (paymentMethod === "Credit Card") paymentMethodValue = "credit_card";
      if (paymentMethod === "Paypal") paymentMethodValue = "paypal";
      if (paymentMethod === "Cheque Payment") paymentMethodValue = "cheque_payment";
      if (paymentMethod === "Direct Bank Transfer") paymentMethodValue = "bank_transfer";

      // Prepare items array for backend (map to schema fields)
      const items = cartItems.map(item => ({
        productId: item.id,
        name: item.name,
        productImage: item.image, // map 'image' to 'productImage'
        price: item.price,
        quantity: item.qty, // map 'qty' to 'quantity'
        subtotal: item.price * (item.qty || 1),
        color: item.color || '',
        size: item.size || ''
      }));

      const response = await axios.post("https://mai-santani-backend-new.onrender.com/orders/create", {
        customer: {
          name,
          email,
          contact,
          shippingAddress: {
            street: shipping,
            city,
            state,
            zipCode,
            country,
          },
        },
        items,
        payment: {
          method: paymentMethodValue,
          status: "Pending"
        },
        subtotal,
        totalAmount,
        discount: { amount: 0 },
        shipping: { method: "Standard" }
      });
      clearCart();
      console.log(response.data);
      alert("Order placed successfully!");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Order failed!");
    }
  };

  return (
    <div>

    <div className="ayur-bread-section">
        <div className="ayur-breadcrumb-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="ayur-bread-content">
                            <h2>Checkout</h2>
                            <div className="ayur-bread-list">
                                <span>
                                    <a href="index.html">Home</a>
                                </span>
                                <span className="ayur-active-page">Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="ayur-bgcover ayur-checkout-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="ayur-checkout-table-wrapper">
                        <form className="ayur-checkout-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="ayur-checkout-head">
                                        <h3>Billing Details</h3>
                                    </div>
                                    <div className="row">
                                        
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>First Name <span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" value={name} onChange={(e)=>setName(e.target.value)}/>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Last Name <span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div> */}
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Shipping Address</label>
                                                <input type="text" className="form-control" placeholder="" value={shipping} onChange={(e)=>setShipping(e.target.value)}/>
                                            </div>
                                        </div>
                                       
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Town / City<span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" value={city} onChange={(e)=>setCity(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Country / Region <span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                                            </div>
                                        </div>
                                       
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Email<span>*</span></label>
                                                <input type="email" className="form-control" placeholder="" value={email} onChange={e => setEmail(e.target.value)} required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Contact<span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" value={contact} onChange={(e)=>setContact(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="ayur-checkout-head">
                                        <h3>Shipping Details</h3>
                                    </div>
                                    <div className="row">
                                       
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>State</label>
                                                <input type="text" className="form-control" placeholder="" value={state} onChange={(e)=>setState(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Postcode / Zip Code</label>
                                                <input type="text" className="form-control" placeholder="" value={zipCode} onChange={(e)=>setZipCode(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-checkout-head ayur-woocommerce-payment">
                                                <h3>Payment Method</h3>
                                                <div className="payment-method methods">
                                                    <div className="ayur-checkout-payment">
                                                        <div className="ayur-chkout-flex">
                                                            <div className="ayur-rate">
                                                                <div className="custom-checkbox">
                                                                    <input type="radio" value="Direct Bank Transfer" id="c1" name="checkout" checked={paymentMethod === "Direct Bank Transfer"} onChange={e => setPaymentMethod(e.target.value)} />
                                                                    <label for="c1"></label>
                                                                </div>
                                                            </div>
                                                            <h4>Direct Bank Transfer</h4>                                                            
                                                        </div>
                                                        <div className="payment_box" data-period="dbt">
                                                            <p className="ayur-para">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </div>
                                                    <div className="ayur-checkout-payment">
                                                        <div className="ayur-chkout-flex">
                                                            <div className="ayur-rate">
                                                                <div className="custom-checkbox">
                                                                    <input type="radio" value="Cheque Payment" id="c2" name="checkout" checked={paymentMethod === "Cheque Payment"} onChange={e => setPaymentMethod(e.target.value)} />
                                                                    <label for="c2"></label>
                                                                </div>
                                                            </div>
                                                            <h4>Cheque Payment</h4>                                                            
                                                        </div>
                                                        <div className="payment_box" data-period="cheque_payment">
                                                            <p className="ayur-para">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </div>
                                                    <div className="ayur-checkout-payment">
                                                        <div className="ayur-chkout-flex">
                                                            <div className="ayur-rate">
                                                                <div className="custom-checkbox">
                                                                    <input type="radio" value="Credit Card" id="c3" name="checkout" checked={paymentMethod === "Credit Card"} onChange={e => setPaymentMethod(e.target.value)} />
                                                                    <label for="c3"></label>
                                                                </div>
                                                            </div>
                                                            <h4>Credit Card</h4>       
                                                            <img src="/src/assets/images/cards.jpg" alt="card" className="pull-right" />                                                     
                                                        </div>
                                                        <div className="payment_box" data-period="credit_card">
                                                            <p className="ayur-para">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </div>
                                                    <div className="ayur-checkout-payment">
                                                        <div className="ayur-chkout-flex">
                                                            <div className="ayur-rate">
                                                                <div className="custom-checkbox">
                                                                    <input type="radio" value="Paypal" id="c4" name="checkout" checked={paymentMethod === "Paypal"} onChange={e => setPaymentMethod(e.target.value)} />
                                                                    <label for="c4"></label>
                                                                </div>
                                                            </div>
                                                            <h4>Paypal</h4>  
                                                            <img src="/src/assets/images/paypal.jpg" alt="card" className="pull-right" />                                                           
                                                        </div>
                                                        <div className="payment_box" data-period="paypal">
                                                            <p className="ayur-para">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-checkout-order">
                                                <button type="submit" className="ayur-btn">Place Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    </div>
  );
};

export default Checkout;
