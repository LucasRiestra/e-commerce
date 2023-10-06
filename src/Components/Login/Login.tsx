import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './Login.css';

interface UserData {
  username: string;
  password: string;
}

const Login: React.FC = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    const storedUsersData = JSON.parse(localStorage.getItem('usersData') || '[]');
    const user = storedUsersData.find((userData: UserData) => userData.username === username && userData.password === password);

    if (user) {
      console.log('Inicio de sesión exitoso');
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div className="container">
      <div className="login-container">
      <h2>Login</h2>
      <label>User Name</label>

      <input type="Username"
       placeholder="Your User Name"
       value={username}
        onChange={handleUsernameChange} 
        />

      <label>Password</label>
      <div className="password-input">
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder=" Password" 
          value={password}
          onChange={handlePasswordChange}
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
      <button>Create Account</button>
      </div>

    <p>Users: Juan, Jose, Maria, Ramona</p>
    <p>AllPasswords: 123456</p>


    </div>
  );
};

export default Login;
