import React, { useState } from "react";
import { toast } from "react-toastify";
import { userSignup } from "../../../utils";
import "../Login/login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterModal = ({ show, onClose, onLoginOpen }) => {
  if (!show) return null;

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role
      };
      
      const response = await userSignup(payload);
      
      if (response.success) {
        toast.success('Registration successful!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        
        // Close register modal and open login with prefilled data
        onClose();
        onLoginOpen({
          prefilledEmail: formData.email,
          prefilledPassword: formData.password
        });
      } else {
        toast.error(response.message || 'Registration failed', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    } catch (error) {
      let errorMessage = 'Registration failed. Please try again.';
      if (error.response?.data?.error?.includes('E11000')) {
        errorMessage = 'Username or email already exists';
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-0">
            <div className="modal-body p-0">
              <div className="row justify-content-center" style={{ position: "relative" }}>
                
                {/* Left Image */}
                <div className="col-lg-6 col-md-6 d-none d-md-block p-0">
                  <div className="w-100 rounded-0">
                    <img
                      src="/src/assets/images/Login.png"
                      alt="Register Illustration"
                      style={{ maxWidth: "100%", height: "668px", width: "100%", borderRadius: "10px 0 0 10px" }}
                    />
                  </div>
                </div>

                {/* Right Form */}
                <div
                  className="col-lg-6 col-md-6 col-sm-12 text-start"
                  style={{
                    backgroundImage: "url('/src/assets/images/login-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "auto",
                    borderRadius: "0 10px 10px 0",
                    maxWidth: "100%",
                  }}
                >
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={onClose}
                    style={{position: "absolute", top: "10px", right: "10px", zIndex: 1000 }}
                  ></button>
                  <div className="ayur-login-section p-5">
                    <div className="ayur-login-head mb-3 h-100 text-center">
                      <h2 className="fw-bold">Create Account <span className="h-sanatani">Mai Sanatani</span></h2>
                    </div>
                    <div className="ayur-login-head mb-3 h-100 text-center">
                      <h3 className="fw-bold">Register</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* Username */}
                      <div className="form-group mb-3">
                        <label htmlFor="username">Username:</label>
                        <input
                          className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                          type="text"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                      </div>

                      {/* Email */}
                      <div className="form-group mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>

                      {/* Password */}
                      <div className="form-group mb-3" style={{ position: 'relative' }}>
                        <label htmlFor="password">Password:</label>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            position: 'absolute',
                            top: '38px',
                            right: '12px',
                            cursor: 'pointer',
                            color: '#555',
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                      </div>

                      {/* Confirm Password */}
                      <div className="form-group mb-3" style={{ position: 'relative' }}>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                      </div>

                      {/* Submit */}
                      <div className="mt-3">
                        <button 
                          type="submit" 
                          className="ayur-btn"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Registering...' : 'Register'}
                        </button>
                      </div>
                      {/* Login Link */}
                      <p className='mt-3'>Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); onLoginOpen(); }}>Login</a></p>
                    </form>
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

export default RegisterModal;