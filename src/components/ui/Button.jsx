import React from "react";

const Button = (props) => {
  return (
    <button
      className={`text-varDark text-sm font-bodyFont font-semibold bg-buttonColor rounded-md hover:bg-gradient-to-tr hover:bg-buttonHover duration-300 hover:-translate-y-1 ${props.className}`}
    >
      {props.title ? props.title : "Connect"}
    </button>
  );
};

export default Button;
