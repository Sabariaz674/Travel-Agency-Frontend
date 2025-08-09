import React from 'react';
import DashboardContent from '../../components/adminPagesComponents/DashboardContent';
import TicketSalesGraph from '../../components/adminPagesComponents/TicketSalesGraph';
import FlightListingLeft from '../../components/userPagesComponents/TicketBuySection/leftSection/FlightListingLeft';
import ImgLeft from '../../components/userPagesComponents/TicketBuySection/leftSection/ImgLeft';

const AdminDashboard = () => {
  const stats = {
    completedFlights: 152,
    completedPercentage: '92%',
    activeFlights: 24,
    activePercentage: '6%',
    canceledFlights: 8,
    canceledPercentage: '2%',
    totalRevenue: '$45,000',
    revenuePercentage: '12%',
  };

  return (
   <>
      
      <DashboardContent stats={stats} />
      <TicketSalesGraph/>
      
      <FlightListingLeft />
    </>  
    
  );
};

export default AdminDashboard;
