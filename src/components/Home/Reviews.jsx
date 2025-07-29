import React, { useState } from "react";
import { reviews } from '../../data';

const Reviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getPreviewText = (fullText) => {
    const maxLength = 110;
    return fullText.length > maxLength ? fullText.slice(0, maxLength) + "..." : fullText;
  };

  return (
    <section className="py-16 px-6">
      <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">
        What <span className="text-indigo-600">Jadoo</span> users are saying
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review, index) => (
          <div key={index} className=" rounded-lg p-6 max-w-sm w-full">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={review.image}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-semibold">{review.name}</h3>
                <p className="text-xs text-gray-500">
                  {review.location} | {review.date}
                </p>
              </div>
            </div>
            <div className="text-yellow-500 mb-2">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {expandedIndex === index ? review.text : getPreviewText(review.text)}{" "}
              {review.text.length > 110 && (
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-indigo-600 hover:underline text-xs ml-1"
                >
                  {expandedIndex === index ? "show less" : "read more"}
                </button>
              )}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Reviews;
