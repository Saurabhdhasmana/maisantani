
import React, { useState, useRef, useEffect } from 'react';
import '../shop_detail/shop_detail.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import CartModal from '../../components/CartModal/CartModal';
// Dynamic product state
const imagesDefault = [
  '/src/assets/images/Bottels/Ashwagandha.png',
  '/src/assets/images/Ashwagandha-1.webp',
  '/src/assets/images/Ashwagandha-2.webp',
];
const colorOptions = [
  { name: 'Orange', value: '#ff9800' },
  { name: 'Green', value: '#00e676' },
];
const sizeOptions = [{ name: 'UNI' }];
const features = [
  {
    title: 'Neoprene sandwiched body',
    img: '/src/assets/images/Bottels/Ashwagandha.png',
    desc: 'High-quality neoprene for comfort and durability.',
  },
  {
    title: 'Wrap-around design',
    img: '/src/assets/images/Bottels/Ashwagandha.png',
    desc: 'Easy to use wrap-around design for a perfect fit.',
  },
  {
    title: 'Broader width',
    img: '/src/assets/images/Bottels/Ashwagandha.png',
    desc: 'Broader width for better support and coverage.',
  },
  {
    title: 'UBL closing system',
    img: '/src/assets/images/Bottels/Ashwagandha.png',
    desc: 'Enjoy personalized compression with the UBL closing system of the Tynor Abs Support Neo. It provides customized compression and a firm grip on the waist, thus effectively improving the waistline.',
  },
];
const productBenefits = [
  {
    img: '/src/assets/images/benfit/1.jpg',
    title: 'Immunity Booster',
    desc: 'Boosts your immunity naturally with herbal ingredients.',
  },
  {
    img: '/src/assets/images/benfit/51.jpg',
    title: '100% Natural',
    desc: 'Made from 100% natural and organic products.',
  },
  {
    img: '/src/assets/images/benfit/3.jpeg',
    title: 'No Side Effects',
    desc: 'Safe for all age groups, no side effects.',
  },
  // Add more benefits as needed
];
const initialReviews = [
  {
    name: 'Marion Alvarado',
    date: '12.04.24',
    message:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    avatar: '/src/assets/images/admin.jpg',
    rating: 5,
  },
  {
    name: 'Steffi Smith',
    date: '23.04.24',
    message:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    avatar: '/src/assets/images/comment-author-1.jpg',
    rating: 5,
  },
];
const ShopDetail = ({ onAddToCart }) => {
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState(imagesDefault);
  const [colorOptions, setColorOptions] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    // Get product id from URL (assuming /shop-detail/:id)
    const id = window.location.pathname.split('/').pop();
    fetch(`/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🎯 Product data is:', data);
        // Handle images FIRST, then setProduct
        if (data && data.data && Array.isArray(data.data.benefitImages) && data.data.benefitImages.length > 0) {
          setImages(
            data.data.benefitImages.map(img =>
              img.startsWith('http')
                ? img
                : "not found"
            )
          );
        } else if (data && data.data && data.data.productImage) {
          setImages([
            data.data.productImage.startsWith('http')
              ? data.data.productImage
              : "not found"
          ]);
        }

        setProduct(data);

        // Process variants for colors and sizes
        if (data && Array.isArray(data.variants) && data.variants.length > 0) {
          console.log('🔍 Processing variants:', data.variants);
          const colors = [];
          const sizes = [];

          data.variants.forEach((variant, index) => {
            console.log(`🔍 Variant ${index}:`, variant);
            console.log(`🔍 Variant ${index} keys:`, Object.keys(variant));

            // Check variantValues array - this is where your color/size data is!
            if (Array.isArray(variant.variantValues) && variant.variantValues.length >= 2) {
              console.log('✅ Found variantValues:', variant.variantValues);

              // Assuming first value is color, second is size
              const color = variant.variantValues[0];
              const size = variant.variantValues[1];

              console.log('✅ Extracted Color:', color);
              console.log('✅ Extracted Size:', size);

              // Add color if not already exists
              if (color && !colors.some(c => c.value === color.toLowerCase())) {
                colors.push({
                  name: color,
                  value: color.toLowerCase()
                });
                console.log('✅ Added color:', color);
              }

              // Add size if not already exists
              if (size && !sizes.some(s => s.name === size.toLowerCase())) {
                sizes.push({
                  name: size.toLowerCase()
                });
                console.log('✅ Added size:', size);
              }
            }

            // Also check variantName for additional parsing
            if (variant.variantName) {
              console.log('🔍 Parsing variantName:', variant.variantName);
              // variantName like "Red xl" or "Red m"
              const parts = variant.variantName.split(' ');
              if (parts.length >= 2) {
                const nameColor = parts[0];
                const nameSize = parts[1];

                if (nameColor && !colors.some(c => c.value === nameColor.toLowerCase())) {
                  colors.push({
                    name: nameColor,
                    value: nameColor.toLowerCase(),
                  });
                  console.log('✅ Added color from name:', nameColor);
                }

                if (nameSize && !sizes.some(s => s.name === nameSize.toLowerCase())) {
                  sizes.push({
                    name: nameSize.toLowerCase()
                  });
                  console.log('✅ Added size from name:', nameSize);
                }
              }
            }

            // Keep old logic for other possible structures
            Object.keys(variant).forEach(key => {
              const value = variant[key];

              // Check for color-related properties
              if (key.toLowerCase().includes('color') || key.toLowerCase().includes('colour')) {
                console.log('✅ Found color property:', key, '=', value);
                if (value && !colors.some(c => c.value === value.toLowerCase())) {
                  colors.push({
                    name: value,
                    value: value.toLowerCase()
                  });
                }
              }

              // Check for size-related properties
              if (key.toLowerCase().includes('size')) {
                console.log('✅ Found size property:', key, '=', value);
                if (value && !sizes.some(s => s.name === value)) {
                  sizes.push({ name: value });
                }
              }
            });

            // Also check attributes array if exists
            if (Array.isArray(variant.attributes)) {
              console.log('🔍 Attributes array:', variant.attributes);
              variant.attributes.forEach(attr => {
                console.log('🔍 Attribute:', attr);
                if (attr.name && attr.value) {
                  if (attr.name.toLowerCase().includes("color") || attr.name.toLowerCase().includes("colour")) {
                    console.log('✅ Found color in attributes:', attr.value);
                    if (!colors.some(c => c.value === attr.value.toLowerCase())) {
                      colors.push({
                        name: attr.value,
                        value: attr.value.toLowerCase()
                      });
                    }
                  }
                  if (attr.name.toLowerCase().includes("size")) {
                    console.log('✅ Found size in attributes:', attr.value);
                    if (!sizes.some(s => s.name === attr.value)) {
                      sizes.push({ name: attr.value });
                    }
                  }
                }
              });
            }
          });

          console.log('🎯 Final colors extracted:', colors);
          console.log('🎯 Final sizes extracted:', sizes);

          // Set colors
          if (colors.length > 0) {
            setColorOptions(colors);
            setSelectedColor(colors[0].value);
            console.log('✅ Colors set successfully!', colors.length);
          } else {
            console.log('⚠️ No colors found, setting fallback');
            const fallbackColors = [
              { name: 'Red', value: 'red' },
              { name: 'Blue', value: 'blue' },
              { name: 'Green', value: 'green' }
            ];
            setColorOptions(fallbackColors);
            setSelectedColor(fallbackColors[0].value);
          }

          // Set sizes
          if (sizes.length > 0) {
            setSizeOptions(sizes);
            setSelectedSize(sizes[0].name);
            console.log('✅ Sizes set successfully!', sizes.length);
          } else {
            console.log('⚠️ No sizes found, setting fallback');
            const fallbackSizes = [
              { name: 'S' },
              { name: 'M' },
              { name: 'L' },
              { name: 'XL' }
            ];
            setSizeOptions(fallbackSizes);
            setSelectedSize(fallbackSizes[0].name);
          }
        } else {
          console.log('⚠️ No variants array found');
        }
      })
      .catch(error => {
        console.error(' Error fetching product:', error);
      });
  }, []);

   console.log("product is",product);
  // Update selectedVariant when color/size changes
  useEffect(() => {
    if (product && Array.isArray(product.variants)) {
      const found = product.variants.find(variant => {
        // Check variantValues array
        if (Array.isArray(variant.variantValues) && variant.variantValues.length >= 2) {
          const variantColor = variant.variantValues[0].toLowerCase();
          const variantSize = variant.variantValues[1].toLowerCase();
          return variantColor === selectedColor && variantSize === selectedSize;
        }

        // Check variantName
        if (variant.variantName) {
          const parts = variant.variantName.toLowerCase().split(' ');
          if (parts.length >= 2) {
            const nameColor = parts[0];
            const nameSize = parts[1];
            return nameColor === selectedColor && nameSize === selectedSize;
          }
        }

        // Check direct properties
        const colorMatch = variant.color && variant.color.toLowerCase() === selectedColor;
        const sizeMatch = variant.size && variant.size.toLowerCase() === selectedSize;

        // Also check attributes if they exist
        let attrColorMatch = false, attrSizeMatch = false;
        if (Array.isArray(variant.attributes)) {
          variant.attributes.forEach(attr => {
            if (attr.name && attr.value) {
              if (attr.name.toLowerCase().includes("color") && attr.value.toLowerCase() === selectedColor) attrColorMatch = true;
              if (attr.name.toLowerCase().includes("size") && attr.value.toLowerCase() === selectedSize) attrSizeMatch = true;
            }
          });
        }

        return (colorMatch || attrColorMatch) && (sizeMatch || attrSizeMatch);
      });
      setSelectedVariant(found || null);
      console.log('🎯 Selected variant for', selectedColor, '/', selectedSize, ':', found);
    }
  }, [selectedColor, selectedSize, product]);
  const [tab, setTab] = useState(0);
  const benefitRef = useRef(null);
  const featureRef = useRef(null);
  const videoRef = useRef(null);
  const [showReviewForm, setShowReviewForm] = useState(false);



  // Combo Products State
  const [comboProducts, setComboProducts] = useState([]);
  useEffect(() => {
    fetch("/api/combos")
      .then((res) => res.json())
      .then((data) => {
        // Support both array and object response
        if (Array.isArray(data)) {
          setComboProducts(data);
        } else if (Array.isArray(data.data)) {
          setComboProducts(data.data);
        } else if (Array.isArray(data.combos)) {
          setComboProducts(data.combos);
        } else {
          setComboProducts([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching combos:", err);
      });
  }, []);

console.log("combo", comboProducts);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ title: '', comment: '', rating: 0 });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (color) => setSelectedColor(color);
  const handleSizeChange = (size) => setSelectedSize(size);
  const handleQuantity = (type) => {
    setQuantity((q) => {
      if (type === 'inc') return q + 1;
      if (type === 'dec') return q > 1 ? q - 1 : 1;
      return q;
    });
  };

  //   const handleRating = (r) => {
  //     setForm({ ...form, rating: r });
  //   };
  const ratingsCount = [5, 4, 3, 2, 1].map(
    (star) => reviews.filter((r) => r.rating === star).length
  );
  const avgRating =
    reviews.length > 0
      ? (
        reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      ).toFixed(1)
      : '0.0';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.comment && form.rating) {
      setReviews([
        ...reviews,
        {
          name: 'Anonymous',
          date: new Date().toLocaleDateString(),
          message: form.comment,
          title: form.title,
          avatar: '/src/assets/images/admin.jpg',
          rating: form.rating,
        },
      ]);
      setForm({ title: '', comment: '', rating: 0 });
      setShowReviewForm(false);
    }
  };
  return (
    <div>
      {/* Dynamic product loading */}
      {!product ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Loading product...</div>
      ) : null}
      <div className="ayur-bread-section">
        <div className="ayur-breadcrumb-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ayur-bread-content">
                  <h2>Product Details</h2>
                  <div className="ayur-bread-list">
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span className="">
                      <Link to="/shop">Shop</Link>
                    </span>
                    <span className="ayur-active-page">Shop-single</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ayur-bgcover ayur-shopsin-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="row">
              <div className="col-md-6">
                <div className="product-gallery">
                  <Swiper
                    modules={[Navigation, Thumbs]}
                    navigation
                    spaceBetween={10}
                    slidesPerView={1}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="main-swiper"
                  >
                    <SwiperSlide key={0}>
                      <img
                        src={product?.image ? `http://localhost:3000/images/uploads/${product.image}` : ''}
                        alt={`Product ${0}`}
                        style={{
                          borderRadius: '12px',
                          height: '100%',
                          width: '100%',
                        }}
                      />
                    </SwiperSlide>
                    {images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`Product ${idx + 1}`}
                          style={{
                            borderRadius: '12px',
                            height: '100%',
                            width: '100%',
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    watchSlidesProgress
                    modules={[Thumbs]}
                    className="product-thumbnails"
                  >
                    <SwiperSlide key={0}>
                      <img
                        src={`${product?.data?.productImage}`}
                        alt={`Thumb 0`}
                        style={{
                          width: '100%',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          display: 'block',
                          margin: '0 auto',
                        }}
                      />
                    </SwiperSlide>
                    {images.map((img, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={img}
                          alt={`Thumb ${idx + 1}`}
                          style={{
                            width: '100%',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            display: 'block',
                            margin: '0 auto',
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              {/* Product Info */}
              <div className="col-md-6">
                <div className="product-info">
                  <h2 className="product-title">{product?.data?.name || 'Product'}</h2>
                  <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-half-o"></i>
                    <i className="fa fa-star-o"></i>
                    <span style={{ marginLeft: '5px' }}>
                      (4 Customer Reviews)
                    </span>
                  </div>
                  <div className="product-price">
                    <div className="price">
                      ${product?.data?.saleprice}
                      {product?.data?.price && (
                        <del style={{ fontSize: '15px', color: '#b0b0b0', marginLeft: 8 }}>
                          ${product?.data?.price}
                        </del>
                      )}
                      {product?.data?.discount && (
                        <span className="discount" style={{ marginLeft: 8 }}>{product?.data?.discount}</span>
                      )}
                    </div>
                  </div>
                  <p className="product-desc mb-3">
                    {product?.data?.title || 'No description available.'}
                  </p>
                  <div className="product-options mb-3">
                    {/* Color */}
                    <div style={{ marginBottom: 16 }}>
                      <span style={{ fontWeight: 500 }}>Color:</span>
                      <span style={{ marginLeft: 8 }}>
                        {
                          colorOptions.find((c) => c.value === selectedColor)
                            ?.name
                        }
                      </span>
                      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                        {colorOptions.map((color) => (
                          <label
                            key={color.value}
                            style={{ cursor: 'pointer' }}
                          >
                            <input
                              type="radio"
                              name="color"
                              value={color.value}
                              checked={selectedColor === color.value}
                              onChange={() => handleColorChange(color.value)}
                              style={{ display: 'none' }}
                            />
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background:


                                  selectedColor === color.value ? '#222' : '#eee',
                                color:
                                  selectedColor === color.value ? '#fff' : '#222',
                                fontSize: 12,
                                border:
                                  selectedColor === color.value
                                    ? '2px solid #222'
                                    : '2px solid #eee',
                              }}
                            >
                              {color.name}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    {/* Size */}
                    <div style={{ marginBottom: 16 }}>
                      <span style={{ fontWeight: 500 }}>Size:</span>
                      <span style={{ marginLeft: 8 }}>{selectedSize}</span>
                      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                        {sizeOptions.map((size) => (
                          <label key={size.name} style={{ cursor: 'pointer' }}>
                            <input
                              type="radio"
                              name="size"
                              value={size.name}
                              checked={selectedSize === size.name}
                              onChange={() => handleSizeChange(size.name)}
                              style={{ display: 'none' }}
                            />
                            <span
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background:
                                  selectedSize === size.name ? '#222' : '#eee',
                                color:
                                  selectedSize === size.name ? '#fff' : '#222',
                                // fontWeight: 600,
                                fontSize: 12,
                                border:
                                  selectedSize === size.name
                                    ? '2px solid #222'
                                    : '2px solid #eee',
                              }}
                            >
                              {size.name}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                    {/* Quantity */}
                    <div>
                      <span style={{ fontWeight: 500 }}>Quantity:</span>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: 8,
                        }}
                      >
                        <div className='col-4 col-md-3'>
                          <button
                            style={{
                              width: 32,
                              height: 32,
                              border: 'none',
                              background: '#fff',
                              borderRadius: '50%',
                              fontSize: 15,
                              fontWeight: 'bold',
                              boxShadow: '0 0 0 1px #ddd',
                              cursor: 'pointer',
                              marginRight: 8,
                            }}
                            onClick={() => handleQuantity('dec')}
                          >
                            –
                          </button>
                          <span
                            style={{
                              minWidth: 24,
                              textAlign: 'center',
                              fontWeight: 600,
                            }}
                          >
                            {quantity}
                          </span>
                          <button
                            style={{
                              width: 32,
                              height: 32,
                              border: 'none',
                              background: '#fff',
                              borderRadius: '50%',
                              fontSize: 15,
                              fontWeight: 'bold',
                              boxShadow: '0 0 0 1px #ddd',
                              cursor: 'pointer',
                              marginLeft: 8,
                            }}
                            onClick={() => handleQuantity('inc')}
                          >
                            +
                          </button>
                        </div>
                        <div className="col-8 col-md-9">
                          <button
                            className="ayur-btn w-100"
                            onClick={() => {
                              const item = {
                                id: product?.data?._id,
                                name: product?.data?.name,
                                price: product?.data?.saleprice,
                                image: product?.data?.productImage,
                                qty: quantity,
                                color: selectedColor,
                                size: selectedSize,
                              };
                              console.log('🛒 Add to Cart:', item);
                              onAddToCart(item);
                            }}
                          >
                            ADD TO CART – $51.89
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Buttons */}
                    <Link to="/checkout" >
                      <div style={{ marginTop: 5 }}>
                        <button className="ayur-btn ayur-con-btn h-25 w-100">
                          BUY IT NOW
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="ayur-bgshape ayur-shopsin">
          <img src="/src/assets/images/bg-shape1.png" alt="img" />
        </div>
      </div>
       
     <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="ayur-heading-wrap">
                 
                </div>
              </div>
            </div>

             <div className="row">
              {(() => {
                // Show all products in a combo if any comboProducts item matches product._id
                const currentProductId = (product?._id || product?.data?._id)?.toString();
                const shownComboIds = new Set();
                const combosToShow = comboProducts.filter(combo => {
                  if (!Array.isArray(combo.comboProducts)) return false;
                  // If any item in combo.comboProducts matches product._id, show this combo (once)
                  const match = combo.comboProducts.some(item => {
                    const itemId = (item._id || item.id || item)?.toString();
                    return itemId === currentProductId;
                  });
                  if (match && !shownComboIds.has(combo._id?.toString())) {
                    shownComboIds.add(combo._id?.toString());
                    return true;
                  }
                  return false;
                });
                if (combosToShow.length === 0) {
                  return <div style={{ padding: "2rem", textAlign: "center" }}>No combos found for this product.</div>;
                }
                return combosToShow.map((combo) => {
                  // For each combo, show all products in a flex row, Add Combo to Cart button at the end
                  const shownProductIds = new Set();
                  const productsToShow = Array.isArray(combo.comboProducts)
                    ? combo.comboProducts.filter((prod) => {
                        const prodId = (prod._id || prod.id || prod)?.toString();
                        if (shownProductIds.has(prodId)) return false;
                        shownProductIds.add(prodId);
                        return true;
                      })
                    : [];
                  return (
                    <div className="col-lg-12 col-md-12 col-sm-12" key={combo._id || combo.id}>
                      <div className="ayur-tpro-box ayur-trepro-box" style={{ marginBottom: '32px', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 12px #eee' }}>
                        <div className="ayur-tpro-text">
                          <h4 style={{ marginBottom: '18px', fontWeight: 700 }}>Combo Products</h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center', marginBottom: '18px' }}>
                            {productsToShow.length > 0 ? (
  <>
    {productsToShow.map((prod, idx) => {
      const prodId = (prod._id || prod.id || prod)?.toString();
      // Prefer prod.image, then prod.productImage, fallback to no-image
      let imgSrc = '/src/assets/images/no-image.png';
      if (prod.image) {
        imgSrc = `http://localhost:3000/images/uploads/${prod.image}`;
      } else if (prod.productImage) {
        imgSrc = `/images/uploads/${prod.productImage}`;
      }
      // Price logic: show only if valid number
      const sale = Number(prod.salePrice);
      const mrp = Number(prod.mrpPrice);
      const hasSale = !isNaN(sale) && sale > 0;
      const hasMrp = !isNaN(mrp) && mrp > 0;
      const showDiscount = hasSale && hasMrp && sale < mrp;
      let discountPercent = 0;
      if (showDiscount) {
        // Use Math.floor to avoid rounding up small discounts to 1%
        discountPercent = Math.floor(((mrp - sale) / mrp) * 100);
        // If discount is at least 1 but less than 1.5, show 1%
        if (discountPercent === 0 && (mrp - sale) > 0) {
          discountPercent = 1;
        }
      }
      return (
        <React.Fragment key={prodId || idx}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 120, maxWidth: 160, background: '#fafafa', borderRadius: '8px', padding: '12px 8px', boxShadow: '0 1px 6px #eee' }}>
            <img src={imgSrc} alt={prod.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '6px', marginBottom: 8 }} />
            <span style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{prod.name}</span>
            <span style={{ color: '#60748a', fontSize: 14, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
              {hasSale ? (
                <>
                  ₹{sale.toFixed(2)}
                  {hasMrp && (
                    <del style={{ fontSize: '13px', color: '#b0b0b0', marginLeft: 4 }}>₹{mrp.toFixed(2)}</del>
                  )}
                  {showDiscount && (
                    <span style={{ background: '#ff4d4f', color: '#fff', borderRadius: 8, padding: '2px 8px', fontWeight: 600, fontSize: 13, marginLeft: 4 }}>{discountPercent}%</span>
                  )}
                </>
              ) : hasMrp ? (
                <>
                  ₹{mrp.toFixed(2)}
                </>
              ) : (
                <span style={{ color: '#b0b0b0' }}>Contact for price</span>
              )}
            </span>
          </div>
          {/* Add + between products except last */}
          {idx < productsToShow.length - 1 && (
            <span style={{ fontSize: 28, fontWeight: 700, color: '#222', margin: '0 12px' }}>+</span>
          )}
        </React.Fragment>
      );
    })}
               <span style={{ fontSize: 28, fontWeight: 700, color: '#222', margin: '0 12px' }}>=</span>
    {/* Total price and button at the end of the row */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: 220, maxWidth: 260, background: 'transparent', borderRadius: 0, padding: 0, boxShadow: 'none', height: '100%' }}>
      {/* Calculate total price for combo */}
      {(() => {
        let totalSale = 0, totalMrp = 0, validCount = 0;
        productsToShow.forEach(prod => {
          const sale = Number(prod.salePrice);
          const mrp = Number(prod.mrpPrice);
          if (!isNaN(sale) && sale > 0) {
            totalSale += sale;
            validCount++;
          } else if (!isNaN(mrp) && mrp > 0) {
            totalSale += mrp;
            validCount++;
          }
          if (!isNaN(mrp) && mrp > 0) {
            totalMrp += mrp;
          } else if (!isNaN(sale) && sale > 0) {
            totalMrp += sale;
          }
        });
        let discountPercent = 0;
        if (totalMrp && totalSale < totalMrp) {
          discountPercent = Math.floor(((totalMrp - totalSale) / totalMrp) * 100);
          if (discountPercent === 0 && (totalMrp - totalSale) > 0) {
            discountPercent = 1;
          }
        }
        return (
          <>
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>Total price:</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              {validCount > 0 ? (
                <>
                  <span style={{ fontSize: 22, fontWeight: 700, color: '#222' }}>₹{totalSale.toFixed(2)}</span>
                  {totalMrp > totalSale && (
                    <del style={{ fontSize: 16, color: '#b0b0b0' }}>₹{totalMrp.toFixed(2)}</del>
                  )}
                  {discountPercent > 0 && (
                    <span style={{ background: '#ff4d4f', color: '#fff', borderRadius: 8, padding: '2px 8px', fontWeight: 600, fontSize: 13 }}>{discountPercent}% OFF</span>
                  )}
                </>
              ) : (
                <span style={{ color: '#b0b0b0' }}>Contact for price</span>
              )}
            </div>
          </>
        );
      })()}

      <button
        className="ayur-btn ayur-con-btn h-25 w-100"
 
        onClick={() => {
          // Add all products in this combo to cart (only once per product)
          productsToShow.forEach((prod) => {
            const prodId = (prod._id || prod.id || prod)?.toString();
            // Use salePrice and mrpPrice for price (case-sensitive)
            let price = null;
            if (typeof prod.salePrice !== 'undefined' && prod.salePrice !== null) {
              price = prod.salePrice;
            } else if (typeof prod.mrpPrice !== 'undefined' && prod.mrpPrice !== null) {
              price = prod.mrpPrice;
            }

              let imageUrl = '';
     if (prod.image) {
      imageUrl = `http://localhost:3000/images/uploads/${prod.image}`;
    } else if (prod.productImage) {
      imageUrl = prod.productImage.startsWith('http')
        ? prod.productImage
        : `/images/uploads/${prod.productImage}`;
    }  

            onAddToCart({
              id: prodId,
              name: prod.name,
              price: price,
              image: imageUrl,
              qty: 1,
            });
          });
        }}
      >


        Add Combo to Cart
      </button>
    </div>
  </>
                            ) : (
                              <div style={{ color: '#888', fontSize: 16 }}>No products in this combo.</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </div> 
          </div>

      <div>
        <div className="my-4 sticky-nav-wrapper">
          <ul
            className="nav nav-tabs mb-4 nav-product border-0"
            id="productTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link border-0 nav-button"
                type="button"
                onClick={() => scrollToSection(benefitRef)}
              >
                Product Benefits
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link border-0 nav-button"
                type="button"
                onClick={() => scrollToSection(featureRef)}
              >
                Product Features
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link border-0 nav-button"
                type="button"
                onClick={() => scrollToSection(videoRef)}
              >
                Product Video
              </button>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 co-md-12 col-sm-12">
              <div className="ayur-shopsin-tablist">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabIndex="0"
                  >
                    <div className="ayur-product-desc mb-3">
                      <h4 className="fw-bold">🌿 Ashwagandha – The Natural Secret of Strength, Balance & Wellness</h4>
                      <p>
                        {product?.data?.description}


                      </p>
                      <div className='pt-3'>
                        <h4 className="fw-bold">Relieve Stress and Fatigue Naturally</h4>
                        <p>



                        </p>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '48px',
                          flexWrap: 'wrap',
                          marginTop: '32px',
                          marginBottom: '16px',
                          alignItems: 'flex-start',
                        }}
                      >
                        <div
                          className="pt-3"
                          style={{ flex: 1, minWidth: 250 }}
                        >
                          <h5
                            className="mb-2"
                            style={{ fontWeight: 700, marginBottom: 12 }}
                          >
                            Features
                          </h5>
                          <ul
                            style={{
                              color: '#60748a',
                              fontSize: 17,
                              marginBottom: 0,
                            }}
                          >
                            <li>🌱 100% Pure Ashwagandha Root Extract</li>
                            <li>Premium Quality Ashwagandha Root Extract</li>
                            <li>Ancient Ayurvedic Formulation</li>
                            <li>Supports Better Sleep and Mental Clarity</li>
                            <li>Boosts Energy, Stamina, and Immunity</li>
                            <li>Suitable for Men and Women</li>
                          </ul>
                        </div>
                        <div
                          className="pt-3"
                          style={{ flex: 1, minWidth: 250 }}
                        >
                          <h5
                            className="mb-2"
                            style={{ fontWeight: 700, marginBottom: 12 }}
                          >
                            Specifications
                          </h5>
                          <ul
                            style={{
                              color: '#60748a',
                              fontSize: 17,
                              marginBottom: 0,
                            }}
                          >
                            <li>
                              <strong>Form:</strong> Capsule / Powder
                            </li>
                            <li>
                              <strong>Net Weight:</strong> 60 Capsules / 100g Powder
                            </li>
                            <li>
                              <strong>Recommended Dosage:</strong> 1–2 capsules daily or as directed
                            </li>
                            <li>
                              <strong>Shelf Life:</strong> 24 months
                            </li>
                            <li>
                              <strong>Available Colors:</strong> White/Red/Blue,
                              Black/Orange/Green
                            </li>
                            <li>
                              <strong>Made In:</strong> India
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div ref={benefitRef} className="container my-5">
          {/* <h3>Product Benefits</h3> */}
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            autoHeight={true}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 1000, disableOnInteraction: false }} // <-- Add this line
            style={{ maxWidth: '100%', maxHeight: '400px', margin: '0 auto' }}
          >
            {productBenefits.map((benefit, idx) => (
              <SwiperSlide key={idx}>
                <div className="text-center">
                  <img
                    src={benefit.img}
                    alt={benefit.title}
                    style={{
                      width: '100%',
                      borderRadius: '16px',
                      height: '400px',
                      marginBottom: '20px',
                    }}
                  />
            
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div ref={featureRef} className="container my-5">
          {/* <h3>Product Features</h3> */}
          <div className="feature-cards-row">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-card-front">
                  <span>{f.title}</span>
                </div>
                <div className="feature-card-hover">
                  <img src={f.img} alt={f.title} />
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={videoRef} className="container my-5">
          <div className="product-video-section text-center">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/cAmHkT6IOC4?si=swQ8riWgQMxNf4kI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ borderRadius: '16px' }}
            />
          </div>
        </div>

        {/* Customer Reviews Section */}

        <div className="container">
          <div className="row my-5">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div
                className="ayur-shopsin-tablist"
                style={{
                  border: '1px solid #eee',
                  borderRadius: 8,
                  padding: 24,
                }}
              >
                <h4>Customer Reviews</h4>
                <div
                  className="review-summary-box"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',

                    marginBottom: 32,
                    gap: 32,
                  }}
                >
                  <div style={{ marginLeft: 30 }}>
                    <div style={{ fontSize: 48, fontWeight: 700 }}>
                      {avgRating}
                    </div>
                    <div>
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src="/src/assets/images/star-icon.png"
                          alt="star"
                          style={{
                            width: 18,
                            opacity: i < Math.round(avgRating) ? 1 : 0.2,
                          }}
                        />
                      ))}
                    </div>
                    <div style={{ fontSize: 14, color: '#888' }}>
                      ({reviews.length} Ratings)
                    </div>
                  </div>
                  <div style={{ flex: 1, marginLeft: 32, maxWidth: 400 }}>
                    {[5, 4, 3, 2, 1].map((star, idx) => (
                      <div
                        key={star}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: 4,
                        }}
                      >
                        <span style={{ width: 50 }}>
                          {star}{' '}
                          <img
                            src="/src/assets/images/star-icon.png"
                            alt="star"
                            style={{ width: 12, marginBottom: 2 }}
                          />
                        </span>
                        <div
                          style={{
                            background: '#eee',
                            height: 8,
                            borderRadius: 4,
                            flex: 1,
                            margin: '0 8px',
                            minWidth: 150,
                          }}
                        >
                          <div
                            style={{
                              background: '#ffc107',
                              width: reviews.length
                                ? `${(ratingsCount[idx] / reviews.length) * 100
                                }%`
                                : '0%',
                              height: 8,
                              borderRadius: 4,
                            }}
                          ></div>
                        </div>
                        <span style={{ width: 50, textAlign: 'right' }}>
                          {ratingsCount[idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <button
                      className="ayur-btn ayur-con-btn"
                      style={{ minWidth: 160, marginBottom: 16, fontSize: 14 }}
                      onClick={() => setShowReviewForm((prev) => !prev)}
                    >
                      {showReviewForm ? 'CLOSE FORM' : 'WRITE A REVIEW'}
                    </button>
                  </div>
                </div>

                <div style={{ minWidth: 200 }}>
                  <div>
                    {showReviewForm && (
                      <div
                        className="ayur-comments-for ayur-shopsin-form p-0 p-md-4"
                        style={{ marginBottom: 16 }}
                      >
                        <h3>Add A Review</h3>
                        <div className="ayur-shopsin-formrate">
                          <p>Rate This Product</p>
                          {[1, 2, 3, 4, 5].map((r) => (
                            <img
                              key={r}
                              src={
                                form.rating >= r
                                  ? '/src/assets/images/star-icon.png'
                                  : '/src/assets/images/star-gray.svg'
                              }
                              alt="star"
                              style={{ cursor: 'pointer' }}
                              onClick={() =>
                                setForm((f) => ({ ...f, rating: r }))
                              }
                            />
                          ))}
                        </div>
                        <form
                          className="ayur-leave-form"
                          onSubmit={handleSubmit}
                        >
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                              <div className="ayur-form-input">
                                <input
                                  type="text"
                                  className="form-control require"
                                  placeholder="Review Title"
                                  name="title"
                                  value={form.title}
                                  onChange={handleInput}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="ayur-form-input">
                                <textarea
                                  name="comment"
                                  cols="3"
                                  rows="8"
                                  className="form-control require"
                                  placeholder="Review Comment..."
                                  value={form.comment}
                                  onChange={handleInput}
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <button
                                type="submit"
                                className="ayur-btn ayur-con-btn submitForm"
                              >
                                Post Review
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                  <h5 style={{ marginBottom: 16 }}>
                    {reviews.length.toString().padStart(2, '0')} Comments
                  </h5>
                  <div style={{ maxHeight: 300, overflowY: 'auto' }}>
                    {reviews.map((rev, idx) => (
                      <div key={idx} style={{ marginBottom: 16 }}>
                        <div className="ayur-blog-post-para">
                          <h3>
                            {rev.title ? rev.title : 'Review'}{' '}
                            <span>({rev.date})</span>
                          </h3>
                          <p>{rev.message}</p>
                        </div>
                      </div>
                    ))}
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
                {/* <h5>Product</h5> */}
                <h3>Related Product</h3>
              </div>
            </div>
          </div>

         
           {/*  <div className="row">
              {(() => {
                // Show all products in a combo if any comboProducts item matches product._id
                const currentProductId = (product?._id || product?.data?._id)?.toString();
                const shownComboIds = new Set();
                const combosToShow = comboProducts.filter(combo => {
                  if (!Array.isArray(combo.comboProducts)) return false;
                  // If any item in combo.comboProducts matches product._id, show this combo (once)
                  const match = combo.comboProducts.some(item => {
                    const itemId = (item._id || item.id || item)?.toString();
                    return itemId === currentProductId;
                  });
                  if (match && !shownComboIds.has(combo._id?.toString())) {
                    shownComboIds.add(combo._id?.toString());
                    return true;
                  }
                  return false;
                });
                if (combosToShow.length === 0) {
                  return <div style={{ padding: "2rem", textAlign: "center" }}>No combos found for this product.</div>;
                }
                return combosToShow.map((combo) => {
                  // For each combo, show all products in a flex row, Add Combo to Cart button at the end
                  const shownProductIds = new Set();
                  const productsToShow = Array.isArray(combo.comboProducts)
                    ? combo.comboProducts.filter((prod) => {
                        const prodId = (prod._id || prod.id || prod)?.toString();
                        if (shownProductIds.has(prodId)) return false;
                        shownProductIds.add(prodId);
                        return true;
                      })
                    : [];
                  return (
                    <div className="col-lg-12 col-md-12 col-sm-12" key={combo._id || combo.id}>
                      <div className="ayur-tpro-box ayur-trepro-box" style={{ marginBottom: '32px', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 12px #eee' }}>
                        <div className="ayur-tpro-text">
                          <h4 style={{ marginBottom: '18px', fontWeight: 700 }}>{combo.name}</h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center', marginBottom: '18px' }}>
                            {productsToShow.length > 0 ? (
                              productsToShow.map((prod, idx) => {
                                const prodId = (prod._id || prod.id || prod)?.toString();
                                // Prefer prod.image, then prod.productImage, fallback to no-image
                                let imgSrc = '/src/assets/images/no-image.png';
                                if (prod.image) {
                                  imgSrc = `http://localhost:3000/images/uploads/${prod.image}`;
                                } else if (prod.productImage) {
                                  imgSrc = `/images/uploads/${prod.productImage}`;
                                }
                                // Use prod.salePrice and prod.mrpPrice for price display (case-sensitive)
                                return (
                                  <div key={prodId || idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 120, maxWidth: 160, background: '#fafafa', borderRadius: '8px', padding: '12px 8px', boxShadow: '0 1px 6px #eee' }}>
                                    <img src={imgSrc} alt={prod.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '6px', marginBottom: 8 }} />
                                    <span style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{prod.name}</span>
                                    <span style={{ color: '#60748a', fontSize: 14, marginBottom: 4 }}>
                                      {typeof prod.salePrice !== 'undefined' && prod.salePrice !== null ? (
                                        <>
                                          ₹{prod.salePrice}
                                          {prod.mrpPrice && (
                                            <del style={{ fontSize: '13px', color: '#b0b0b0', marginLeft: 6 }}>₹{prod.mrpPrice}</del>
                                          )}
                                        </>
                                      ) : prod.mrpPrice ? (
                                        <>₹{prod.mrpPrice}</>
                                      ) : (
                                        <>No price</>
                                      )}
                                    </span>
                                  </div>
                                );
                              })
                            ) : (
                              <div style={{ color: '#888', fontSize: 16 }}>No products in this combo.</div>
                            )}
                          </div>
                          <div style={{ textAlign: 'right', marginTop: '12px' }}>
                            <button
                              className="ayur-btn"
                              style={{ minWidth: 180, fontSize: 16, fontWeight: 600, borderRadius: '8px', padding: '10px 24px' }}
                              onClick={() => {
                                // Add all products in this combo to cart (only once per product)
                                productsToShow.forEach((prod) => {
                                  const prodId = (prod._id || prod.id || prod)?.toString();
                                  // Use salePrice and mrpPrice for price (case-sensitive)
                                  let price = null;
                                  if (typeof prod.salePrice !== 'undefined' && prod.salePrice !== null) {
                                    price = prod.salePrice;
                                  } else if (typeof prod.mrpPrice !== 'undefined' && prod.mrpPrice !== null) {
                                    price = prod.mrpPrice;
                                  }
                                  onAddToCart({
                                    id: prodId,
                                    name: prod.name,
                                    price: price,
                                    image: prod.image || prod.productImage,
                                    qty: 1,
                                  });
                                });
                              }}
                            >
                              Add Combo to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </div> */}
         
          <div className="ayur-bgshape ayur-trenpro-bgshape">
            <img src="/src/assets/images/bg-shape3.png" alt="img" />
            <img src="/src/assets/images/bg-leaf3.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;


