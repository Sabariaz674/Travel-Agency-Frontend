import React from "react";
import { destinations } from '../../data';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Destinations = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={false}
        autoplay={{ delay: 3000 }}
        loop
      >
        {destinations.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {place.title},{" "}
                    <span className="text-indigo-600">{place.location}</span>
                  </h3>
                  <p className="text-gray-700 font-semibold">{place.price}</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">{place.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Destinations;
