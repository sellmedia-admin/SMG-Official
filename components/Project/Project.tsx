"use client";
import React, { useState } from "react";
import { Input } from "..";
import { Select } from "@chakra-ui/react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");

  const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <Input
        id="first-name"
        name="first-name"
        label="First Name"
        type="text"
        placeholder="Enter your first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        id="phone-number"
        name="phone-number"
        label="Phone Number"
        type="number"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input
        id="company-email"
        name="company-email"
        label="Company Email"
        type="email"
        placeholder="Enter your company email"
        value={companyEmail}
        onChange={(e) => setCompanyEmail(e.target.value)}
      />

      {/* <Select
          iconColor="white"
          required
          backgroundColor={"#242424"}
          onChange={handleTeamChange}
          className="!border-[1px] !border-white !outline-none text-white mt-4 bg-black"
          icon={<img src="/icons/arrow-drop-down.svg" alt="dropdown" width={24} height={24} />}
          placeholder="Select Team"
        >
          {teamList.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select> */}
    </div>
  );
};

export default Contact;
