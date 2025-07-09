import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const AuthModals = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginPrefill, setLoginPrefill] = useState({
    prefilledEmail: '',
    prefilledPassword: ''
  });

  const handleRegisterSuccess = (email, password) => {
    setShowRegister(false);
    setLoginPrefill({
      prefilledEmail: email,
      prefilledPassword: password
    });
    setShowLogin(true);
  };

  return (
    <>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <button onClick={() => setShowRegister(true)}>Register</button>

      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onRegisterOpen={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
        prefilledEmail={loginPrefill.prefilledEmail}
        prefilledPassword={loginPrefill.prefilledPassword}
      />

      <RegisterModal
        show={showRegister}
        onClose={() => setShowRegister(false)}
        onLoginOpen={({ prefilledEmail, prefilledPassword }) => {
          setShowRegister(false);
          setLoginPrefill({ prefilledEmail, prefilledPassword });
          setShowLogin(true);
        }}
      />
    </>
  );
};

export default AuthModals;