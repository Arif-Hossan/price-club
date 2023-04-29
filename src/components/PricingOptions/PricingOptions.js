import React from "react";
import Feature from "../Feature/Feature";
const PricingOptions = ({ option }) => {
  const { features } = option;
  return (
    <div className="m-4 bg-indigo-300  rounded-md p-2">
      <div>
        <h2>
          <span className="text-white text-5xl font-bold">{option.price}</span>
          <span className="text-gray-100 text-2xl">/mon</span>
        </h2>
        <p className="text-3xl my-2">{option.name}</p>
      </div>
      {features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}
      <button className="bg-green-500 py-2 w-full rounded-md mt-2 text-white font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default PricingOptions;
