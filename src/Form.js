import React, { useState, Fragment } from "react";
import Input from "./components/Input";
import { Container, GlobalStyle, Button } from "./styles";
import Select from "./components/Select";
import ContactInfo from "./components/ContactInfo";
import ConsentCheckBox from "./components/Checkbox";
import ErrorMessages from "./components/Error";

export default function Form({ title, onSubmit }) {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    dob: "",
    gender: "",
    hasConsent: false,
    guradianName: "",
    guradianContact: ""
  });
  const [contactInfos, setContactInfos] = useState([{ type: "", value: "" }]);
  const [errors, setErrors] = useState(null);

  const handleGeneralInfo = e => {
    if (e.target.name === "hasConsent") {
      setGeneralInfo({
        ...generalInfo,
        hasConsent: !generalInfo.hasConsent
      });
    } else {
      setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
    }
  };

  const handleContactChange = (index, e) => {
    const values = [...contactInfos];
    values[index][e.target.name] = e.target.value;
    setContactInfos(values);
  };

  const handleAddContact = () => {
    const values = [...contactInfos];
    values.push({ type: "", value: "" });
    setContactInfos(values);
  };

  const handleRemoveContact = index => {
    const values = [...contactInfos];
    values.splice(index, 1);
    if (values.length !== 0) {
      setContactInfos(values);
    }
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    const data = validate({ generalInfo, contactInfos, errors, setErrors });
    if (data) {
      onSubmit(data);
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <form onSubmit={handleOnSubmit}>
        <h2>{title}</h2>
        {errors && <ErrorMessages error={errors} />}
        <Input
          placeholderText="Name"
          type="text"
          name="name"
          value={generalInfo.name}
          onChange={handleGeneralInfo}
          required
        />
        <Input
          placeholderText="Date of birth"
          type="date"
          name="dob"
          value={generalInfo.dob}
          onChange={handleGeneralInfo}
          required
        />

        <Select
          placeholderText="Gender"
          name="gender"
          onChange={handleGeneralInfo}
          value={generalInfo.gender}
        >
          <option value="">Select gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </Select>

        <ContactInfo
          contactInfos={contactInfos}
          handleContactChange={handleContactChange}
          handleRemoveContact={handleRemoveContact}
          handleAddContact={handleAddContact}
        />

        <ConsentCheckBox
          hasConsent={generalInfo.hasConsent}
          handleGeneralInfo={handleGeneralInfo}
        />

        {generalInfo.hasConsent && (
          <>
            <Input
              placeholderText="Guardian name"
              type="text"
              name="guradianName"
              value={generalInfo.guradianName}
              onChange={handleGeneralInfo}
              required
            />
            <Input
              placeholderText="Guardian contact"
              type="text"
              name="guradianContact"
              value={generalInfo.guradianContact}
              onChange={handleGeneralInfo}
              required
            />
          </>
        )}

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

const validate = ({ generalInfo, contactInfos, errors, setErrors }) => {
  if (generalInfo.name.split(" ").length < 2) {
    setErrors(
      "Name should contain first name and last name seperated by space"
    );
    return null;
  }
  const age = getAge(generalInfo.dob);
  if (age < 18) {
    setErrors("User should be older than 18");
    return null;
  }

  if (errors) {
    setErrors(null);
  }

  const data = {
    name: generalInfo.name,
    dob: generalInfo.dob,
    gender: generalInfo.gender,
    contact: contactInfos
  };

  if (generalInfo.hasConsent) {
    data["guardian"] = {
      name: generalInfo.guradianName,
      contact: generalInfo.guradianContact
    };
  }

  return data;
};

const getAge = birthDate => {
  return Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
};
