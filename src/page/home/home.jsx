
import { useEffect, React, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const bannerImages = [
    "/src/assets/images/booster.webp",
    "/src/assets/images/deepsleep.webp",
    "/src/assets/images/mencare.webp",
];

const testimonials = [
    {
        text: `Amet minim mollit non deserunt ullamco est sit aliqua as dolor do amet. Officia consequat duis enim velit mollit.`,
        image: "/src/assets/images/test-img1.png",
        name: "Leslie Alexander",
    },
    {
        text: `Amet minim mollit non deserunt ullamco est sit aliqua as dolor do amet. Officia consequat duis enim velit mollit.`,
        image: "/src/assets/images/test-img2.png",
        name: "Brooklyn Simmons",
    },
    {
        text: `Amet minim mollit non deserunt ullamco est sit aliqua as dolor do amet. Officia consequat duis enim velit mollit.`,
        image: "/src/assets/images/test-img1.png",
        name: "Leslie Alexander",
    },
];

const Home = () => {
    const [home, SetHome] = useState([]);
    const [attribute,setAttribute] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch("https://mai-santani-backend-new.onrender.com/product/getAllProduct");
            let res1= await fetch("https://mai-santani-backend-new.onrender.com/attributes/getAllAttributes");

            res = await res.json();
            SetHome(res);
            res1 = await res1.json();
            setAttribute(res1);
        }
        fetchData();
    }, [])
    console.log("res is", home);
    console.log("attribute is", attribute);


    const careData = [
        { img: "/src/assets/images/care-img1.png", title: "Eye Care" },
        { img: "/src/assets/images/care-img2.png", title: "Hair Care" },
        { img: "/src/assets/images/care-img3.png", title: "Skin Care" },
        { img: "/src/assets/images/care-img4.png", title: "Men's Health" },
        { img: "/src/assets/images/care-img5.png", title: "Women's Health" },
        { img: "/src/assets/images/care-img6.png", title: "Memory Health" },
        { img: "/src/assets/images/care-img7.png", title: "Beauty" },
        { img: "/src/assets/images/care-img8.png", title: "Brain Health" },
        { img: "/src/assets/images/care-img1.png", title: "Eye Care" },
        { img: "/src/assets/images/care-img2.png", title: "Hair Care" },
    ];

    return (
        <main className="ayur-home-page">
            <div className="ayur-banner-wrapper mb-5 ">
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation
                    autoplay={{ delay: 1600 }}
                    loop={true}
                    height={500}
                    className="ayur-banner-swiper"
                >
                    {bannerImages.map((img, index) => (
                        <SwiperSlide key={index} style={{ height: "100vh", width: "1560px" }}>
                            <div
                                className="ayur-banner-section"
                                style={{ backgroundImage: `url(${img})`, height: "100%" }}
                            >
                                <div className="ayur-ban-leaf">
                                    <img src="/src/assets/images/ban-leafleft.png" alt="leaf-left" />
                                    {/* <img src="/src/assets/images/ban-leafright.png" alt="leaf-right" /> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="ayur-care-slider-wrapper pt-5 pb-5">
                <div className="container-fluid">
                    <div className="ayur-care-slider-sec">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation
                            autoplay={{ delay: 1600 }}
                            spaceBetween={20}
                            slidesPerView={8}
                            loop={true}
                            className="ayur-care-slider"
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                576: { slidesPerView: 3 },
                                768: { slidesPerView: 4 },
                                992: { slidesPerView: 5 },
                                1200: { slidesPerView: 6 },
                                1400: { slidesPerView: 7 },
                                1600: { slidesPerView: 8 },
                                1800: { slidesPerView: 9 },
                                2000: { slidesPerView: 10 },
                            }}
                        >
                            {careData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="ayur-careslide-box">
                                        <div className="ayur-careslider-img">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <h3>{item.title}</h3>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="ayur-bgcover ayur-topproduct-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ayur-heading-wrap">
                                <h5>Medicine</h5>
                                <h3>Our Top Products</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {home?.data?.products?.map((product) => (

                            <div className="col-lg-3 col-md-6 col-sm-6" key={product._id}>
                                <div className="ayur-tpro-box">
                                    <div className="ayur-tpro-img">
                                        <img
                                            src={product.productImage
                                                ? product.productImage
                                                : "/src/assets/images/Bottels/Ashwagandha.png"
                                            }
                                            alt="img"
                                        />
                                        <div className="ayur-tpro-sale">
                                            <p>Sale</p>
                                            <div className="ayur-tpro-like">
                                                <a href="javascript:void(0)" className="ayur-tpor-click">
                                                    <img src="/src/assets/images/like.svg" className="unlike" alt="unlike" />
                                                    <img src="/src/assets/images/like-fill.svg" className="like" alt="like" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ayur-tpro-text">
                                        <h3><Link to={`/shop-detail/${product._id}`}>{product?.name}</Link></h3>
                                        <div className="ayur-tpro-price">
                                            <p><del>${product?.price}</del>${product?.saleprice}</p>
                                            <div className="ayur-tpro-star">
                                                <img src="/src/assets/images/star-icon.png" alt="star" />
                                                <p>4.5/5</p>
                                            </div>
                                        </div>

                                        <div className="ayur-tpro-btn">
                                            <a href={`/shop-detail/${product._id}`} className="ayur-btn">
                                                <span>
                                                    <svg width="20" height="19" viewbox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.826087 2.39643e-08C0.606995 2.39643e-08 0.396877 0.0870339 0.241955 0.241955C0.0870339 0.396877 0 0.606995 0 0.826087C0 1.04518 0.0870339 1.2553 0.241955 1.41022C0.396877 1.56514 0.606995 1.65217 0.826087 1.65217H2.29652C2.4166 1.65238 2.53358 1.69029 2.63096 1.76054C2.72834 1.8308 2.8012 1.92986 2.83926 2.04374L5.56287 10.2162C5.6843 10.5797 5.69917 10.9696 5.60665 11.3413L5.38278 12.2393C5.05317 13.5561 6.07835 14.8696 7.43478 14.8696H17.3478C17.5669 14.8696 17.777 14.7825 17.932 14.6276C18.0869 14.4727 18.1739 14.2626 18.1739 14.0435C18.1739 13.8244 18.0869 13.6143 17.932 13.4593C17.777 13.3044 17.5669 13.2174 17.3478 13.2174H7.43478C7.11261 13.2174 6.90609 12.953 6.98457 12.6416L7.15391 11.9659C7.18244 11.8516 7.24833 11.7501 7.34112 11.6775C7.43391 11.6049 7.54828 11.5654 7.66609 11.5652H16.5217C16.6953 11.5654 16.8646 11.511 17.0055 11.4095C17.1463 11.3081 17.2517 11.1649 17.3065 11.0002L19.508 4.39148C19.5494 4.26729 19.5607 4.13505 19.5409 4.00566C19.5211 3.87626 19.4709 3.75342 19.3943 3.64725C19.3178 3.54108 19.2171 3.45463 19.1005 3.39501C18.984 3.33539 18.855 3.30432 18.7241 3.30435H5.415C5.29478 3.30431 5.17762 3.26649 5.08007 3.19622C4.98253 3.12595 4.90954 3.0268 4.87143 2.91278L4.0883 0.565043C4.03349 0.400482 3.92828 0.257348 3.78757 0.15593C3.64686 0.0545128 3.4778 -4.17427e-05 3.30435 2.39643e-08H0.826087ZM6.6087 15.6957C6.17051 15.6957 5.75028 15.8697 5.44043 16.1796C5.13059 16.4894 4.95652 16.9096 4.95652 17.3478C4.95652 17.786 5.13059 18.2062 5.44043 18.5161C5.75028 18.8259 6.17051 19 6.6087 19C7.04688 19 7.46712 18.8259 7.77696 18.5161C8.0868 18.2062 8.26087 17.786 8.26087 17.3478C8.26087 16.9096 8.0868 16.4894 7.77696 16.1796C7.46712 15.8697 7.04688 15.6957 6.6087 15.6957ZM16.5217 15.6957C16.0836 15.6957 15.6633 15.8697 15.3535 16.1796C15.0436 16.4894 14.8696 16.9096 14.8696 17.3478C14.8696 17.786 15.0436 18.2062 15.3535 18.5161C15.6633 18.8259 16.0836 19 16.5217 19C16.9599 19 17.3802 18.8259 17.69 18.5161C17.9998 18.2062 18.1739 17.786 18.1739 17.3478C18.1739 16.9096 17.9998 16.4894 17.69 16.1796C17.3802 15.8697 16.9599 15.6957 16.5217 15.6957Z" fill="white"></path>
                                                    </svg>
                                                </span>
                                                 View Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ayur-tpro-viewbtn">
                                <Link to="/shop" className="ayur-btn">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ayur-bgshape ayur-tpro-bgshape">
                    <img src="/src/assets/images/bg-shape1.png" alt="img" />
                    <img src="/src/assets/images/bg-leaf1.png" alt="img" />
                </div>
            </div>

            <div className="ayur-bgcover ayur-about-sec">
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

            <div className="ayur-bgcover ayur-trenproduct-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="ayur-heading-wrap">
                                <h5>Product</h5>
                                <h3>Trending Product</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                      {attribute?.data?.docs?.map((product)=>(
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="ayur-tpro-box ayur-trepro-box">
                                <div className="ayur-tpro-img">
                                    <img src={product.coverImage} alt="img" />
                                    <div className="ayur-tpro-sale">
                                        <p>Sale</p>
                                        <div className="ayur-tpro-like">
                                            <a href="javascript:void(0)" className="ayur-tpor-click">
                                                <img src="/src/assets/images/like.svg" className="unlike" />
                                                <img src="/src/assets/images/like-fill.svg" className="like" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="ayur-tpro-text">
                                    <h3> <a href={`/shop-detail/${product?._id}`}>{product?.name}</a></h3>
                                    <div className="ayur-tpro-price">
                                        <p><del>${product.mrpPrice}</del>{product.salePrice}</p>
                                        <div className="ayur-tpro-star">
                                            <img src="/src/assets/images/star-icon.png" alt="star" />
                                            <p>4.5/5</p>
                                        </div>
                                    </div>

                                    <div className="ayur-tpro-btn">
                                        <Link to={`/shop-detail/${product?._id}`} className="ayur-btn">
                                            <span>
                                                <svg width="20" height="19" viewbox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.826087 2.39643e-08C0.606995 2.39643e-08 0.396877 0.0870339 0.241955 0.241955C0.0870339 0.396877 0 0.606995 0 0.826087C0 1.04518 0.0870339 1.2553 0.241955 1.41022C0.396877 1.56514 0.606995 1.65217 0.826087 1.65217H2.29652C2.4166 1.65238 2.53358 1.69029 2.63096 1.76054C2.72834 1.8308 2.8012 1.92986 2.83926 2.04374L5.56287 10.2162C5.6843 10.5797 5.69917 10.9696 5.60665 11.3413L5.38278 12.2393C5.05317 13.5561 6.07835 14.8696 7.43478 14.8696H17.3478C17.5669 14.8696 17.777 14.7825 17.932 14.6276C18.0869 14.4727 18.1739 14.2626 18.1739 14.0435C18.1739 13.8244 18.0869 13.6143 17.932 13.4593C17.777 13.3044 17.5669 13.2174 17.3478 13.2174H7.43478C7.11261 13.2174 6.90609 12.953 6.98457 12.6416L7.15391 11.9659C7.18244 11.8516 7.24833 11.7501 7.34112 11.6775C7.43391 11.6049 7.54828 11.5654 7.66609 11.5652H16.5217C16.6953 11.5654 16.8646 11.511 17.0055 11.4095C17.1463 11.3081 17.2517 11.1649 17.3065 11.0002L19.508 4.39148C19.5494 4.26729 19.5607 4.13505 19.5409 4.00566C19.5211 3.87626 19.4709 3.75342 19.3943 3.64725C19.3178 3.54108 19.2171 3.45463 19.1005 3.39501C18.984 3.33539 18.855 3.30432 18.7241 3.30435H5.415C5.29478 3.30431 5.17762 3.26649 5.08007 3.19622C4.98253 3.12595 4.90954 3.0268 4.87143 2.91278L4.0883 0.565043C4.03349 0.400482 3.92828 0.257348 3.78757 0.15593C3.64686 0.0545128 3.4778 -4.17427e-05 3.30435 2.39643e-08H0.826087ZM6.6087 15.6957C6.17051 15.6957 5.75028 15.8697 5.44043 16.1796C5.13059 16.4894 4.95652 16.9096 4.95652 17.3478C4.95652 17.786 5.13059 18.2062 5.44043 18.5161C5.75028 18.8259 6.17051 19 6.6087 19C7.04688 19 7.46712 18.8259 7.77696 18.5161C8.0868 18.2062 8.26087 17.786 8.26087 17.3478C8.26087 16.9096 8.0868 16.4894 7.77696 16.1796C7.46712 15.8697 7.04688 15.6957 6.6087 15.6957ZM16.5217 15.6957C16.0836 15.6957 15.6633 15.8697 15.3535 16.1796C15.0436 16.4894 14.8696 16.9096 14.8696 17.3478C14.8696 17.786 15.0436 18.2062 15.3535 18.5161C15.6633 18.8259 16.0836 19 16.5217 19C16.9599 19 17.3802 18.8259 17.69 18.5161C17.9998 18.2062 18.1739 17.786 18.1739 17.3478C18.1739 16.9096 17.9998 16.4894 17.69 16.1796C17.3802 15.8697 16.9599 15.6957 16.5217 15.6957Z" fill="white"></path>
                                                </svg>
                                            </span>
                                            Add to Cart
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                   
                </div>
                <div className="ayur-bgshape ayur-trenpro-bgshape">
                    <img src="/src/assets/images/bg-shape3.png" alt="img" />
                    <img src="/src/assets/images/bg-leaf3.png" alt="img" />
                </div>
            </div>

            <div className="ayur-bgcover ayur-why-sec">
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
                        <div className="col-lg-12 col-md-12 col-sm-12">
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
                        {/* <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="ayur-why-textheading">
                        <h3>Solve Your Problem with The Power of Nature</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,it's sed do eiusmod tempor incididunt
                            ut labore et dolore was a magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation
                            that is ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in to
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur.</p>
                        <div className="ayur-why-btn">
                            <a href="services.html" className="ayur-btn">Read More</a>
                        </div>
                    </div>
                </div> */}
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
                <div className="ayur-bgshape ayur-why-bgshape">
                    <img src="/src/assets/images/bg-shape4.png" alt="img" />
                    <img src="/src/assets/images/bg-leaf4.png" alt="img" />
                </div>
            </div>

            <div className="ayur-bgcover ayur-testimonial-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ayur-heading-wrap ayur-test-head text-center">
                                <h5>Our Testimonial</h5>
                                <h3>What Our Client’s Say</h3>
                            </div>
                        </div>
                    </div>

                    <div className="ayur-testimonial-section">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 1800 }}
                            loop={true}
                            spaceBetween={30}
                            slidesPerView={1} // default for mobile
                            breakpoints={{
                                768: {
                                    slidesPerView: 2, // for tablets and desktop
                                },
                            }}
                            className="ayur-testimonial-slider"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="ayur-test-box">
                                        <div className="ayur-test-text">
                                            <p>{item.text}</p>
                                        </div>
                                        <div className="ayur-test-namesec">
                                            <div className="ayur-testname">
                                                <img src={item.image} alt={item.name} />
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="ayur-testquote">
                                                {/* SVG here */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;

