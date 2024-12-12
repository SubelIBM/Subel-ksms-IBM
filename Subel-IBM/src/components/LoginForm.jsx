import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

const LoginForm = ({ registeredUsers, setCurrentUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Login Attempt:', data);
    const user = registeredUsers.find(user => user.email === data.email && user.password === data.password);
    if (user) {
      setCurrentUser(user);
      navigate('/welcome');
    } else {
      alert('Invalid login. Please check your credentials or register first.');
    }
  };

  return (
    <div className="form-container">
      <Link to="/" className="top-right-button">Register</Link>
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input
            className="form-input"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            className="form-input"
            type="password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          {errors.password && <p className="error-text">{errors.password.message}</p>}
        </div>

        <button type="submit" className="form-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;