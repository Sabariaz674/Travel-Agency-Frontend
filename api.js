import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  // Remove withCredentials if you don't need it for cookies or headers
  // withCredentials: true, // Only enable if necessary
});

// Example API request with token:
const googleAuth = (code) => {
  const token = localStorage.getItem('user-info')?.token;
  return api.get(`/auth/google?code=${code}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default api;
