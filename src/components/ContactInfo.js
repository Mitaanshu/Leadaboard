import React, { Fragment } from "react";
import Input from "./Input";
import { ConatctInfoContainer } from "../styles";

export default function ContactInfo({
  contactInfos,
  handleContactChange,
  handleRemoveContact,
  handleAddContact
}) {
  return (
    <ConatctInfoContainer>
      {contactInfos.map((info, index) => (
        <div className="contact-item" key={index}>
          <Input
            placeholderText="Type"
            type="text"
            name="type"
            value={info.type}
            onChange={event => handleContactChange(index, event)}
            className="mr"
          />
          <Input
            placeholderText="number"
            type="text"
            name="value"
            value={info.value}
            onChange={event => handleContactChange(index, event)}
          />
          <button type="button" onClick={() => handleRemoveContact(index)}>
            -
          </button>
          <button type="button" onClick={() => handleAddContact()}>
            +
          </button>
        </div>
      ))}
    </ConatctInfoContainer>
  );
}
