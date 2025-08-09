import React from "react";
import FlightListingLeft from "../../components/userPagesComponents/TicketBuySection/leftSection/FlightListingLeft";
import ImgLeft from "../../components/userPagesComponents/TicketBuySection/leftSection/ImgLeft";
import FlightListingRight from "../../components/userPagesComponents/TicketBuySection/righSection/FlightListingRight";
import PlacesSearches from '../../components/userPagesComponents/TicketBuySection/PlacesSearched'
import PlacesToStay from '../../components/userPagesComponents/TicketBuySection/PlacesToStay'

function BuyTicket() {
  return (
    <>
    <div className="px-6 py-12">
      {/* Heading */}
      <p className="text-lg font-semibold text-gray-800 mb-6">
        Choose a <span className="text-[#1e3a8a]">departure</span> flight
      </p>

      {/* Layout for Left and Right */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="w-full lg:w-2/3">
          <FlightListingLeft />
          <ImgLeft />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 ">
  <FlightListingRight />
</div>
      </div>
    </div>
    <PlacesToStay/>
    <PlacesSearches/>
    
</>
  );
}

export default BuyTicket;
