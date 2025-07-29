import React from "react";
import FlightListingLeft from "../components/TicketBuySection/flightlistingleft/FlightListingLeft";
import FlightListingRight from "../components/TicketBuySection/flightlistingright/FlightListingRight";
import PlacesToStay from "../components/TicketBuySection/PlacesToStay";

function BuyTicket() {
  return (
    <>
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 gap-8">
      <FlightListingLeft />
      <FlightListingRight />
      
    </div>
    <PlacesToStay/>
    </>
  );
}

export default BuyTicket;
