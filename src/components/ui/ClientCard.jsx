import React from "react";

const ClientCard = ({ item }) => {
  return (
        <div className="flex flex-col gap-5">
         <p className="max-w-[550px] items-center text-sm font-bodyFont font-light">
            "{item.testimonial}"
          </p>
          <h3 className="text-xl font-bold font-headerFont">{item.name}</h3>
        </div>
  );
};

export default ClientCard;
