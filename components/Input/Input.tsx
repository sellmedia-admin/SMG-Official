"use client";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";

interface ReusableInputProps {
  id: string;
  label: string;
  type: "text" | "number" | "email";
  placeholder: string;
}

const ReusableInput: React.FC<ReusableInputProps> = ({
  id,
  label,
  type,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const validate = (value: string) => {
    switch (type) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toLowerCase());
      case "text":
        return !!value;
      case "number":
        return /^\d+$/.test(value);
      // Add more cases for other types if needed
      default:
        return false;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    setInputValue(value);
    setIsInvalid(!validate(value));
  };

  return (
    <FormControl mb="6" isInvalid={isInvalid}>
      <FormLabel
        htmlFor={id}
        fontSize="14px"
        lineHeight="27px"
        fontWeight="400"
        mb="2"
      >
        {label}
      </FormLabel>
      <Input
        id={id}
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        size="lg"
        className="border-solid border-1 border-gray-300 rounded-md h-16 p-4"
        _placeholder={{
          color: "#7C7C7C",
          fontSize: "16px",
          lineHeight: "30px",
        }}
      />
      {isInvalid && (
        <FormErrorMessage color="red.500">Invalid input</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default ReusableInput;
