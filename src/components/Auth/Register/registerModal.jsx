import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../Login/login.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterModal = ({ show, onClose, onLoginOpen }) => {
  if (!show) return null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
   

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const registerData = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:3000/api/user/signup", registerData);
      const errorMsg = response.data?.error || response.data?.message || "";
      if (response.data && response.data.user && response.data.message) {
        toast.success(response.data.message);
        if (onClose) onClose();
        setTimeout(() => {
          if (onLoginOpen) onLoginOpen();
        }, 0);
      } else if (errorMsg.toLowerCase().includes('user already exists')) {
        toast.info("Account already exists. Please login.");
        if (onClose) onClose();
        setTimeout(() => {
          if (onLoginOpen) onLoginOpen();
        }, 0);
      } else {
        toast.error(errorMsg || "Registration failed");
      }
    } catch (error) {
      const errMsg = error.response?.data?.error || error.response?.data?.message || "Registration failed";
      if (errMsg.toLowerCase().includes('user already exists')) {
        toast.info("Account already exists. Please login.");
        if (onClose) onClose();
        setTimeout(() => {
          if (onLoginOpen) onLoginOpen();
        }, 0);
      } else {
        toast.error(errMsg);
      }
    }

    // Reset fields
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
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
                      {/* Name */}
                      <div className="form-group mb-3">
                        <label htmlFor="name">Name:</label>
                        <input
                          className="form-control"
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      {/* Email */}
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

                      {/* Password */}
                      <div className="form-group mb-3" style={{ position: 'relative' }}>
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
                            top: '38px',
                            right: '12px',
                            cursor: 'pointer',
                            color: '#555',
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>

                      

                      {/* Submit */}
                      <div className="mt-3">
                        <button type="submit" className="ayur-btn">Register</button>
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
