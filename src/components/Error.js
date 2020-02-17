import React from "react";
import { ErrorBox } from "../styles";

export default function ErrorMessages({ error }) {
  return (
    <div className="margin-y">
      <ErrorBox>{error}</ErrorBox>
    </div>
  );
}
