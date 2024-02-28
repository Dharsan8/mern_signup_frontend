// src/App.js

import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [activePage, setActivePage] = useState('login');

  const handleLoginClick = () => {
    setActivePage('login');
  };

  const handleSignupClick = () => {
    setActivePage('signup');
  };

  return (
    <div>
      <div className="flex justify-center my-4">
        <button
          className={`mr-4 px-4 py-2 rounded-md focus:outline-none ${
            activePage === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 rounded-md focus:outline-none ${
            activePage === 'signup' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={handleSignupClick}
        >
          Signup
        </button>
      </div>
      {activePage === 'login' ? <Login /> : <Signup />}
    </div>
  );
}

export default App;
