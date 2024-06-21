"use client";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import CustomButton from "../Button/Button";
import { navItems } from "./dropdown";
import { Menu } from "..";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (link: string) => {
    router.push(link);
    setIsNavOpen(false);
  };

  const handleValueChange = (value: string) => {
    console.log(value);
  };

  const teamList = [
    { label: "NG", value: "Nigeria" },
    { label: "CA", value: "Canada" },
    { label: "UK", value: "united kingdom" },
    { label: "US", value: "United States" },
  ];

  return (
    <>
      <nav className="bg-bg-ash-2 h-24 flex items-center justify-between px-2 md:px-[120px] bg-b-grey-2 border-b-1 border-b-light-grey">
        <Box className="flex items-center">
          <a href="/">
            <img
              src="/imgs/logo.png"
              width={"123px"}
              height={"40px"}
              alt="smg logo"
              // className="mr-4"
            />
          </a>
        </Box>
        <Box className="hidden lg:flex items-center space-x-4 flex-grow justify-center">
          {navItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <Box
                className={`inline-flex items-center cursor-pointer h-full px-4 font-[600] hover:text-b-darkPink ${
                  pathname === item.link ? "text-b-pink" : "text-b-grey"
                }`}
              >
                <Text>{item.name}</Text>
              </Box>
            </Link>
          ))}
        </Box>
        {/* buttons at the right */}
        <Box className="ml-auto flex gap-4 ">
          <Link href={"/start-project"}>
            <CustomButton className="bg-b-black text-white" rounded="20">
              Start a project
            </CustomButton>
          </Link>
          <Menu teamList={teamList} handleValueChange={handleValueChange} />
        </Box>

        <Box className="lg:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            <img
              src="/icons/hamburger.svg"
              alt="toggle"
              width={24}
              height={24}
            />
          </button>
        </Box>
      </nav>
      {/* for mobile */}
      {isNavOpen && (
        <Box className="absolute z-50 top-[11rem] left-0 w-full min-h-[50vh] bg-b-black-1 text-b-grey pl-4">
          {navItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <Box
                onClick={() => handleLinkClick(item.link)}
                className={`px-4 py-2 cursor-pointer ${
                  pathname === item.link
                    ? "bg-b-green-2 text-b-grey"
                    : "text-b-grey"
                }`}
              >
                <Text>{item.name}</Text>
              </Box>
            </Link>
          ))}
        </Box>
      )}
    </>
  );
};

export default Navbar;
