"use client";
import React, { useState } from "react";
import { Input } from "..";
import { FormLabel, Select } from "@chakra-ui/react";
import { PROJECTS } from "@/data";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");

  const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className="max-w-[744px] mx-auto">
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

      <FormLabel
        htmlFor={"project"}
        fontSize="14px"
        lineHeight="27px"
        fontWeight="400"
        mb="2"
      >
        Select project
      </FormLabel>
      <Select
        required
        id="project"
        name="project"
        onChange={handleProjectChange}
        className="border-solid border-1 border-gray-300 rounded-md h-16 p-4"
        icon={
          <img
            src="/icons/arrow-drop-down.svg"
            alt="dropdown"
            width={24}
            height={24}
          />
        }
        placeholder="Select Project"
        sx={{
          "::placeholder": {
            color: "gray.500",
            fontSize: "16px",
            lineHeight: "30px",
          },
        }}
      >
        {PROJECTS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Contact;
