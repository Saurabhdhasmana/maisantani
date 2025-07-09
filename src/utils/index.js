import axios from 'axios';

export const server = 'http://localhost:4000';

// Helper function to validate if a string is a valid ObjectId
const isValidObjectId = (str) => {
  return /^[0-9a-fA-F]{24}$/.test(str);
};

export const createOrder = async (order) => {
  try {
    console.log("[API REQUEST] Order payload:", order);
    
    const user = JSON.parse(localStorage.getItem('user'));
    let userId = null;
    
    // Only process userId if it exists and is a valid ObjectId format
    if (user?._id && isValidObjectId(user._id)) {
      userId = user._id; // Keep as string - let backend handle ObjectId conversion
    }

    const backendOrder = {
      ...order,
      customer: {
        ...order.customer,
        id: userId, // Send as string or null
        userId: userId // Keep string version for consistency
      },
      payment: {
        method: order.payment.method.toLowerCase()
      }
    };

    const response = await axios.post(`${server}/orders/create`, backendOrder, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });

    return response.data;
    
  } catch (error) {
    console.error("[API ERROR] Order creation failed:", error);
    
    // Extract more detailed error message from backend if available
    const serverMessage = error.response?.data?.error || 
                        error.response?.data?.message ||
                        error.message;
    
    throw new Error(serverMessage || 'Failed to create order. Please try again.');
  }
};

// ✅ GET ALL ORDERS
export const getAllOrders = async () => {
  try {
    const response = await axios.get(`${server}/orders/getAllOrder`);
    return response.data;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};


export const userSignup = async (data) => {
  try {
    const response = await axios.post(`${server}/user/register`, data);
    return response.data;
  } catch (error) {
    console.error('Error signing up user:', error);
    throw error;
  }
};


export const userLogin = async (data) => {
  try {
    const response = await axios.post(`${server}/user/login`, data);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

export const userSignupURL = `${server}/user/register`;
export const userLoginURL = `${server}/user/login`;
export const orderStatusURL = `${server}/orders/getAllOrder`;
export const createOrderURL = `${server}/orders/create`;