import React from "react";
import Button from "./Button";

const ButtonStory = {
  title: "Button",
  component: Button,
};

export default ButtonStory;

export const primary = () => {
  return <Button variants="primary">Primary Button</Button>;
};

export const secondary = () => {
  return <Button variants="secondary">Secondary Button</Button>;
};

export const success = () => {
  return <Button variants="success">Success Button</Button>;
};

export const danger = () => {
  return <Button variants="danger">Danger Button</Button>;
};
