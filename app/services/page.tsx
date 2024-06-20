"use client";
import { ContactModal, CustomButton, Hero, Modal } from "@/components";
import { SERVICES_OFFERED } from "@/data";
import { Box, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Hero
        title="Hello there"
        titleColor="text-b-pink"
        leftIcon="pink-star"
        mainHeading="How can we serve you"
        textContent="From crafting impactful, multi-channel campaigns that amplify your brand's voice and engage your target audience to transforming complex data into actionable insights to track performance, understand customer behavior, and measure ROI, SMG aims at helping you refine your brand strategies for better business outcomes."
      />

      <div className="flex  gap-6 max-w-[1200px] mx-auto my-[80px]">
        {SERVICES_OFFERED.map((service) => (
          <Box
            key={service.icon}
            className="rounded-10  text-center flex flex-col gap-6 items-center justify-center p-10  shadow-pale-blue "
          >
            <img
              src={`${service.icon}`}
              alt={service.service}
              width={80}
              height={80}
            />
            <h3 className="text-[#434343] max-w-[291px]">{service.service}</h3>

            <a href={service.link} className="text-b-pink font-[600]">
              Learn more
            </a>
          </Box>
        ))}
      </div>

      <div className="text-start pt-[80px]">
        <h2 className="mx-auto w-max mb-[24px]">
          We drive growth and visibility
        </h2>
        {/* service 1 */}
        <section
          id="communications"
          className="flex max-w-[1250px] gap-10 items-center mx-auto py-[80px]"
        >
          <div className=" space-y-6">
            <h3>Marketing Communication</h3>
            <p>
              Crafting impactful, multi-channel campaigns that amplify your
              brand's voice and engage your target audience through strategic
              content, social media, and public relations
            </p>
            <div className="space-x-2">
              <Link href={"/services/marketing-communication"}>
                <CustomButton className="bg-b-black text-white rounded-20">
                  Learn more
                </CustomButton>
              </Link>

              <CustomButton
                onClick={onOpen}
                className="bg-transparent text-b-ash rounded-20 border border-solid !border-b-ash"
              >
                Talk to sales
              </CustomButton>
            </div>
          </div>
          {/* for the image */}
          <div className="w-full max-w-[487px] ">
            <img
              src="/imgs/highlight-right.png"
              alt="highlight icon"
              width={60}
              height={65}
              className="ml-auto"
            />
            <Image
              src={"/imgs/experimental-marketing.png"}
              alt="marketing communications"
              width={487}
              height={286}
            />
          </div>
        </section>
        {/* end service 1 */}

        <section
          className="bg-b-lightPink flex items-center justify-center py-[80px]"
          id="analytics"
        >
          {/* service 2 */}
          <div className="flex max-w-[1250px] gap-10 items-center  my-auto">
            {/* for the image */}
            <div className="w-full max-w-[487px] ">
              <img
                src="/imgs/highlight-left.png"
                alt="highlight icon"
                width={60}
                height={65}
              />
              <Image
                src={"/imgs/marketing-analytics.png"}
                alt="marketing analytics"
                width={487}
                height={286}
              />
            </div>
            {/* ----- */}
            <div className=" space-y-6">
              <h3>Marketing Analytics</h3>
              <p>
                Transforming complex data into actionable insights to track
                performance, understand customer behavior, and measure ROI,
                helping you refine strategies for better outcomes.
              </p>
              <div className="space-x-2">
                <Link href={"/services/marketing-analytics"}>
                  <CustomButton className="bg-b-black text-white rounded-20">
                    Learn more
                  </CustomButton>
                </Link>

                <CustomButton
                  onClick={onOpen}
                  className="bg-transparent text-b-ash rounded-20 border border-solid !border-b-ash"
                >
                  Talk to sales
                </CustomButton>
              </div>
            </div>
          </div>
          {/* end service 2 */}
        </section>

        {/* service 3 */}
        <section
          id="technology"
          className="flex max-w-[1250px] gap-10 items-center mx-auto py-[80px] px-[5%]"
        >
          <div className=" space-y-6">
            <h3>Marketing Technology</h3>
            <p>
              Implementing and managing cutting-edge tools and platforms, from
              campaign execution systems to AI-driven media solutions, to
              streamline operations and drive business innovation
            </p>
            <div className="space-x-2">
              <Link href={"/services/marketing-technology"}>
                <CustomButton className="bg-b-black text-white rounded-20">
                  Learn more
                </CustomButton>
              </Link>

              <CustomButton
                onClick={onOpen}
                className="bg-transparent text-b-ash rounded-20 border border-solid !border-b-ash"
              >
                Talk to sales
              </CustomButton>
            </div>
          </div>
          {/* for the image */}
          <div className="w-full max-w-[487px] ">
            <img
              src="/imgs/highlight-right.png"
              alt="highlight icon"
              width={60}
              height={65}
              className="ml-auto"
            />
            <Image
              src={"/imgs/marketing-technology.png"}
              alt="marketing tech"
              width={487}
              height={286}
            />
          </div>
        </section>
        {/* end service 3 */}
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ContactModal />
      </Modal>
    </div>
  );
};

export default Services;
