import React from "react";
import { StyledSelect, InputContainer } from "../styles";

export default function Select({ placeholderText, children, ...props }) {
  return (
    <InputContainer>
      <p>{placeholderText}</p>
      <StyledSelect {...props}>{children}</StyledSelect>
    </InputContainer>
  );
}
