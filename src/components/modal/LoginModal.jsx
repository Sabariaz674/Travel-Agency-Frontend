import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
import SignUpModal from './SignUpModal';
import LeftAnimation from './LeftAnimation';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  content: {
    position: 'relative',
    inset: 'unset',
    width: '90%',
    maxWidth: '600px',
    height: 'auto',
    padding: '0',
    borderRadius: '12px',
    background: 'white',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    border: 'none',
    overflow: 'hidden',
  },
};

const LoginModal = ({ isOpen, onRequestClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.status === 200) {
        localStorage.setItem('user-info', JSON.stringify(result.user));
        window.location.href = '/hero';
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('❌ Something went wrong, please try again.');
    }
  };

  const handleSignUpClick = () => {
    onRequestClose();
    setSignUpModalOpen(true);
  };

  return (
    <div>
      {/* Login Modal */}
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Login Modal" style={modalStyles}>
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Left Animation */}
          <LeftAnimation />

          {/* Right Form */}
          <div className="w-full md:w-1/2 p-6 text-black overflow-y-auto">
            <h2 className="text-2xl font-bold text-center text-[#1e3a8a] mb-6">Login</h2>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 border-2 border-gray-300 outline-none focus:outline-blue-500 rounded"
                required
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 border-2 border-gray-300 outline-none focus:outline-blue-500 rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-semibold px-4 py-2 rounded-full shadow-md"
              >
                Sign In
              </button>

              <div className="flex justify-between text-sm text-[#334155] mt-4">
                <a href="#" className="hover:text-[#1e3a8a]">Forgot Password?</a>
                <a href="#" className="hover:text-[#1e3a8a]" onClick={handleSignUpClick}>Sign Up</a>
              </div>

              <div className="my-4 text-center ">
                <GoogleLogin onSuccessCallback={() => navigate('/hero')} />
              </div>
            </form>

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          </div>
        </div>
      </Modal>

      {/* SignUp Modal */}
      <SignUpModal isOpen={isSignUpModalOpen} onRequestClose={() => setSignUpModalOpen(false)} />

    </div>
  );
};

export default LoginModal;
