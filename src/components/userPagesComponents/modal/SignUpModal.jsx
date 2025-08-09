import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import LeftAnimation from './LeftAnimation';

Modal.setAppElement('#root'); // Accessibility

const SignUpModal = ({ isOpen, onRequestClose, openLoginModal }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleManualSignup = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axios.post('http://localhost:8080/auth/signup', formData);
      if (response.status === 201) {
        setMessage('✅ Signup successful. Please Login.');
        setTimeout(() => {
          setTimeout(() => {
  console.log('Signup success. Opening login modal...'); // 🧪 Debug
  setMessage('');
  openLoginModal();
}, 2000);

          setMessage('');
          openLoginModal(); // ✅ call parent handler
        }, 2000);
      } else {
        setError(response.data.message || '❌ Something went wrong.');
      }
    } catch (err) {
      setError('❌ Something went wrong, please try again.');
    }
  };

  const handleLoginClick = () => {
  // e.preventDefault(); 
  console.log('Login link clicked'); // ✅ Prevent default link behavior
  // onRequestClose();
  openLoginModal();   // Open Login Modal
};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sign Up Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 50,
        },
        content: {
          position: 'relative',
          inset: 'unset',
          width: '90vw',
          maxWidth: '700px',
          padding: '0',
          borderRadius: '12px',
          background: 'white',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
          border: 'none',
          overflow: 'hidden',
        },
      }}
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Side Animation */}
        <LeftAnimation />

        {/* Right Side Form */}
        <div className="w-full md:w-2/2 p-6 text-black">
          <h2 className="text-2xl mb-4 text-[#4A90E2] text-center">Sign Up for Jadoo</h2>

          <form onSubmit={handleManualSignup}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full mb-4 px-4 py-2 border-2 border-gray-300 outline-none focus:outline-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full mb-4 px-4 py-2 border-2 border-gray-300 outline-none focus:outline-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full mb-4 px-4 py-2 border-2 border-gray-300 outline-none focus:outline-blue-500"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full mb-4 px-4 py-2 border-2 border-gray-300 outline-none focus:outline-blue-500"
              required
            />

            {/* Messages */}
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
            {message && <div className="text-green-500 text-sm mb-4">{message}</div>}

            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" required />
              <label className="text-sm">I agree to the terms and conditions</label>
            </div>

            <div className="my-4 flex items-center">
              <div className="flex-1 h-[1px] bg-gray-300" />
              <span className="mx-4 text-sm">or</span>
              <div className="flex-1 h-[1px] bg-gray-300" />
            </div>

            <button
              type="submit"
              className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-semibold px-6 py-3 w-full shadow-md transition duration-300"
            >
              Create Account
            </button>

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-700">
                Already have an account?{' '}
                <span
                  onClick={handleLoginClick}
                  className="text-[#1e3a8a] hover:text-indigo-600 cursor-pointer font-medium"
                >
                  Login
                </span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;
