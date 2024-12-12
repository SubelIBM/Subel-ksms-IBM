import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import WelcomePage from './WelcomePage';
import './styles.css';

const Registration = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm setRegisteredUsers={setRegisteredUsers} />} />
        <Route path="/login" element={<LoginForm registeredUsers={registeredUsers} setCurrentUser={setCurrentUser} />} />
        <Route path="/welcome" element={<WelcomePage currentUser={currentUser} />} />
      </Routes>
    </Router>
  );
};

export default Registration;
