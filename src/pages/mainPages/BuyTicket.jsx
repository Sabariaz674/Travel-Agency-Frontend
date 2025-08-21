import React, { useState } from 'react';
import FlightSummary from '../../components/userPagesComponents/TicketBuySection/FlightSummary';
import BaggageInfoImage from '../../assets/BaggageInfoImage.png';
import PassengerForm from '../../components/userPagesComponents/PassengerInfo/PassengerForm';
import SelectSeat from '../mainPages/SeatSelection'; 
// 👆 yahan ab EconomySeat ki jagah SelectSeat import karo

const BuyTicket = () => {
  const [showSeatSelection, setShowSeatSelection] = useState(false);

  // Seat selection open
  const handleSelectSeatsClick = () => {
    setShowSeatSelection(true);
  };

  // Back to passenger form
  const handleGoBackToPassengerForm = () => {
    setShowSeatSelection(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-10 flex flex-col lg:flex-row items-start justify-center gap-8">
      {showSeatSelection ? (
        // 👇 SelectSeat component open hoga
        <SelectSeat onBack={handleGoBackToPassengerForm} />
      ) : (
        <>
          {/* Passenger Form Section */}
          <PassengerForm />

          {/* Right Side Summary Section */}
          <div className="w-full lg:w-96 flex flex-col gap-8">
            <FlightSummary />

            {/* Select Seats Button */}
            <div className="flex justify-end mr-6">
              <button
                className="w-1/3 py-3 text-white font-semibold bg-[#1e3a8a] rounded-lg shadow hover:bg-[#1e3a8a] transition duration-200"
                onClick={handleSelectSeatsClick}
              >
                Select seats
              </button>
            </div>

            {/* Baggage Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex justify-center items-center">
              <img src={BaggageInfoImage} alt="Baggage Information" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BuyTicket;
