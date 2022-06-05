import React from "react";
import Center from "../Center/Center";
import Button from "./Button";

const ButtonStory = {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button",
  },
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

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  variants: "primary",
  // children: "Primary Args",
};

export const SecondaryA = Template.bind({});

SecondaryA.args = {
  variants: "secondary",
  // children: "Secondary Args",
};
