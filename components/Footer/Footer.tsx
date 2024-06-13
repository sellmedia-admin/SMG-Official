import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../Button/Button";
import Link from "next/link";
import Image from "next/image";

const EmailForm = () => {
  return (
    <Box className="bg-b-ash1 py-10 text-white">
      <Box className="max-w-[1184px] flex justify-between items-center mx-auto">
        <div className="flex flex-col gap-[18px]">
          <h2>Stay informed</h2>
          <Text fontWeight={600}>Signup for our newsletter</Text>
        </div>
        <form action="">
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email Address"
            className="h-[48px] rounded-20 email-input pl-6 text-b-black w-[248px]"
          />
          <CustomButton
            className="bg-white rounded-20 text-b-black ml-[14px]"
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
    <section>
      <EmailForm />
      <footer className="bg-b-ash-2 py-10 text-white bg-b-black">
        <Box className="mx-auto w-full max-w-[1184px] md:flex md:justify-between">
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
                  gap={8}
                  className=""
                  key={option.value}
                >
                  <Image
                    src={`/icons/${option.label.toLowerCase()}-special.svg`}
                    alt={option.label}
                    width={32}
                    height={32}
                  />
                  <Box className="font-600 leading-[18px]">{option.label}</Box>
                </Flex>
              ))}
            </div>
          </Box>
          <Box className="grid grid-cols-3 sm:gap-6 gap-8">
            {footerLinks.map((section, index) => (
              <Box key={index}>
                <div className="mb-[14px]">
                  <Text className="font-semibold  text-white opacity-80">
                    {section.title}
                  </Text>
                  <div className="w-full max-w-[80px]" />
                </div>
                {section.title === "Social Media" ? (
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
                              className="hover:underline hover:text-b-green-2 block"
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
                      <li key={linkIndex} className="flex items-center gap-2">
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
                          className="hover:underline hover:text-b-green-2"
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
        <Box className="max-w-[1184px] mx-auto flex justify-center pt-[23px] mt-10 border-t border-t-b-ash2">
          <span className="text-sm text-center text-[14px] text-b-grey">
            ©{currentYear} SellMedia, BOSS Global. All rights reserved
          </span>
        </Box>
      </footer>
    </section>
  );
};

export default Footer;

const footerLinks = [
  {
    title: "Our Services",
    links: [
      { name: "Marketing Analytics", link: "#" },
      { name: "Marketing Communications", link: "#" },
      { name: "Marketing Technology", link: "#" },
    ],
  },
  {
    title: "Privacy & Security",
    links: [
      { name: "Privacy Policy", link: "#" },
      { name: "Terms and Condition", link: "#" },
      { name: "Social Media Policy", link: "#" },
      { name: "Copyright Notice", link: "#" },
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
        link: "tel:+2347064191282",
      },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "SellMerch", link: "#" },
      { name: "BrandMate", link: "#" },
    ],
  },
  {
    title: "Social Media",
    links: [
      {
        name: "",
        link: "https://www.facebook.com",
        icon: "/icons/facebook.svg",
      },
      {
        name: "",
        link: "https://www.twitter.com",
        icon: "/icons/twitter.svg",
      },
      {
        name: "",
        link: "https://www.instagram.com",
        icon: "/icons/instagram.svg",
      },
      {
        name: "",
        link: "https://www.linkedin.com",
        icon: "/icons/linkedin.svg",
      },
      {
        name: "SellMedia Africa",
        link: "#",
      },
    ],
  },
];
