import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Chakra UI Button",
  component: Button,
  argTypes: {
    variantColor: {
      control: "text",
    },
    onClick: {
      actions: "clicked",
    },
  },
};

const Theme = (args) => <Button {...args} />;

export const Success = Theme.bind({});
Success.args = {
  color: "#fff",
  children: "Success Button",
  variant: "outline",
  backgroundColor: "green",
};

export const Danger = Theme.bind({});

Danger.args = {
  color: "white",
  variant: "solid",
  backgroundColor: "red",
  children: "Danger Button",
};
