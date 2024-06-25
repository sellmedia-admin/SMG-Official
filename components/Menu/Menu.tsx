"use client";
import { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";

// Define the type for an individual team option
interface TeamOption {
  value: string;
  label: string;
}

// Define the props for the CustomSelect component
interface CustomSelectProps {
  teamList: TeamOption[];
  handleValueChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  teamList,
  handleValueChange,
}) => {
  const [value, setValue] = useState<string>(teamList[0]?.value);

  const handleMenuItemClick = (value: string) => {
    setValue(value);
    handleValueChange(value);
  };

  const selectedValue = teamList.find((team) => team.value === value);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={
          <img src="/icons/arrow-drop-down.svg" width={24} height={24} />
        }
        bg="white"
        className="!rounded-lg !border-white !outline-none text-b-black !px-2 bg-white !h-[48px]"
      >
        <Flex align="center">
          <Image
            src={`/icons/${selectedValue?.label.toLowerCase()}-special.svg`}
            alt={selectedValue?.label}
            boxSize="32px"
            mr="12px"
          />
          <Box className="font-600 leading-[18px] text-[12px]">
            {selectedValue?.label}
          </Box>
        </Flex>
      </MenuButton>
      <MenuList
        bg="white"
        mt={-1}
        minWidth={""}
        paddingY={6}
        className="!w-[125px] !rounded-lg"
      >
        {teamList.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleMenuItemClick(option.value)}
            className="my-4"
            sx={{
              backgroundColor: "transparent",
              "&:focus": {
                outline: "none",
              },
            }}
          >
            <Flex align="center" className="px-[8px]">
              <Image
                src={`/icons/${option.label.toLowerCase()}-logo.svg`}
                alt={option.label}
                boxSize="32px"
                mr="12px"
              />
              <Box className="font-600 leading-[18px]">{option.label}</Box>
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CustomSelect;
