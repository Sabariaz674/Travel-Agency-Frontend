import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import Layout from './components/common/Layout';
import HeroSection from './pages/mainPages/HeroSection';
import Hotels from './components/userPagesComponents/navbarSection/Hotels';
import Packages from './components/userPagesComponents/navbarSection/Packages';
import Contact from './components/userPagesComponents/navbarSection/Contact';
import FlightSearch from './pages/mainPages/FlightSearch';
import AdminDashboard from './pages/adminPages/AdminDashboard';
import UserDashboard from './pages/userPages/UserDashboard';
import AdminLayout from './components/adminPagesComponents/adminlayout/AdminLayout';
import AddBooking from './pages/adminPages/AddBooking';
import FlightSchedule from './pages/adminPages/FlightSchedule';
import SignUp from './components/userPagesComponents/modal/SignUp';
import Login from './components/userPagesComponents/modal/Login';

import BuyTicket from './pages/mainPages/BuyTicket';
import SelectSeat from './components/userPagesComponents/PassengerInfo/EconomySeat';


function App() {
  const clientId = "603172305383-t52jli5m1telmup4q9cnbm6p87qge54m.apps.googleusercontent.com"; 
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Routes>
        {/* Routes for all other pages under Layout */}
        <Route path='/user-dashboard' element={<UserDashboard />} />

        <Route element={<Layout />}>
          <Route path="/hero" element={<HeroSection />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="Flight-Search" element={<FlightSearch />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="packages" element={<Packages />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path='Buy-Ticket' element={<BuyTicket/>}/>
          <Route path='Select-Seat' element={<SelectSeat/>}/>
        </Route>

        {/* Admin Layout */}
        <Route element={<AdminLayout />}>
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/add-booking' element={<AddBooking />} />
          <Route path='/schedule' element={<FlightSchedule />} />
        </Route>
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;