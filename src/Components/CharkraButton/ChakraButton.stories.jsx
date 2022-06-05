import React from "react";
import { Button } from "@chakra-ui/react";
import { text, boolean } from "@storybook/addon-knobs";

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

export const Log = Theme.bind({});
Log.args = {
  color: "white",
  variant: "solid",
  backgroundColor: "blue",
  children: "Log Button",
  onClick: (e) => console.log("Button Clicked!!!", e),
};

export const Knobs = Theme.bind({});
Knobs.args = {
  color: "white",
  variant: "solid",
  backgroundColor: "blue",
  children: text("children", "Knobs Button"),
  disabled: boolean("display button", false),
};
