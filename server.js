const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'src/assets/images')));

// Sample products data
const products = [
    {
        _id: "1",
        name: "Ashwagandha Capsules",
        mrpPrice: 399,
        salePrice: 299,
        image: "Ashwagandha-1.webp",
        description: "Natural stress relief supplement made from premium ashwagandha root extract.",
        category: "Herbal Supplements",
        inStock: true,
        rating: 4.5,
        reviews: 120
    },
    {
        _id: "2",
        name: "Deep Sleep Formula",
        mrpPrice: 499,
        salePrice: 399,
        image: "deepsleep.webp",
        description: "Promotes better sleep quality with natural herbs and melatonin.",
        category: "Sleep Support",
        inStock: true,
        rating: 4.3,
        reviews: 85
    },
    {
        _id: "3",
        name: "Men's Care",
        mrpPrice: 599,
        salePrice: 499,
        image: "mencare.webp",
        description: "Complete men's health solution with essential vitamins and minerals.",
        category: "Men's Health",
        inStock: true,
        rating: 4.7,
        reviews: 200
    },
    {
        _id: "4",
        name: "Energy Booster",
        mrpPrice: 449,
        salePrice: 349,
        image: "booster.webp",
        description: "Natural energy enhancement with B-vitamins and herbal extracts.",
        category: "Energy Support",
        inStock: true,
        rating: 4.2,
        reviews: 150
    },
    {
        _id: "5",
        name: "Ashwagandha Premium",
        mrpPrice: 599,
        salePrice: 499,
        image: "Ashwagandha-2.webp",
        description: "Premium quality ashwagandha with higher potency and bioavailability.",
        category: "Herbal Supplements",
        inStock: true,
        rating: 4.8,
        reviews: 300
    },
    {
        _id: "6",
        name: "1st Place Winner",
        mrpPrice: 799,
        salePrice: 699,
        image: "1st.webp",
        description: "Award winning supplement with multiple health benefits.",
        category: "Multi-vitamins",
        inStock: true,
        rating: 4.9,
        reviews: 500
    }
];

// Sample users data
const users = [
    {
        _id: "1",
        email: "admin@example.com",
        password: "admin123",
        name: "Admin User",
        role: "admin"
    },
    {
        _id: "2",
        email: "user@example.com",
        password: "user123",
        name: "Test User",
        role: "user"
    }
];

// Routes
app.get('/api/product', (req, res) => {
    res.json(products);
});

app.get('/api/product/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

app.post('/api/user/signup', (req, res) => {
    const { email, password, name } = req.body;
    
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create new user
    const newUser = {
        _id: (users.length + 1).toString(),
        email,
        password, // In real app, hash this password
        name,
        role: 'user'
    };
    
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully', user: { _id: newUser._id, email: newUser.email, name: newUser.name } });
});

app.post('/api/user/login', (req, res) => {
    const { email, password } = req.body;
    
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    res.json({ 
        message: 'Login successful', 
        user: { _id: user._id, email: user.email, name: user.name, role: user.role },
        token: 'dummy-jwt-token' // In real app, generate actual JWT
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API endpoints:`);
    console.log(`- GET /api/product - Get all products`);
    console.log(`- GET /api/product/:id - Get product by ID`);
    console.log(`- POST /api/user/signup - User registration`);
    console.log(`- POST /api/user/login - User login`);
});
