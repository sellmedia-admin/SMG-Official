"use client";
import { CustomButton, GetStarted, Hero, Input } from "@/components";
import { Box, Flex, FormLabel, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

const ContactUsPage = () => {
  const SM = [
    {
      link: "https://www.facebook.com",
      icon: "/icons/sm/fb.svg",
    },
    {
      link: "https://www.twitter.com",
      icon: "/icons/sm/twitter.svg",
    },
    {
      link: "https://www.instagram.com",
      icon: "/icons/sm/ig.svg",
    },
    {
      link: "https://www.linkedin.com",
      icon: "/icons/sm/linkedin.svg",
    },
  ];
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  return (
    <div>
      <Hero
        title="Connect with SellMedia Group"
        titleColor="text-b-pink"
        leftIcon="pink-star"
        mainHeading="Your Gateway to Innovative Media-Tech Solutions"
        textContent="Discover how our cutting-edge technologies and tailored marketing strategies can drive your business forward. Reach out to our global team in the US, UK, Canada, and Africa, and let's start transforming your vision into reality."
      />
      <Box className="text-start max-w-[1200px] mx-auto pb-[80px]">
        <Text className="my-[31px]">
          We appreciate your interest in Sellmedia Group. For any inquiries,
          please use the contact information below or fill out the form, and our
          team will get back to you promptly.
        </Text>

        <div className="flex gap-6">
          <div className="space-y-6">
            <div className="border border-[#E5E5EA] flex items-start gap-6 p-6">
              <img
                src="/icons/pink-contact.svg"
                alt="contact"
                width={35}
                height={35}
              />

              <div>
                <Text className="text-b-pink mb-2">Contact us </Text>
                <Text className="text-[#7C7C7C] text-base leading-[30px]">
                  For technical assistance or support-related queries, please
                  contact our dedicated support team at
                </Text>
                <Text className=" text-base leading-[30px]">
                  hello@sellmedia.africa{" "}
                </Text>
              </div>
            </div>

            <div className="border border-[#E5E5EA] flex items-start gap-6 p-6">
              <img
                src="/icons/pink-phone.svg"
                alt="contact"
                width={35}
                height={35}
              />

              <div>
                <Text className="text-b-pink mb-2">Phone Number</Text>
                <Text className="text-[#7C7C7C] text-base leading-[30px]">
                  +234706 419 1282 
                </Text>
              </div>
            </div>
            <div className="border border-[#E5E5EA] flex items-start gap-6 p-6">
              <img
                src="/icons/pink-phone.svg"
                alt="contact"
                width={35}
                height={35}
              />

              <div>
                <Text className="text-b-pink mb-2">Social Media</Text>
                <Flex gap={1}>
                  {SM.map((sm) => (
                    <img
                      src={sm.icon}
                      alt={sm.link}
                      key={sm.icon}
                      width={35}
                      height={35}
                    />
                  ))}
                </Flex>
              </div>
            </div>
          </div>
          {/* ------ */}
          <div className="w-full">
            <form className=" border rounded-2xl p-8 shadow-dark-blue">
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
                  leftIcon={
                    <img src="/icons/attach.svg" width={24} height={24} />
                  }
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
          </div>
          {/* end of form */}
        </div>
      </Box>
      <GetStarted />
    </div>
  );
};

export default ContactUsPage;
