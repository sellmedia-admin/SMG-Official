"use client";
import React, { useState } from "react";
import { CustomButton, Input } from "..";
import { FormLabel, Select, Textarea } from "@chakra-ui/react";
import { PROJECTS } from "@/data";

const Contact = () => {
  // State variables for form inputs and loading state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handler for project selection change
  const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProject(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true); // Set loading state to true while sending email

    // Construct email body
    const emailBody = `
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Company Name: ${companyName}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Work Email: ${companyEmail}</p>
      <p>Type of Enquiry: ${project}</p>
      <p>${message}</p>
    `;

    // Prepare data for API request
    const requestData = {
      firstName,
      lastName,
      companyName,
      phoneNumber,
      companyEmail,
      project,
      message,
      body: emailBody,
    };

    try {
      const response = await fetch("/api/startProject", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      alert("Email sent successfully!"); // Display success message
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again."); // Display error message
    } finally {
      setLoading(false); // Set loading state back to false after request completes
    }
  };

  return (
    <form
      className="max-w-[744px] mx-auto mb-[80px] md:border rounded-2xl md:p-8 md:shadow-dark-blue"
      onSubmit={handleSubmit} // Bind form submission handler
    >
      {/* Input fields for first name, last name, company name, phone number, and work email */}
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
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
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
        placeholder="Enter work email"
        value={companyEmail}
        onChange={(e) => setCompanyEmail(e.target.value)}
      />

      {/* Select field for type of enquiry */}
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
        className="border-solid border-1 border-gray-300 !rounded-20 !h-16 mb-3"
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
        {/* Map over PROJECTS array to populate select options */}
        {PROJECTS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      {/* Textarea for message input */}
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
          className="border-solid border-1 border-gray-300 !rounded-20 mb-6 !p-4"
          placeholder="Type in your message"
          _placeholder={{
            color: "#7C7C7C",
            fontSize: "16px",
            lineHeight: "30px",
          }}
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></Textarea>
      </>

      <div className="block">
        <CustomButton
          leftIcon={<img src="/icons/attach.svg" width={24} height={24} />}
          className="bg-[#F2F4F7] text-black !border !border-[#D0D5DD] !rounded-[12px] mb-8 "
        >
          {" "}
          <input type="file" name="file" id="file" hidden />
          Attach a file{" "}
        </CustomButton>
      </div>

      {/* Submit button with loading state */}

      <CustomButton
        className=" bg-b-black text-white !w-[194px]"
        type="submit"
        isLoading={loading}
      >
        Send us a message
      </CustomButton>
    </form>
  );
};

export default Contact;
