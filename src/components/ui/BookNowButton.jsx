import React from "react";

const Button3 = (props) => {
  return (
    <button
      className={`text-varDark text-med tracking-wider font-headerFont font-semibold border-outline border-varDark rounded-md hover:bg-design2Color hover:border-none hover:text-white duration-300 hover:-translate-y-1 ${props.className}`}
    >
      {props.title ? props.title : "Book Now"}
    </button>
  );
};

export default Button3;
