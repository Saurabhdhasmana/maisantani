import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginModal = ({ show, onClose, onRegisterOpen }) => {
  if (!show) return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const loginData = {
      email,
      password
    };

    try {
      const response = await axios.post("http://localhost:3000/api/user/login", loginData);
      console.log("Login response:", response);
      if (response.data && response.data.token && response.data.user) {
        toast.success(response.data.message || "Login successful!", {
          theme: "light",
          style: { borderLeft: '8px solid #4caf50' }
        });
        // Admin check and redirect
        if (response.data.user.role === true || response.data.user.isAdmin === true) {
          window.location.href = "http://localhost:5173/dashboard";
        } else {
          if (onClose) onClose();
        }
      } else {
        toast.error(response.data?.error || response.data?.message || "Login failed", {
          theme: "light",
          style: { borderLeft: '8px solid #d32f2f' }
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.error || error.response?.data?.message || "Login failed", {
        theme: "light",
        style: { borderLeft: '8px solid #d32f2f' }
      });
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)",  transition: "opacity 0.3s ease-in-out" }}>
        <div className="modal-dialog modal-lg modal-dialog-centered ayur-login-modal-animate">
          <div className="modal-content p-0">
            <div className="modal-body p-0">
              <div className="row justify-content-center" style={{ position: "relative" }}>
                
                {/* Left Image Section */}
                <div className="col-lg-6 col-md-6 d-none d-md-block p-0">
                  <div className="w-100 rounded-0">
                    <img
                      src="/src/assets/images/Login.png"
                      alt="Login Illustration"
                      style={{ maxWidth: "100%", height: "100%", width: "100%", borderRadius: "10px 0 0 10px" }}
                    />
                  </div>
                </div>

                {/* Right Form Section */}
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
                style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1000 }}
              ></button>
                  <div className="ayur-login-section p-5">
                    <div className="ayur-login-head mb-3 h-100 text-center">
                      <h2 className="fw-bold">Welcome Back! <span className="h-sanatani">Mai Sanatani</span></h2>
                    </div>
                    <div className="ayur-login-head mb-3 h-100 text-center">
                      <h3 className="fw-bold">Login</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* Email Field */}
                      <div className="form-group mb-3">
                        <label htmlFor="email">Email:</label>
                        <input
                          className="form-control"
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      {/* Password Field with Toggle */}
                      <div className="ayur-login-form mb-3" style={{ position: 'relative' }}>
                        <label htmlFor="password">Password:</label>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          className="form-control"
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            position: 'absolute',
                            top: '34px',
                            right: '12px',
                            cursor: 'pointer',
                            color: '#555',
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>

                      {/* Remember me and forgot password */}
                      <div className="mt-3">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" name="remember" style={{ maxHeight: "1em" }} /> Remember me
                        </label>
                        <Link to="/forgot-password" className="float-end">Forgot Password?</Link>
                      </div>

                      {/* Submit */}
                      <div className="mt-3">
                        <button type="submit" className="ayur-btn">Login</button>
                      </div>
                    </form>

                    {/* Register Link */}
                    <p className='mt-3'>Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); onRegisterOpen(); }}>Register</a></p>
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
