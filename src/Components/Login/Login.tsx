import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './Login.css';

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    alert('Welcome!');
  };

  const handleCreateAccount = () => {
    alert('Create account!');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label>Email</label>
      <input type="email" placeholder="Your Email" />
      <label>Password</label>
      <div className="password-input">
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Secret Password"
        />
        <span onClick={togglePasswordVisibility}>
          {passwordVisible ? <AiFillEyeInvisible/> : <AiFillEye/>}
        </span>
      </div>
      <button onClick={handleLogin}>Get In</button>
      <hr />
      <label>
        <a href="#">I forgot my password</a>
      </label>
      <hr />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default Login;
