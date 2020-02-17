import React from "react";
import { StyledInput, InputContainer } from "../styles";

export default function Input({ placeholderText, ...props }) {
  return (
    <InputContainer>
      <p>{placeholderText}</p>
      <StyledInput placeholder={placeholderText} {...props} />
    </InputContainer>
  );
}
