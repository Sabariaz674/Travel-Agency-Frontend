import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HeroSection from './pages/userPages/Herosection';
import Hotels from './components/userPagesComponents/navbarSection/Hotels';
import Packages from './components/userPagesComponents/navbarSection/Packages';
import Contact from './components/userPagesComponents/navbarSection/Contact';
import BuyTicket from  './pages/userPages/BuyTicket';

import AdminDashboard from './pages/adminPages/AdminDashboard'
import UserDashboard from './pages/userPages/UserDashboard'
import AdminLayout from './components/adminPagesComponents/adminlayout/AdminLayout';


function App() {
  return (
    <Routes>
      {/* Routes for all other pages under Layout */}
      <Route path='/user-dashboard' element={<UserDashboard />} />
      <Route element={<Layout />}>
        <Route path="/" element={<HeroSection />} />
        <Route path="buy-ticket" element={<BuyTicket />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="packages" element={<Packages />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Admin Layout */}
      <Route element={<AdminLayout />}>
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}


export default App;
