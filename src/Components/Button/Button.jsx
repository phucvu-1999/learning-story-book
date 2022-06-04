import React from "react";

const Button = (props) => {
  const { variants = "primary", children, ...rest } = props;

  return (
    <button {...rest} className={`button ${variants}`}>
      {children}
    </button>
  );
};

export default Button;
