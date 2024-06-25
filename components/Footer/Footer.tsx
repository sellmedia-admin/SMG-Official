"use client";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import CustomButton from "../Button/Button";
import Link from "next/link";
import Image from "next/image";

const EmailForm = () => {
  return (
    <Box className="bg-b-ash1 py-10 text-white px-5">
      <Box className="max-w-[1184px] flex flex-col md:flex-row  justify-between items-start md:items-center mx-auto md:px-0 gap-6">
        <div className="flex flex-col gap-[18px]">
          <h2>Stay informed</h2>
          <Text fontWeight={600}>Signup for our newsletter</Text>
        </div>
        <form
          action="#"
          className="w-full flex flex-col md:flex-row  gap-4 md:max-w-[420px]"
        >
          <VStack alignItems={"left"}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
              className="h-[48px] rounded-20 email-input pl-6 text-b-black w-full md:w-[248px]"
            />
          </VStack>
          <CustomButton
            className="bg-white rounded-20 text-b-black md:ml-[14px] !w-full md:!w-max self-end"
            type="submit"
            leftIcon={
              <img src="/icons/mail.svg" alt="email" width={24} height={24} />
            }
          >
            Subscribe
          </CustomButton>
        </form>
      </Box>
    </Box>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const teamList = [
    { label: "NG", value: "Nigeria" },
    { label: "CA", value: "Canada" },
    { label: "UK", value: "United Kingdom" },
    { label: "US", value: "United States" },
  ];

  return (
    <div className="relative z-50">
      <EmailForm />
      <footer className="bg-b-ash-2 py-10 text-white bg-b-black">
        <Box className="mx-auto w-full max-w-[1184px] flex md:justify-between flex-col md:flex-row px-5 md:px-0">
          <Box className="mb-6 md:mb-0 text-start flex flex-col gap-5 max-w-[276px] mr-3">
            <Link href="/home" className="flex items-center">
              <Image
                src="/imgs/logo-footer.png"
                width={122}
                height={40}
                className="h-8 mt-3 mb-2"
                alt="SMG Logo"
              />
            </Link>
            <p>
              <span className="text-[12px] font-medium mr-2">Nigeria</span>
              <img
                className="inline"
                src="/icons/nigeria.png"
                alt="nigeria"
                width={16}
                height={16}
              />
            </p>
            <p className="text-[14px] leading-7">
              Suite 101, Plot 9 Gbagada - Oworonshoki Expy, beside UPS, Araromi
              105102, Lagos, Nigeria
            </p>
            <div className="flex gap-2 mt-[15px]">
              {teamList.map((option) => (
                <Flex
                  align="center"
                  direction={"column"}
                  gap={2}
                  className=""
                  key={option.value}
                >
                  <Link href={"#"} className="grid place-items-center">
                    <Image
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
          </Box>
          <Box className="grid grid-cols-2 md:grid-cols-3 gap-x-4 !text-base">
            {footerLinks.map((section, index) => (
              <Box key={index}>
                <div className="mb-[14px]">
                  <Text className="font-semibold text-white opacity-80 text-base">
                    {section.title}
                  </Text>
                  <div className="w-full max-w-[80px]" />
                </div>
                {section.title === "SocialMedia Inc" ? (
                  <>
                    <Flex gap={4}>
                      {section.links.map(
                        (link, linkIndex) =>
                          link.icon && (
                            <Link href={link.link} key={linkIndex}>
                              <Image
                                src={link.icon}
                                alt={link.name}
                                width={35}
                                height={35}
                              />
                            </Link>
                          )
                      )}
                    </Flex>
                    {section.links.some((link) => !link.icon) && (
                      <div className="mt-4">
                        {section.links
                          .filter((link) => !link.icon)
                          .map((link, linkIndex) => (
                            <Link
                              href={link.link}
                              key={linkIndex}
                              className="block"
                            >
                              {link.name}
                            </Link>
                          ))}
                      </div>
                    )}
                  </>
                ) : (
                  <ul className="flex flex-col gap-2 font-medium list-none ml-0">
                    {section.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="flex items-center gap-2 my-1"
                      >
                        {link.icon && (
                          <Image
                            src={link.icon}
                            alt={link.name}
                            width={35}
                            height={35}
                          />
                        )}
                        <Link
                          href={link.link}
                          className={`hover:text-b-green-2 ${
                            link.name.includes("@") ? "underline my-1" : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="max-w-[1184px] mx-auto px-[5%] flex justify-center pt-[23px] mt-10 md:border-t border-b-ash">
          <span className="text-sm text-center text-[14px] text-b-grey">
            ©{currentYear} SellMedia, BOSS Global. All rights reserved
          </span>
        </Box>
        {/* <a
          href={`https://wa.me/${whatsappNumber}/?text=${encodedMessage}`}
          target="_blank"
        >
          <div className=" bg-white  rounded-md p-3 max-w-max">
            <img
              src="/icons/whatsapp-icon.svg"
              alt="whatsapp"
              width={32}
              height={32}
            />
          </div>
        </a> */}
      </footer>
    </div>
  );
};

export default Footer;

const footerLinks = [
  {
    title: "Our Services",
    links: [
      {
        name: "Marketing Analytics",
        link: "https://sellmedia.africa/services/marketing-analytics",
      },
      {
        name: "Marketing Communications",
        link: "https://sellmedia.africa/services/marketing-comms",
      },
      {
        name: "Marketing Technology",
        link: "https://sellmedia.africa/services/marketing-tech",
      },
    ],
  },
  {
    title: "Privacy & Security",
    links: [
      { name: "Privacy Policy", link: "/privacy-policy" },
      { name: "Terms and Condition", link: "/terms-and-conditions" },
      { name: "Social Media Policy", link: "/social-policy" },
      { name: "Copyright Notice", link: "/copyright" },
    ],
  },
  {
    title: "Talk to SMG",
    links: [
      {
        name: "",
        link: "#",
        icon: "/icons/email.svg",
      },
      {
        name: "hello@sellmedia.africa",
        link: "mailto:hello@sellmedia.africa",
      },
      {
        name: "",
        link: "#",
        icon: "/icons/telephone.svg",
      },
      {
        name: "+234 706 419 1282",
        link: "tel:+234013300401",
      },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "SellMerch", link: "#" },
      { name: "SellCrea8", link: "#" },
      { name: "SellTalk", link: "#" },
      { name: "SellPlanner", link: "#" },
      { name: "Piazza", link: "#" },
    ],
  },
  {
    title: "SocialMedia Inc",
    links: [
      {
        name: "",
        link: "https://www.facebook.com/sellmediagroup",
        icon: "/icons/facebook.svg",
      },
      {
        name: "",
        link: "https://twitter.com/SellMediaInc",
        icon: "/icons/twitter.svg",
      },
      {
        name: "",
        link: "https://www.instagram.com/sellmediainc/",
        icon: "/icons/instagram.svg",
      },
      {
        name: "",
        link: "https://www.linkedin.com/company/sellmedia-inc/",
        icon: "/icons/linkedin.svg",
      },
      {
        name: "SellMedia Africa",
        link: "#",
      },
    ],
  },
];
