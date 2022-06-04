import React from "react";
import "./Input.css";

const Input = (props) => {
  const { size = "small", ...rest } = props;
  return <input {...rest} className={`input ${size}`} />;
};

export default Input;
