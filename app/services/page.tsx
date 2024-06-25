"use client";
import { ContactModal, CustomButton, Hero, Modal } from "@/components";
import { SERVICES_OFFERED } from "@/data";
import { Box, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  bgClass?: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
  onOpen: () => void;
  highlight: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  bgClass = "",
  title,
  description,
  imageUrl,
  imageAlt,
  link,
  onOpen,
  highlight,
  reverse = false,
}) => {
  return (
    <section
      id={id}
      className={`flex flex-col md:flex-row md:px-[20%] gap-10 items-center mx-auto pb-10 !px-0 md:py-[80px] md:${bgClass} ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        initial={{ x: reverse ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[487px]"
      >
        <div
          className={`w-[22px] h-[24px] md:w-[60px] md:h-[65px] ${
            reverse ? "mr-auto md:mr-0" : "ml-auto"
          }`}
        >
          <img
            src={highlight}
            alt="highlight icon"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <Image src={imageUrl} alt={imageAlt} width={487} height={286} />
      </motion.div>
      <motion.div
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 "
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="space-x-2 flex flex-row justify-between md:justify-start items-center">
          <Link href={link}>
            <CustomButton className="bg-b-black text-white rounded-20 w-[171px]">
              Learn more
            </CustomButton>
          </Link>
          <CustomButton
            onClick={onOpen}
            className="bg-transparent text-b-ash rounded-20 border border-solid !border-b-ash w-[171px]"
          >
            Talk to sales
          </CustomButton>
        </div>
      </motion.div>
    </section>
  );
};

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

      <div className="flex flex-col md:flex-row justify-between  gap-6 max-w-[1000px] mx-auto mt-10 md:my-[80px] px-5 md:px-0">
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
            <h3 className="text-[#434343] text-center max-w-[170px] md:max-w-[291px]">
              {service.service}
            </h3>

            <a href={service.link} className="text-b-pink font-[600]">
              Learn more
            </a>
          </Box>
        ))}
      </div>

      <div className="text-start pt-[80px] px-5 md:px-0 max-w-[1200px] mx-auto">
        <h2 className="text-center mb-[24px]">
          We drive growth and visibility
        </h2>
        {/* Service 1 */}
        <Section
          id="communications"
          title="Marketing Communication"
          description="Crafting impactful, multi-channel campaigns that amplify your brand's voice and engage your target audience through strategic content, social media, and public relations"
          imageUrl="/imgs/experimental-marketing.png"
          imageAlt="marketing communications"
          link="/services/marketing-communication"
          onOpen={onOpen}
          highlight="/imgs/highlight-right.png"
        />

        {/* Service 2 */}
        <Section
          id="analytics"
          bgClass="bg-b-lightPink"
          title="Marketing Analytics"
          description="Transforming complex data into actionable insights to track performance, understand customer behavior, and measure ROI, helping you refine strategies for better outcomes."
          imageUrl="/imgs/marketing-analytics.png"
          imageAlt="marketing analytics"
          link="/services/marketing-analytics"
          onOpen={onOpen}
          highlight="/imgs/highlight-left.png"
          reverse
        />

        {/* Service 3 */}
        <Section
          id="technology"
          title="Marketing Technology"
          description="Implementing and managing cutting-edge tools and platforms, from campaign execution systems to AI-driven media solutions, to streamline operations and drive business innovation"
          imageUrl="/imgs/marketing-technology.png"
          imageAlt="marketing tech"
          link="/services/marketing-technology"
          onOpen={onOpen}
          highlight="/imgs/highlight-right.png"
        />
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ContactModal />
      </Modal>
    </div>
  );
};

export default Services;
