import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { userLogin } from "../../../utils";
import { toast } from "react-toastify";
import "./login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginModal = ({ show, onClose, onRegisterOpen, prefilledEmail = '', prefilledPassword = '' }) => {
  if (!show) return null;

  const [email, setEmail] = useState(prefilledEmail);
  const [password, setPassword] = useState(prefilledPassword);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setEmail(prefilledEmail);
    setPassword(prefilledPassword);
  }, [prefilledEmail, prefilledPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await userLogin({ email, password });
      
      if (response.success) {
        // Green success notification
        toast.success('Login successful! Redirecting...', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            borderLeft: '8px solid #4CAF50', // Green accent
            background: '#f8f9fa', // Light background
            color: '#333' // Dark text
          },
          progressStyle: {
            background: '#4CAF50' // Green progress bar
          }
        });

        // Handle successful login
        if (response.data.user.role === true || response.data.user.isAdmin === true) {
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 2000);
        } else {
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }
        
        if (onClose) onClose();
      } else {
        toast.error(response.message || 'Login failed', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed', {
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
                
                {/* Left Image Section */}
                <div className="col-lg-6 col-md-6 d-none d-md-block p-0">
                  <img
                    src="/src/assets/images/Login.png"
                    alt="Login Illustration"
                    className="w-100 h-100"
                    style={{ borderRadius: "10px 0 0 10px" }}
                  />
                </div>

                {/* Right Form Section */}
                <div
                  className="col-lg-6 col-md-6 col-sm-12 text-start"
                  style={{
                    backgroundImage: "url('/src/assets/images/login-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "0 10px 10px 0",
                  }}
                >
                  <button
                    type="button"
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px", zIndex: 1000 }}
                    onClick={onClose}
                    aria-label="Close"
                  ></button>
                  
                  <div className="ayur-login-section p-5">
                    <div className="text-center mb-4">
                      <h2 className="fw-bold">Welcome Back! <span className="h-sanatani">Mai Sanatani</span></h2>
                      <h3 className="fw-bold">Login</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3 position-relative">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="form-control"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <span
                          className="position-absolute end-0 top-50 translate-middle-y me-2"
                          style={{ cursor: 'pointer', color: '#555' }}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>

                      <div className="d-flex justify-content-between mb-3">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="remember" />
                          <label className="form-check-label" htmlFor="remember">Remember me</label>
                        </div>
                        <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
                      </div>

                      <button 
                        type="submit" 
                        className="btn ayur-btn w-100 py-2"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Logging in...
                          </>
                        ) : 'Login'}
                      </button>
                    </form>

                    <div className="text-center mt-3">
                      <p>Don't have an account?{' '}
                        <a 
                          href="#" 
                          className="text-decoration-none"
                          onClick={(e) => {
                            e.preventDefault();
                            onRegisterOpen();
                          }}
                        >
                          Register
                        </a>
                      </p>
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

export default LoginModal;