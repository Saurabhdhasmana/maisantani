import React from "react";
import { Link } from "react-router-dom";
const Shop = () => {
  return (
    <div>
    
    <div className="ayur-bread-section">
        <div className="ayur-breadcrumb-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="ayur-bread-content">
                            <h2>Blog</h2>
                            <div className="ayur-bread-list">
                                <span>
                                    <a href="index.html">Home</a>
                                </span>
                                <span className="ayur-active-page">Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="ayur-bgcover ayur-blog-sec ayur-blogsin-page">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="ayur-heading-wrap">
                        <h5>Blog</h5>
                        <h3>Our Latest News</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="ayur-blog-box">
                        <div className="ayur-blog-img">
                            <img src="/src/assets/images/blog-1.png" alt="image" />
                        </div>
                        <div className="ayur-blog-text">
                            <div className="ayur-blog-date">
                                <h4>Ayurveda Medicine</h4>
                                <p>June 17,2024</p>
                            </div>
                            <h3><a href="blog-single.html">Duis aute irure dolor in velit voluptate esse</a></h3>
                            <p>It is a long established was a fact that a reader will be distracted by the readable content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="ayur-blog-box">
                        <div className="ayur-blog-img">
                            <img src="/src/assets/images/blog-2.png" alt="image" />
                        </div>
                        <div className="ayur-blog-text">
                            <div className="ayur-blog-date">
                                <h4>Ayurveda Medicine</h4>
                                <p>June 17,2024</p>
                            </div>
                    <h3><Link to="/blog-detail">Duis aute irure dolor in velit voluptate esse</Link></h3>
                            <p>It is a long established was a fact that a reader will be distracted by the readable content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="ayur-blog-box">
                        <div className="ayur-blog-img">
                            <img src="/src/assets/images/blogsin-1.png" alt="image" />
                        </div>
                        <div className="ayur-blog-text">
                            <div className="ayur-blog-date">
                                <h4>Ayurveda Medicine</h4>
                                <p>June 17,2024</p>
                            </div>
                    <h3><a href="blog-single.html">Duis aute irure dolor in velit voluptate esse</a></h3>
                            <p>It is a long established was a fact that a reader will be distracted by the readable content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="ayur-blog-box">
                        <div className="ayur-blog-img">
                            <img src="/src/assets/images/blogsin-2.png" alt="image" />
                        </div>
                        <div className="ayur-blog-text">
                            <div className="ayur-blog-date">
                                <h4>Ayurveda Medicine</h4>
                                <p>June 17,2024</p>
                            </div>
                    <h3><a href="blog-single.html">Color in velit duis aute irure dolor in velit </a></h3>
                            <p>It is a long established was a fact that a reader will be distracted by the readable content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="ayur-blog-box">
                        <div className="ayur-blog-img">
                            <img src="/src/assets/images/blogsin-3.png" alt="image" />
                        </div>
                        <div className="ayur-blog-text">
                            <div className="ayur-blog-date">
                                <h4>Ayurveda Medicine</h4>
                                <p>June 17,2024</p>
                            </div>
                    <h3><a href="blog-single.html">Irure dolor duis aute in velit voluptate esse</a></h3>
                            <p>It is a long established was a fact that a reader will be distracted by the readable content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="ayur-blog-box">
                        <div className="ayur-blog-img">
                            <img src="/src/assets/images/blogsin-4.png" alt="image" />
                        </div>
                        <div className="ayur-blog-text">
                            <div className="ayur-blog-date">
                                <h4>Ayurveda Medicine</h4>
                                <p>June 17,2024</p>
                            </div>
                    <h3><a href="blog-single.html">Voluptate esse duis aute irure dolor in velit</a></h3>
                            <p>It is a long established was a fact that a reader will be distracted by the readable content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="ayur-pagination-wrappper">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item"><a className="page-link" href="javascript:void(0)"> 
                                <svg width="9" height="14" viewbox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.930801 5.93376L6.42152 0.443038C7.01224 -0.147679 7.96624 -0.147679 8.55696 0.443038C9.14768 1.03376 9.14768 1.98776 8.55696 2.57848L4.13249 7L8.55696 11.4215C9.14768 12.0122 9.14768 12.9662 8.55696 13.557C7.96624 14.1477 7.01224 14.1477 6.42152 13.557L0.930801 8.06625C0.343038 7.47848 0.343038 6.52152 0.930801 5.93376Z" fill="white"></path>
                                    </svg>                              
                            </a></li>
                              <li className="page-item"><a className="page-link active" href="javascript:void(0)">1</a></li>
                              <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                              <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                              <li className="page-item"><a className="page-link" href="javascript:void(0)"> 
                                <svg width="9" height="14" viewbox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.0692 5.93376L2.57848 0.443038C1.98776 -0.147679 1.03376 -0.147679 0.443038 0.443038C-0.147679 1.03376 -0.147679 1.98776 0.443038 2.57848L4.86751 7L0.443038 11.4215C-0.147679 12.0122 -0.147679 12.9662 0.443038 13.557C1.03376 14.1477 1.98776 14.1477 2.57848 13.557L8.0692 8.06625C8.65696 7.47848 8.65696 6.52152 8.0692 5.93376Z" fill="white"></path>
                                    </svg>                             
                            </a></li>
                            </ul>
                          </nav>
                    </div>
                </div>
            </div>
        </div>
        <div className="ayur-bgshape ayur-blog-bgshape">
            <img src="/src/assets/images/bg-shape6.png" alt="img" />
            <img src="/src/assets/images/bg-leaf6.png" alt="img" />
        </div>
    </div>

    <div className="ayur-bgcover ayur-videosin-sec">
        <div className="container">
            <div className="row">
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
                                    <iframe src="https://www.youtube.com/embed/hJTmi9euoNg" frameborder="0" allowfullscreen=""></iframe>
                                </div>
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

export default Shop;