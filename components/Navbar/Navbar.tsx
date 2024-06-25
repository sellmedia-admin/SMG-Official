"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
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
    { label: "UK", value: "United Kingdom" },
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
                <Text fontSize={"16px"}>{item.name}</Text>
              </Box>
            </Link>
          ))}
        </Box>
        {/* buttons at the right */}
        <Box className="ml-auto hidden lg:flex gap-4">
          <Link href={"/start-project"}>
            <CustomButton
              className="bg-b-black text-white"
              rounded="20"
              onClick={() => handleLinkClick("/start-project")}
            >
              Start a project
            </CustomButton>
          </Link>
          <Menu teamList={teamList} handleValueChange={handleValueChange} />
        </Box>

        <Box className="lg:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            <img
              src={isNavOpen ? "/icons/close.svg" : "/icons/hamburger.svg"}
              alt="toggle"
              width={24}
              height={24}
            />
          </button>
        </Box>
      </nav>
      {/* for mobile */}
      {isNavOpen && (
        <Box className="absolute z-50 top-0 mt-[80px] left-0 w-full h-full bg-white border-t text-b-grey px-5 py-20 font-semibold">
          {navItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <Box
                onClick={() => handleLinkClick(item.link)}
                className={`mb-5 px-4 py-2 cursor-pointer ${
                  pathname === item.link ? " text-b-darkPink" : "text-b-grey"
                }`}
              >
                <Text>{item.name}</Text>
              </Box>
            </Link>
          ))}
          <div className="flex gap-5 mt-5 pl-4 mb-5">
            {teamList.map((option) => (
              <Flex
                align="center"
                direction="column"
                gap={2}
                key={option.value}
              >
                <Link href="#">
                  <img
                    src={`/icons/${option.label.toLowerCase()}-special.svg`}
                    alt={option.label}
                    width={32}
                    height={32}
                    className="transition ease-in-out hover:scale-110"
                  />
                </Link>
                <Box className="font-600 leading-[18px]">{option.label}</Box>
              </Flex>
            ))}
          </div>
          <Link href={"/start-project"} className="mt-5">
            <CustomButton
              className="bg-b-black text-white"
              rounded="20"
              onClick={() => handleLinkClick("/start-project")}
            >
              Start a project
            </CustomButton>
          </Link>
        </Box>
      )}
    </>
  );
};

export default Navbar;
