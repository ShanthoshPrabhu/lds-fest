import React from 'react';
import data from "../Components/EventData";

const Cards = () => {
  return (
    <div className="mt-8 grid gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-10">
      {data.map((item) => {
        return (
          <a href={item.link} className="block rounded-md shadow-md overflow-hidden sm:w-full md:w-80 lg:w-64">
            <img className="w-full h-48 object-cover sm:h-32 md:h-48 lg:h-64" src={item.src} alt="Event Image" />
            <div className="p-4">
              <span className="font-bold text-white tracking-wider text-lg">{item.eventName}</span>
              <span className="block text-grey-500 text-sm">{item.Time}</span>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Cards;
