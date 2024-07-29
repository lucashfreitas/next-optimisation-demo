/* eslint-disable @next/next/no-img-element */

//yeah, I know I don't need to add this just to make sure this is a server component.
"use server";
import React from "react";
import { CarType } from "../data/cars";

const CarCard: React.FC<{ car: CarType }> = ({ car }) => {
  return (
    <div className="flex flex-col gap-2 mx-2">
      <img
        width={300}
        height={400}
        src={car.image}
        alt={`${car.make} ${car.model}`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{`${car.make} ${car.model}`}</div>
        <p className="text-gray-700 text-base">{`Year: ${car.year}`}</p>
        <p className="text-gray-700 text-base">{car.engine}</p>
      </div>
      <div className="flex flex-col px-6 pt-4 pb-2">
        {car.features.map((feature, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {feature}
          </span>
        ))}
      </div>
      <div className="px-6 pb-4">
        <button className="bg-white text-black font-bold py-2 px-4 rounded">
          View Car
        </button>
      </div>
    </div>
  );
};

export default CarCard;
