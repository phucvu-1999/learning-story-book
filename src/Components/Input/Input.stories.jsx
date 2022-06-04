import React from "react";
import Input from "./Input";

const InputStory = {
  title: "Input",
  component: Input,
};

export default InputStory;

export const small = () => <Input size="small" />;
export const medium = () => <Input size="medium" />;
export const large = () => <Input size="large" />;
