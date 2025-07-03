import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div>
           <div class="ayur-bread-section">
                <div class="ayur-breadcrumb-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="ayur-bread-content">
                                    <h2>Cart</h2>
                                    <div class="ayur-bread-list">
                                        <span>
                                            <a href="index.html">Home</a>
                                        </span>
                                        <span class="ayur-active-page">Cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ayur-bgcover ayur-cartpage-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="ayur-cart-table table-responsive">
                                <table class="table ">
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
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <img src="/src/assets/images/Bottels/Ashwagandha.png" alt="image" />
                                            </td>
                                            <td>
                                                <h2>Ashwagandha</h2>
                                            </td>
                                            <td>$50</td>
                                            <td>
                                                <input type="number" value="1" min="1" />
                                            </td>
                                            <td>
                                                $50
                                            </td>
                                            <td><a href="javascript:void(0)" class="ayur-tab-delete"><img src="/src/assets/images/delete.png" alt="delete" /></a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>
                                                <img src="/src/assets/images/Bottels/Dard nivrak.png" alt="image" />
                                            </td>
                                            <td>
                                                <h2>Dard Nivrak</h2>
                                            </td>
                                            <td>$50</td>
                                            <td>
                                                <input type="number" value="1" min="1" />
                                            </td>
                                            <td>
                                                $50
                                            </td>
                                            <td><a href="javascript:void(0)" class="ayur-tab-delete"><img src="/src/assets/images/delete.png" alt="delete" /></a></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>
                                                <img src="/src/assets/images/Bottels/Triphla.png" alt="image" />
                                            </td>
                                            <td>
                                                <h2>Triphala</h2>
                                            </td>
                                            <td>$50</td>
                                            <td>
                                                <input type="number" value="1" min="1" />
                                            </td>
                                            <td>
                                                $50
                                            </td>
                                            <td><a href="javascript:void(0)" class="ayur-tab-delete"><img src="/src/assets/images/delete.png" alt="delete" /></a></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div class="ayur-coupon-code">
                                                    <form class="form-inline">
                                                        <div class="ayur-form-input">
                                                            <input type="text" class="form-control" placeholder="Coupon Code" name="coupon_code" />
                                                            <button type="submit" class="ayur-btn" name="apply_coupon" value="Apply Coupon">Apply Coupon</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </td>
                                            <td colspan="4" class="ayur-updatecart-btn">
                                                <button class="ayur-btn">Update Cart</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="ayur-carttotal-wrapper">
                                <div class="ayur-cart-total">
                                    <h2>Cart Totals</h2>
                                    <table class="table table-bordere">
                                        <tbody>
                                            <tr class="ayur-cartsubtotal">
                                                <th>Subtotal</th>
                                                <td><span class="amount">$150</span></td>
                                            </tr>
                                            <tr class="ayur-ordertotal">
                                                <th>Total</th>
                                                <td><span class="amount">$150</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="ayur-checkout-btn">
                                        <Link to="/checkout" class="ayur-btn">Proceed to Checkout</Link>
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