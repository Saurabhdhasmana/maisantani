

// CSS Files
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'
import './assets/css/select2.min.css'
import './assets/css/flatpickr.min.css'

import './assets/css/swiper-bundle.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
// JavaScript Files 
import './assets/js/jquery.js'
import './assets/js/bootstrap.bundle.min.js'
import './assets/js/select2.min.js'
import './assets/js/SmoothScroll.min.js'
import './assets/js/flatpickr.js'
import './assets/js/vanilla-tilt.min.js'
import './assets/js/swiper-bundle.min.js'
import './assets/js/custom.js'

// Routes and Components
import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './page/layouts/header/header'
import Footer from './page/layouts/footer/footer'
import Home from './page/home/home'
import About from './page/about/about'
import Shop from './page/shop/shop.jsx' 
import Blog from './page/blog/blog.jsx'
import Contact from './page/contact/contact.jsx'
import Checkout from './page/CheckOut/checkout.jsx'
import Shop_Detail from './page/shop_detail/shop_detail.jsx'
import Blog_Detail from './page/blog_detail/blog_detail.jsx'
import Profile from './page/profile/profile.jsx'
import CartModal from './components/CartModal/CartModal';
import Cart from './page/Cart/cart.jsx'
import ScrollToTop from './page/ScrollToTop/ScrollToTop.jsx'

const dummyCartItems = [
  { id: 1, name: 'Ashwagandha', price: 299, qty: 1, image: '/src/assets/images/Bottels/Ashwagandha.png' },
  { id: 2, name: 'Dard Nivrak', price: 199, qty: 2, image: '/src/assets/images/Bottels/Dard nivrak.png' }
];
const App = () => {
const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(dummyCartItems);

  const toggleCartModal = () => setIsCartOpen(prev => !prev);

  // Remove item function
  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  const handleQtyChange = (id, qty) => {
  setCartItems(cartItems =>
    cartItems.map(item =>
      item.id === id ? { ...item, qty: qty > 0 ? qty : 1 } : item
    )
  );
};
const addItemToCart = (newItem) => {
  setCartItems(prevItems => {
    const existing = prevItems.find(item => item.id === newItem.id);
    if (existing) {
      // agar item already hai, toh qty badhao
      return prevItems.map(item =>
        item.id === newItem.id ? { ...item, qty: item.qty + 1 } : item
      );
    } else {
      // agar new item hai, toh add karo
      return [...prevItems, { ...newItem, qty: 1 }];
    }
  });
  setIsCartOpen(true); // Modal open karo
};
  return(
     <Router>
      <ScrollToTop />
      <Header onCartClick={toggleCartModal} cartCount={cartItems.length} />
      {isCartOpen && (
         <CartModal
            onClose={toggleCartModal}
            cartItems={cartItems}
            onRemove={handleRemoveItem}
            onQtyChange={handleQtyChange}
          />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop-detail/:id" element={<Shop_Detail onAddToCart={addItemToCart} />}/>
        <Route path="/blog-detail" element={<Blog_Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
    </Router>
  );
}
export default App;
