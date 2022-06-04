import React from "react";
import Input from "./Input";

const InputStory = {
  title: "Form/Input",
  component: Input,
};

export default InputStory;

export const small = () => <Input size="small" placeholder="Small Input" />;
export const medium = () => <Input size="medium" placeholder="Medium Input" />;
export const large = () => <Input size="large" placeholder="Large Input" />;
