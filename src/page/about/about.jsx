import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
   
    <div className="ayur-bread-section">
        <div className="ayur-breadcrumb-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="ayur-bread-content">
                            <h2>About Us</h2>
                            <div className="ayur-bread-list">
                                <span>
                                    <Link to="/">Home</Link>
                                </span>
                                <span className="ayur-active-page">About Us</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="ayur-bgcover ayur-about-sec ayur-inner-about">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="ayur-about-img">
                        <img src="/src/assets/images/about-img.png" alt="img" data-tilt="" data-tilt-max="10" data-tilt-speed="1000" data-tilt-perspective="1000" />
                        <div className="ayur-about-exp">
                            <p>10</p>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="ayur-heading-wrap ayur-about-head">
                        <h5>Who We Are</h5>
                        <h3>The Natural Way To Achieving Balance And Optimal Health</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <a href="about.html" className="ayur-btn">Know More</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="ayur-bgshape ayur-about-bgshape">
            <img src="/src/assets/images/bg-shape2.png" alt="img" />
        </div>
    </div>

    <div className="ayur-bgcover ayur-inner-whychoose">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="ayur-heading-wrap ayur-about-head">
                        <h5>Why Choose Us</h5>
                        <h3>Nature's secret for your truly health</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                         <div className="ayur-whycho-boxwrapper">
                            <div className="ayur-whycho-box">
                                <div className="ayur-whycho-boximg">
                                    <img src="/src/assets/images/checkmark.png" alt="checkmark" />
                                </div>
                                <div className="ayur-whycho-boxtext">
                                    <h3>100% Organic Herbal</h3>
                                    <p>Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                            <div className="ayur-whycho-box">
                                <div className="ayur-whycho-boximg">
                                    <img src="/src/assets/images/checkmark.png" alt="checkmark" />

                                </div>
                                <div className="ayur-whycho-boxtext">
                                    <h3>Professional Therapist</h3>
                                    <p>Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="ayur-about-img">
                        <img src="/src/assets/images/product/ayurvedicmedicine.jpg" className="rounded-4" alt="img" data-tilt="" data-tilt-max="8" data-tilt-speed="1000" data-tilt-perspective="1000" />
                    </div>
                </div>
            </div>
        </div>
        <div className="ayur-bgshape ayur-about-bgshape">
            <img src="/src/assets/images/bg-leaf2.png" alt="img" />
        </div>
    </div>
  
    <div className="ayur-bgcover ayur-achievement-sec">
        <div className="container">
            <div className="row  align-items-center">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="ayur-heading-wrap ayur-heading-left">
                        <h5>Our Recent Achievements</h5>
                        <h3>Benefit From Choosing The Best</h3>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="ayur-achieve-box-wrapper">
                        <div className="ayur-achieve-box">
                            <div className="ayur-achieve-icon">
                                <img src="/src/assets/images/achieve-icon1.png" alt="icon" />
                            </div>
                            <div className="ayur-achieve-text">
                                <h2 className="ayur-counting" data-to="25">25</h2>
                                <p>Years Experience</p>
                            </div>
                        </div>
                        <div className="ayur-achieve-box">
                            <div className="ayur-achieve-icon">
                                <img src="/src/assets/images/achieve-icon2.png" alt="icon" />
                            </div>
                            <div className="ayur-achieve-text">
                                <h2 className="ayur-counting" data-to="60">60 +</h2>
                                <p>Happy Customers</p>
                            </div>
                        </div>
                        <div className="ayur-achieve-box">
                            <div className="ayur-achieve-icon">
                                <img src="/src/assets/images/achieve-icon3.png" alt="icon" />
                            </div>
                            <div className="ayur-achieve-text">
                                <h2 className="ayur-counting" data-to="800">800 +</h2>
                                <p>Our Products</p>
                            </div>
                        </div>
                        <div className="ayur-achieve-box">
                            <div className="ayur-achieve-icon">
                                <img src="/src/assets/images/achieve-icon4.png" alt="icon" />
                            </div>
                            <div className="ayur-achieve-text">
                                <h2 className="ayur-counting percent" data-to="100%">100%</h2>
                                <p>Product Purity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="ayur-bgcover ayur-why-sec ayur-why-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="ayur-heading-wrap ayur-why-head">
                        <h5>Best For You</h5>
                        <h3>Why Mai Sanatani</h3>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="ayur-why-secbox">
                        <div className="ayur-why-box">
                            <div className="ayur-why-boxicon">
                                <img src="/src/assets/images/why-icon1.png" alt="icon" />
                            </div>
                            <div className="ayur-why-boxtext">
                                <h4>100 % Organic</h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                            </div>
                        </div>
                        <div className="ayur-why-box">
                            <div className="ayur-why-boxicon">
                                <img src="/src/assets/images/why-icon2.png" alt="icon" />
                            </div>
                            <div className="ayur-why-boxtext">
                                <h4>Best Quality</h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                            </div>
                        </div>
                        <div className="ayur-why-box">
                            <div className="ayur-why-boxicon">
                                <img src="/src/assets/images/why-icon3.png" alt="icon" />
                            </div>
                            <div className="ayur-why-boxtext">
                                <h4>Hygienic Product</h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                            </div>
                        </div>
                        <div className="ayur-why-box">
                            <div className="ayur-why-boxicon">
                                <img src="/src/assets/images/why-icon4.png" alt="icon" />
                            </div>
                            <div className="ayur-why-boxtext">
                                <h4>Health Care</h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="ayur-why-textheading">
                        <h3>Solve Your Problem with The Power of Nature</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,it's sed do eiusmod tempor incididunt ut labore et dolore was a magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation that is ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in to reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <ul>
                            <li>
                                <img src="/src/assets/images/tick.png" alt="icon" />
                                <p>Quis nostrud was exercitation.</p>
                            </li>
                            <li>
                                <img src="/src/assets/images/tick.png" alt="icon" />
                                <p>Quis nostrud was exercitation.</p>
                            </li>
                            <li>
                                <img src="/src/assets/images/tick.png" alt="icon" />
                                <p>Quis nostrud was exercitation.</p>
                            </li>
                            <li>
                                <img src="/src/assets/images/tick.png" alt="icon" />
                                <p>Quis nostrud was exercitation.</p>
                            </li>
                        </ul>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className="ayur-why-btn">
                            <a href="services.html" className="ayur-btn">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="ayur-video-section">
                        <div className="ayur-video-img">
                            <img src="/src/assets/images/video-bg.png" alt="img" />
                        <a href="javascript:void(0)" className="ayur-video-playicon" id="popup">

                        <img src="/src/assets/images/play-icon.svg" alt="icon" />
                        </a>
                        <div id="videoPopup1" className="ayur-popup">
                            <div className="ayur-popup-content">
                                <span className="close" id="close">×</span>
                                <iframe src="https://www.youtube.com/embed/_eq7kgVsliE" frameborder="0" allowfullscreen=""></iframe>
                            </div>
                        </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ayur-bgshape ayur-why-bgshape">
            <img src="/src/assets/images/bg-shape4.png" alt="img" />
            <img src="/src/assets/images/bg-leaf4.png" alt="img" />
        </div>
    </div>
  
    </div>
  );
};


export default About;
