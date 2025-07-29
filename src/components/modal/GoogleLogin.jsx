import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import googleLogo from "../../assets/google.png"; // Make sure the logo exists

// Google auth call
const googleAuth = (code) => axios.get(`http://localhost:8080/auth/google?code=${code}`);

const GoogleLogin = ({ onSuccessCallback }) => {
  const responseGoogle = async (authResult) => {
    try {
      if (authResult?.code) {
        const result = await googleAuth(authResult.code);
        const { email, name, image } = result.data.user;
        const token = result.data.token;

        const obj = { email, name, image, token };
        localStorage.setItem('user-info', JSON.stringify(obj));

        if (onSuccessCallback) onSuccessCallback();
      }
    } catch (err) {
      console.error('Error while requesting google code', err);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code',
  });

  return (
    <button
      onClick={googleLogin}
      className="border border-gray-300 hover:border-blue-600 text-blue-600 font-medium px-4 py-2 rounded-md shadow-md w-full flex items-center justify-center space-x-3 transition duration-200"
    >
      <img src={googleLogo} alt="Google" className="w-5 h-5" />
      <span className="text-sm sm:text-base">Continue with Google</span>
    </button>
  );
};

export default GoogleLogin;
