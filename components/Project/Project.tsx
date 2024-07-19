"use client";
import { PROJECTS } from "@/data";
import { FormLabel, Select, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { CustomButton, Input } from "..";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const handleProjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProject(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setFileSize((selectedFile.size / 1024).toFixed(2) + " KB");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("SingleLine", firstName);
    formData.append("SingleLine1", lastName);
    formData.append("SingleLine2", companyName);
    formData.append("PhoneNumber_countrycode", phoneNumber);
    formData.append("Email", companyEmail);
    formData.append("SingleLine3", project);
    formData.append("MultiLine", message);
    if (file) {
      formData.append("FileUpload", file);
    }

    try {
      const response = await fetch(
        "https://forms.zohopublic.com/sellmediaafrica/form/Startaprojectform/formperma/jWVOBYYbxMaGJGMecK9yvuRk1qmz8WKHB-cjpDM43wI/htmlRecords/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response) {
        console.log(response);
        alert("Form submitted successfully");

        console.log("success");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="max-w-[744px] mx-auto mb-[80px] md:border rounded-2xl md:p-8 md:shadow-dark-blue"
      onSubmit={handleSubmit}
      action="https://forms.zohopublic.com/sellmediaafrica/form/Startaprojectform/formperma/jWVOBYYbxMaGJGMecK9yvuRk1qmz8WKHB-cjpDM43wI/htmlRecords/submit"
      name="form"
      id="form"
      method="POST"
      acceptCharset="UTF-8"
      encType="multipart/form-data"
    >
      <Input
        id="first-name"
        name="SingleLine"
        label="First Name"
        type="text"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        id="last-name"
        name="SingleLine1"
        label="Last Name"
        type="text"
        placeholder="Enter last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        id="company-name"
        name="SingleLine2"
        label="Company Name"
        type="text"
        placeholder="Enter company name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <Input
        id="phone-number"
        name="PhoneNumber_countrycode"
        label="Phone Number"
        type="number"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input
        id="work-email"
        name="Email"
        label="Work Email"
        type="email"
        placeholder="Enter work email"
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
        name="SingleLine3"
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
        {PROJECTS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

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
        name="MultiLine"
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

      <div className="flex items-center mb-8">
        <label
          className="flex items-center py-2.5 px-4 max-w-max bg-[#F2F4F7] text-black border border-[#D0D5DD] rounded-[12px]"
          htmlFor="file"
        >
          <img src="/icons/attach.svg" width={24} height={24} />
          <input
            type="file"
            name="FileUpload"
            id="file"
            hidden
            onChange={handleFileChange}
          />
          Attach a file
        </label>
        {file && (
          <div className="ml-4 inline-block">
            {fileName} ({fileSize})
          </div>
        )}
      </div>

      <CustomButton
        className=" bg-b-black text-white !w-[194px]"
        type="submit"
        isLoading={loading}
      >
        Submit
      </CustomButton>
    </form>
  );
};

export default Contact;
