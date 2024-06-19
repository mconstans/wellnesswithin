import React from "react";

const Button2 = (props) => {
  return (
    <button
      className={`text-varDark text-med font-bodyFont font-semibold border-outline border-varDark rounded-md hover:bg-varDark hover:text-designColor duration-300 hover:-translate-y-1 ${props.className}`}
    >
      {props.title ? props.title : "Connect"}
    </button>
  );
};

export default Button2;
