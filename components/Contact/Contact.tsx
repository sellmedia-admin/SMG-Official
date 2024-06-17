import React from "react";
import { Input } from "..";

const Contact = () => {
  return (
    <div>
      <Input
        id="first-name"
        label="First Name"
        type="text"
        placeholder="Enter your first name"
      />
      <Input
        id="phone-number"
        label="Phone Number"
        type="number" // Phone number input type can be "tel" but here we use "text" for simplicity
        placeholder="Enter your phone number"
      />
      <Input
        id="company-email"
        label="Company Email"
        type="email"
        placeholder="Enter your company email"
      />
    </div>
  );
};

export default Contact;
