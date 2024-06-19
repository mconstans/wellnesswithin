import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const handleClick = () => {
    if (item.link.startsWith("http")) {
      // External link
      window.open(item.link, "_blank");
    } else {
      // Internal link
      // Example using React Router's Link component:
      // history.push(item.link); // Ensure history is available via props or context
    }
  };

  return (
    <div className="w-full p-10 bg-white grid grid-rows-3 gap-3 rounded-lg shadow-lg shadow-gray-500/10">
      <span className="iconstyle">{item.icon}</span>
      <p className="text-3xl font-headerFont text-primaryColor">{item.title}</p>
      <p className="text-xl font-light text-primaryColor">{item.description}</p>
      {item.link.startsWith("http") ? (
        // External link
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[120px] h-10 text-center p-2 text-varDark text-sm font-bodyFont border-outline border-varDark rounded-md hover:bg-design2Color hover:border-none hover:text-white duration-300 hover:-translate-y-1"
        >
          {item.button}
        </a>
      ) : (
        // Internal link
        <Link
          to={item.link}
          className="w-[120px] h-10 text-center p-2 text-varDark text-sm font-bodyFont border-outline border-varDark rounded-md hover:bg-design2Color hover:border-none hover:text-white duration-300 hover:-translate-y-1"
        >
          {item.button}
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
