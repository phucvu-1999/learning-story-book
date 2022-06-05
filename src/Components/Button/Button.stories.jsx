import React from "react";
import Button from "./Button";

const ButtonStory = {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button",
  },
  argTypes: {
    onClick: {
      actions: "clicked",
    },
  },
};

export default ButtonStory;

const Theme = (args) => <Button {...args} />;
export const Primary = Theme.bind({});

Primary.args = {
  children: "Primary Button",
  variants: "primary",
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
