import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "../../../components/Auth/Login/LoginModal.jsx";
import RegisterModal from "../../../components/Auth/Register/registerModal.jsx";
import BottomNavbar from "../../../components/BottomNavbar/BottomNavbar.jsx";
const Header = ({ onCartClick, cartCount = 2 }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLogin = (data) => {
      
        setShowLogin(false);
    };

  return (
    <div className="ayur-menu-wrapper">
        <div className="container">
            <div className="row align-items-center gx-0">
                <div className="col-lg-2 col-md-4 col-sm-5 col-6 d-flex align-items-center">
                    <div className="ayur-menu-logo">
                        <NavLink to="/"><img src="/src/assets/images/logo/logo.png" style={{ width: "100px", height: "auto" }} alt="Logo" /></NavLink>
                    </div>      
                </div>
                <div className="col-lg-10 col-md-8 col-sm-7 col-6 d-flex align-items-center justify-content-end">
                    <div className="ayur-navmenu-wrapper">
                        <div className="ayur-nav-menu">
                            <ul>
                                                            
                                    <li>
                                        <NavLink
                                            to="/"
                                            end
                                            className={({ isActive }) => isActive ? "active" : ""}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about"
                                            className={({ isActive }) => isActive ? "active" : ""}
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/shop"
                                            className={({ isActive }) => isActive ? "active" : ""}
                                        >
                                            Shop
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/blog"
                                            className={({ isActive }) => isActive ? "active" : ""}
                                        >
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contact"
                                            className={({ isActive }) => isActive ? "active" : ""}
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                           
                            </ul>
                        </div>
                        <div className="ayur-nav-icons">
                            {/* <div className="ayur-nav-like">
                                <a href="wishlist.html">
                                   <span class="icon">
                                        <svg width="21" height="17" viewbox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6647 0C12.9947 0 11.5308 0.744645 10.4311 2.15348C10.2912 2.33306 10.16 2.51925 10.0379 2.7114C9.91579 2.51925 9.78456 2.33306 9.64463 2.15348C8.54497 0.744645 7.08101 0 5.41104 0C2.25633 0 0 2.64149 0 5.81114C0 9.43548 2.97046 12.8513 9.63153 16.8865C9.75642 16.9622 9.89715 17 10.0379 17C10.1786 17 10.3193 16.9622 10.4442 16.8866C17.1053 12.8513 20.0757 9.43552 20.0757 5.81118C20.0757 2.64318 17.8213 0 14.6647 0ZM16.4353 10.3241C15.0486 11.8714 12.953 13.5007 10.0379 15.2969C7.12277 13.5007 5.02717 11.8714 3.64041 10.3241C2.24617 8.7684 1.56842 7.2922 1.56842 5.81118C1.56842 3.52898 3.11072 1.56842 5.41104 1.56842C6.58249 1.56842 7.58134 2.07776 8.37986 3.08233C9.01836 3.88572 9.28738 4.71529 9.28927 4.72121C9.33905 4.88083 9.43853 5.02035 9.57321 5.11943C9.7079 5.2185 9.87072 5.27194 10.0379 5.27194C10.2051 5.27194 10.3679 5.2185 10.5026 5.11943C10.6373 5.02035 10.7368 4.88083 10.7866 4.72121C10.789 4.71329 11.05 3.90959 11.6675 3.11848C12.4703 2.08992 13.4787 1.56838 14.6647 1.56838C16.9675 1.56838 18.5073 3.53082 18.5073 5.81114C18.5073 7.29216 17.8296 8.76836 16.4353 10.3241Z" fill="#222222"></path>
                                        </svg>                                            
                                     </span>
                                </a>
                            </div> */}
                            <div className="ayur-nav-product" onClick={onCartClick} style={{ cursor: "pointer" }}>
                                 <span class="icon">
                                        <svg width="16" height="17" viewbox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.91343 4.14634H2.81175C2.44474 4.14636 2.09137 4.28542 1.82279 4.53554C1.55421 4.78565 1.39037 5.12824 1.36426 5.49432L0.65358 15.4455C0.639403 15.6443 0.666313 15.8439 0.732633 16.0318C0.798954 16.2197 0.903263 16.3919 1.03906 16.5378C1.17486 16.6836 1.33924 16.7999 1.52195 16.8794C1.70466 16.9589 1.9018 17 2.10107 17H13.5881C13.7873 16.9999 13.9844 16.9587 14.1671 16.8792C14.3497 16.7996 14.514 16.6833 14.6498 16.5375C14.7856 16.3917 14.8899 16.2195 14.9563 16.0316C15.0226 15.8438 15.0496 15.6443 15.0356 15.4455L14.3249 5.49432C14.2988 5.12824 14.1349 4.78565 13.8664 4.53554C13.5978 4.28542 13.2444 4.14636 12.8774 4.14634H11.7836V3.93902C11.7836 2.89433 11.3686 1.89242 10.6299 1.15371C9.89118 0.415003 8.88927 0 7.84458 0C5.7486 0 3.81143 1.66932 3.90556 3.93902L3.91343 4.14634ZM11.7836 5.39024V8.5C11.7836 8.66495 11.7181 8.82315 11.6014 8.93979C11.4848 9.05642 11.3266 9.12195 11.1617 9.12195C10.9967 9.12195 10.8385 9.05642 10.7219 8.93979C10.6052 8.82315 10.5397 8.66495 10.5397 8.5V5.39024H5.14946V8.5C5.14946 8.66495 5.08393 8.82315 4.96729 8.93979C4.85065 9.05642 4.69246 9.12195 4.52751 9.12195C4.36255 9.12195 4.20436 9.05642 4.08772 8.93979C3.97108 8.82315 3.90556 8.66495 3.90556 8.5C3.90556 8.5 3.95946 7.04671 3.94163 5.39024H2.81175C2.7594 5.39032 2.70902 5.41019 2.67072 5.44588C2.63241 5.48156 2.60903 5.53042 2.60526 5.58263L1.89417 15.5339C1.89211 15.5623 1.89594 15.5908 1.90541 15.6177C1.91488 15.6446 1.92979 15.6692 1.94921 15.69C1.96862 15.7109 1.99213 15.7275 2.01825 15.7389C2.04438 15.7503 2.07257 15.7561 2.10107 15.7561H13.5881C13.6165 15.756 13.6447 15.7501 13.6708 15.7386C13.6968 15.7272 13.7203 15.7106 13.7397 15.6898C13.7591 15.669 13.774 15.6444 13.7835 15.6176C13.793 15.5907 13.7969 15.5622 13.795 15.5339L13.0839 5.58263C13.0801 5.53042 13.0567 5.48156 13.0184 5.44588C12.9801 5.41019 12.9298 5.39032 12.8774 5.39024H11.7836ZM10.5397 4.14634V3.93902C10.5397 3.22423 10.2558 2.53872 9.75032 2.03329C9.24489 1.52785 8.55937 1.2439 7.84458 1.2439C7.12979 1.2439 6.44427 1.52785 5.93884 2.03329C5.43341 2.53872 5.14946 3.22423 5.14946 3.93902V4.14634H10.5397Z" fill="#222222"></path>
                                        </svg>
                                     </span>
                                <span className="ayur-nav-provalue">{cartCount}</span>
                            </div>
                            <div className="ayur-nav-user">
                                {/* <NavLink to="/profile"> */}
                                   <span class="icon" style={{ cursor: "pointer" }} onClick={() => setShowLogin(true)}>
                                        <svg width="15" height="17" viewbox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66405 0C10.1737 0 12.2106 2.03684 12.2106 4.54651C12.2106 7.05619 10.1737 9.09302 7.66405 9.09302C5.15438 9.09302 3.11754 7.05619 3.11754 4.54651C3.11754 2.03684 5.15438 0 7.66405 0ZM7.66405 1.18605C5.80907 1.18605 4.30359 2.69153 4.30359 4.54651C4.30359 6.40149 5.80907 7.90698 7.66405 7.90698C9.51903 7.90698 11.0245 6.40149 11.0245 4.54651C11.0245 2.69153 9.51903 1.18605 7.66405 1.18605ZM14.978 15.6163C14.978 15.9833 14.8322 16.3352 14.5727 16.5947C14.3132 16.8542 13.9613 17 13.5943 17H1.73382C1.36683 17 1.01488 16.8542 0.75538 16.5947C0.495882 16.3352 0.350098 15.9833 0.350098 15.6163C0.350098 13.9911 0.995714 12.4324 2.14492 11.2832C3.29413 10.134 4.85278 9.48837 6.478 9.48837H8.8501C10.4753 9.48837 12.034 10.134 13.1832 11.2832C14.3324 12.4324 14.978 13.9911 14.978 15.6163ZM14.4016 16.1927C14.3913 16.1967 14.385 16.2014 14.385 16.2093L14.4016 16.1927ZM1.53614 15.6163C1.53614 15.7254 1.6247 15.814 1.73382 15.814H13.5943C13.6467 15.814 13.697 15.7931 13.7341 15.7561C13.7711 15.719 13.792 15.6687 13.792 15.6163C13.792 14.3056 13.2713 13.0486 12.3445 12.1219C11.4177 11.1951 10.1608 10.6744 8.8501 10.6744H6.478C5.16734 10.6744 3.91036 11.1951 2.98358 12.1219C2.0568 13.0486 1.53614 14.3056 1.53614 15.6163Z" fill="#222222"></path>
                                        </svg>                                            
                                     </span>
                                {/* </NavLink> */}
                            </div>
                            <LoginModal
                                show={showLogin}
                                onClose={() => setShowLogin(false)}
                                onRegisterOpen={() => { setShowLogin(false); setShowRegister(true); }}
                            />
                            <RegisterModal
                                show={showRegister}
                                onClose={() => setShowRegister(false)}
                                onLoginOpen={() => { setShowRegister(false); setShowLogin(true); }}
                            />
                          
                        </div>
                        <div className="ayur-toggle-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomNavbar />
    </div>
  );
};


export default Header;


