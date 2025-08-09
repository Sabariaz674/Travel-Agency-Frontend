import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { places } from '../../../data';  // Import your places data
import Card from '../../common/cards/HotelCard';  // Import the Card component

const PlacesToStay = () => {
  return (
    <section className="px-6 md:px-20 py-12 pt-0">
      <Link to="/china-hotels" className="text-sm text-blue-600 font-medium flex items-center gap-1 mb-4 inline-block">
        View All <span className="text-lg">→</span>
      </Link>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <Card
            key={index}
            image={place.image}
            title={place.title}
            description={place.description}
            link={place.link} // assuming places data contains a 'link' property
          />
        ))}
      </div>
    </section>
  );
};

export default PlacesToStay;
