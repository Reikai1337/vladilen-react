import React from "react";
import classes from "./Button.css";

const Button = ({ onClick, children, type, disabled }) => {
  const buttonClass = [classes.Button, classes[type]].join(" ");
  return (
    <button disabled={disabled} onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
