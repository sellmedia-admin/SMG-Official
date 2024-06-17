"use client";
import React, { useState } from "react";
import { CustomButton, Input } from "..";
import { Flex, FormLabel, Select, Textarea } from "@chakra-ui/react";
import { PROJECTS } from "@/data";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");

  const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
  };

  return (
    <form className="max-w-[744px] mx-auto mb-[80px] border rounded-2xl p-8 shadow-dark-blue">
      <Input
        id="first-name"
        name="first-name"
        label="First Name"
        type="text"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        id="last-name"
        name="last-name"
        label="Last Name"
        type="text"
        placeholder="Enter last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        id="company-name"
        name="company-name"
        label="Company Name"
        type="text"
        placeholder="Enter company name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        id="phone-number"
        name="phone-number"
        label="Phone Number"
        type="number"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input
        id="work-email"
        name="work-email"
        label="Work Email"
        type="email"
        placeholder="Enter  work email"
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
        Type of Enquiry
      </FormLabel>
      <Select
        required
        id="project"
        name="project"
        onChange={handleProjectChange}
        className="border-solid border-1 border-gray-300 rounded-md  !h-16 mb-3"
        icon={
          <div className="!-mt-2">
            <img
              src="/icons/arrow-drop-down.svg"
              alt="dropdown"
              width={20}
              height={20}
              style={{
                marginTop: "-8px",
              }}
            />
          </div>
        }
        placeholder="Select type"
      >
        {PROJECTS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <>
        <FormLabel
          htmlFor={"message"}
          fontSize="14px"
          lineHeight="27px"
          fontWeight="400"
          mb="2"
        >
          Message
        </FormLabel>
        <Textarea
          required
          id="message"
          name="message"
          className="border-solid border-1 border-gray-300 rounded-md mb-6 !p-4"
          placeholder="Type in your message"
          _placeholder={{
            color: "#7C7C7C",
            fontSize: "16px",
            lineHeight: "30px",
          }}
          rows={10}
          // cols={10}
        ></Textarea>
      </>

      <Flex direction={"column"} gap={"32px"}>
        <CustomButton
          leftIcon={<img src="/icons/attach.svg" width={24} height={24} />}
          className="bg-[#F2F4F7] text-black !border !border-[#D0D5DD] !rounded-[12px]"
        >
          {" "}
          <input type="file" name="file" id="file" hidden />
          Attach a file{" "}
        </CustomButton>

        <CustomButton className="bg-b-black text-white !w-[194px]">
          Send us a message
        </CustomButton>
      </Flex>
    </form>
  );
};

export default Contact;
