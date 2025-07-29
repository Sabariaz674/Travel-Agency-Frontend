import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Animation from '../common/Animation'; // Import your Animation component
import { FaUserCircle } from 'react-icons/fa'; // Profile icon from react-icons
import ModalController from '../modal/ModalController'; // Import ModalController component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For controlling the mobile menu
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // To control login modal state

  // Toggle Login Modal visibility
  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Animation */}
        <div className="cursor-pointer flex items-center justify-center w-full md:w-auto">
          <Animation /> {/* Logo Animation */}
        </div>

        {/* Navigation Links (Desktop and Tablet) */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-[#1e3a8a] font-medium">
          <NavLink to="/flights" className="hover:text-[#1e3a8a]">Flights</NavLink>
          <NavLink to="/hotels" className="hover:text-[#1e3a8a]">Hotels</NavLink>
          <NavLink to="/packages" className="hover:text-[#1e3a8a]">Packages</NavLink>
          <NavLink to="/contact" className="hover:text-[#1e3a8a]">Contact</NavLink>
          <NavLink to="/logout" className="hover:text-[#1e3a8a]">Logout</NavLink>

          {/* Profile Icon and My Booking */}
          <div className="relative ml-4 flex items-center space-x-2">
            {/* Profile Circle Icon */}
            <div className="w-10 h-10 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white">
              <FaUserCircle className="w-6 h-6 cursor-pointer" onClick={toggleLoginModal} />
            </div>
            
            {/* "My Booking" Text */}
            <span className="text-sm text-gray-700 hover:text-indigo-600 cursor-pointer">
              My Booking
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide-in from the right */}
      <div className={`md:hidden fixed top-0 right-0 w-1/2 h-full bg-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-black text-2xl"
        >
          &times; {/* "X" close button */}
        </button>

        <div className="flex flex-col items-center space-y-6 pt-12">
          {/* Profile Icon and My Booking for Mobile */}
          <div className="flex items-center space-x-2">
            {/* Profile Circle Icon */}
            <div className="w-12 h-12 bg-[#1e3a8a] rounded-full flex items-center justify-center text-white">
              <FaUserCircle className="w-8 h-8 cursor-pointer" onClick={toggleLoginModal} />
            </div>
            {/* "My Booking" Text */}
            <span className="text-[#1e3a8a] text-lg">My Booking</span>
          </div>
          
          <NavLink to="/flights" className="text-[#1e3a8a] text-lg font-semibold p-4 w-full text-center hover:bg-indigo-600">Flights</NavLink>
          <NavLink to="/hotels" className="text-[#1e3a8a] text-lg font-semibold p-4 w-full text-center hover:bg-indigo-600">Hotels</NavLink>
          <NavLink to="/packages" className="text-[#1e3a8a] text-lg font-semibold p-4 w-full text-center hover:bg-indigo-600">Packages</NavLink>
          <NavLink to="/contact" className="text-[#1e3a8a] text-lg font-semibold p-4 w-full text-center hover:bg-indigo-600">Contact</NavLink>
          <NavLink to="/logout" className="text-[#1e3a8a] text-lg font-semibold p-4 w-full text-center hover:bg-indigo-600">Logout</NavLink>
        </div>
      </div>

      {/* ModalController will manage the Login and SignUp Modals */}
      <ModalController 
        isLoginModalOpen={isLoginModalOpen} 
        setIsLoginModalOpen={setIsLoginModalOpen} // Pass the setter function to toggle login modal
      />
    </nav>
  );
};

export default Navbar;
