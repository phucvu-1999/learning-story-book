import React from "react";
import Button from "./Button";

const ButtonStory = {
  title: "Form/Button",
  component: Button,
};

export default ButtonStory;

export const Primary = () => {
  return <Button variants="primary">Primary Button</Button>;
};

export const Secondary = () => {
  return <Button variants="secondary">Secondary Button</Button>;
};

export const Success = () => {
  return <Button variants="success">Success Button</Button>;
};

export const Danger = () => {
  return <Button variants="danger">Danger Button</Button>;
};
