import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra UI Button",
  component: Button,
};

export const Success = () => (
  <Button colorScheme="green" variant="ghost">
    Success Button
  </Button>
);
export const Danger = () => (
  <Button color="red.500" variant="outline">
    Danger Button
  </Button>
);
