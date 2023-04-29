import React from "react";
import PricingOptions from "../components/PricingOptions/PricingOptions";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0.0,
      features: [
        "Awesome Features",
        "Ajaira Features",
        "Faltu Features",
        "Unusable Features",
        "Hudai Features",
        "Best Useless Features",
      ],
    },
    {
      id: 2,
      name: "Medium",
      price: 10.5,
      features: [
        "Everything on Medium",
        "Ajaira Features",
        "Faltu Features",
        "Unusable Features",
        "Hudai Features",
        "Best Useless Features",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 25.07,
      features: [
        "Everything on Premium",
        "Ajaira Features",
        "Faltu Features",
        "Unusable Features",
        "Hudai Features",
        "Best Useless Features",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold text-white bg-indigo-200 p-12">
        Best Deal in the Town
      </h2>
      <div className="grid md:grid-cols-3 gap-3">
        {pricingOptions.map((option) => (
          <PricingOptions key={option.id} option={option}></PricingOptions>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
