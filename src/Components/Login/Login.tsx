import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import './Login.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';
import LogOut from './LogOut';

interface UserData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit: SubmitHandler<UserData> = (data) => {
    const storedUsersData = JSON.parse(localStorage.getItem('usersData') || '[]');
    const user = storedUsersData.find((userData: UserData) => userData.username === data.username && userData.password === data.password);

    if (user) {
      toast.success('Successfully logged in!');
      setTimeout(() => {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        navigate('/');  
      }, 2000);
    } else {
      toast.error('Incorrect user or password');
    }
  };

  useEffect(() => {
    const storedLoggedInUser = localStorage.getItem('loggedInUser');
    if (storedLoggedInUser) {
      const user = JSON.parse(storedLoggedInUser);
      setLoggedInUser(user.username);
    }
  }, []);

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="container">
      <div className="login-container">
        {loggedInUser ? (
          <LogOut onLogout={handleLogout} loggedInUsername={loggedInUser}/>
        ) : (
          <div>
            <h2>Login</h2>
            <label>User Name</label>
  
            <input
              type="text"
              placeholder="Your User Name"
              {...register("username", { required: true, pattern: /^[A-Za-z]+$/, minLength: 3, maxLength: 10 })}
            />
            {errors.username?.type === 'required' && <p style={{ color: 'red' }}>This field is required</p>}
            {errors.username?.type === 'pattern' && <p style={{ color: 'red' }}>Only letters are allowed</p>}
            {errors.username?.type === 'minLength' && <p style={{ color: 'red' }}>Minimum length is 3</p>}
            {errors.username?.type === 'maxLength' && <p style={{ color: 'red' }}>Maximum length is 10</p>}
  
            <label>Password</label>
            <div className="password-input">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder=" Password"
                {...register("password", { required: true, minLength: 3, maxLength: 10 })}
              />
              <span onClick={togglePasswordVisibility}>
                {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            {errors.password?.type === 'required' && <p style={{ color: 'red' }}>This field is required</p>}
            {errors.password?.type === 'minLength' && <p style={{ color: 'red' }}>Minimum length is 3</p>}
            {errors.password?.type === 'maxLength' && <p style={{ color: 'red' }}>Maximum length is 10</p>}
  
            <button onClick={handleSubmit(onSubmit)}>Get In</button>
            <hr />
            <label>
              <a href="#">I forgot my password</a>
            </label>
            <hr />
            <button>Create Account</button>
          </div>
        )}
      </div>
  
      <p style={{ color: 'aqua' }}>Users: Juan, Jose, Maria, Ramona</p>
      <p style={{ color: 'aqua' }}>AllPasswords: 123456</p>
  
      <Toaster />
    </div>
  );
}  

export default Login;
