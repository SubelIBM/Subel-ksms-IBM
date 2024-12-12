import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const RegistrationForm = ({ setRegisteredUsers }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setRegisteredUsers(prevUsers => [...prevUsers, data]);
    reset();
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input
            className="form-input"
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>

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
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
                message: 'Password must include upper, lower, number, and special character',
              },
            })}
          />
          {errors.password && <p className="error-text">{errors.password.message}</p>}
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            className="form-input"
            type="text"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^\+91[6-9]\d{9}$/,
                message: 'Enter a valid Indian phone number (+91XXXXXXXXXX)',
              },
            })}
          />
          {errors.phone && <p className="error-text">{errors.phone.message}</p>}
        </div>

        <button type="submit" className="form-button">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;