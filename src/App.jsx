import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HeroSection from './pages/Herosection';
import Hotels from './components/sectionnavbar/Hotels';
import Packages from './components/sectionnavbar/Hotels';
import Contact from './components/sectionnavbar/Contact';
import BuyTicket from  './pages/BuyTicket';
import ChinaHotels from './components/hotels/chinahotels/ChinaHotel'


function App() {

  return (
    <Routes>
      {/* Routes for all other pages under Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<HeroSection />} />
        <Route path="buyticket" element={<BuyTicket />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="packages" element={<Packages />} />
        <Route path="contact" element={<Contact />} />
        <Route path='china-hotels'element={<ChinaHotels/>}/>
        {/* <Route path="/login" element={<LoginModal />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
