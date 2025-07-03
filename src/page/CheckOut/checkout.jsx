import React, {useState} from "react";
import { Link } from "react-router-dom";


import './checkout.css';

const Checkout = () => {
   
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
                        <form className="ayur-checkout-form">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="ayur-checkout-head">
                                        <h3>Billing Details</h3>
                                    </div>
                                    <div className="row">
                                        
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>First Name <span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Last Name <span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Company Identity</label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Billing Address<span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Town / City<span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Country / Region <span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Postcode / Zip <span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Contact<span>*</span></label>
                                                <input type="text" className="form-control" placeholder="" />
                                                <input type="text" className="form-control mt-3" placeholder="" />
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
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <div className="ayur-form-input ayur-check-form">
                                                <label>Postcode / Zip Code</label>
                                                <input type="text" className="form-control" placeholder="" />
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
                                                                    <input type="radio" value="dbt" id="c1" name="checkout" />
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
                                                                    <input type="radio" value="cheque_payment" id="c2" name="checkout" />
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
                                                                    <input type="radio" value="credit_card" id="c3" name="checkout" />
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
                                                                    <input type="radio" value="paypal" id="c4" name="checkout" />
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
                                                <button type="button" className="ayur-btn">Place Order</button>
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
