

// CSS Files
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min.css'

import './assets/css/flatpickr.min.css'

import './assets/css/swiper-bundle.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
// JavaScript Files 
import './assets/js/jquery.js'
import './assets/js/bootstrap.bundle.min.js'

import './assets/js/SmoothScroll.min.js'
import './assets/js/flatpickr.js'
import './assets/js/vanilla-tilt.min.js'
import './assets/js/swiper-bundle.min.js'
import './assets/js/custom.js'


// Routes and Components
import React from 'react'
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
import { CartProvider, useCart } from './context/CartContext';
import Cart from './page/Cart/cart.jsx'
import ScrollToTop from './page/ScrollToTop/ScrollToTop.jsx'

function AppContent() {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { cartItems, removeItemFromCart, updateQty, addItemToCart: addToCartContext } = useCart();

  const toggleCartModal = () => setIsCartOpen(prev => !prev);

  // Jab bhi add to cart ho, modal bhi open ho
  const addItemToCart = (item) => {
    addToCartContext(item);
    setIsCartOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <Header onCartClick={toggleCartModal} cartCount={cartItems.length} />
      {isCartOpen && (
        <CartModal onClose={toggleCartModal} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop-detail/:id" element={<Shop_Detail onAddToCart={addItemToCart} />} />
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

const App = () => (
  <CartProvider>
    <AppContent />
  </CartProvider>
);

export default App;
