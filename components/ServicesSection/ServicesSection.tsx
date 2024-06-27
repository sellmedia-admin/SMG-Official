"use client";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import CustomButton from "../Button/Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface SectionServices {
  index: number;
  topTitle: string;
  bottomTitle: string;
  image: string;
  // separator?: string;
  linkTo: string;
  contentTitle: string;
  contentText: string;
  orderBy?: string;
}

interface ServicesText {
  title: string;
  text: string;
  linkTo: string;
  orderBy?: string;
}

const ServiceText = ({ title, text, linkTo, orderBy }: ServicesText) => {
  const Component = orderBy ? "div" : motion.div;
  return (
    <Component
      initial={orderBy ? {} : { x: -100, opacity: 0 }}
      whileInView={orderBy ? {} : { x: 0, opacity: 1 }}
      transition={orderBy ? {} : { delay: 0.5, type: "spring", stiffness: 20 }}
      className="md:max-w-[523px]"
    >
      <h3 className="md:leading-[46px]">{title}</h3>
      <Text className="mt-4 mb-0 md:my-6">{text}</Text>
      <Link href={linkTo}>
        <CustomButton
          className="text-b-pink !justify-start !pl-0"
          rightIcon={<img src="/icons/arrows-long-right.svg" />}
        >
          Learn more
        </CustomButton>
      </Link>
    </Component>
  );
};

const ServicesSection = ({
  index,
  topTitle,
  bottomTitle,
  image,
  // separator,
  linkTo,
  contentTitle,
  contentText,
  orderBy,
}: SectionServices) => {
  const Component = orderBy ? "div" : motion.div;
  const isImageRight = index === 1;

  return (
    <Box textAlign="center" mt={{ base: "40px", md: "80px" }}>
      <div className="md:max-w-max mx-auto">
        <h2 className="text-start md:text-center text-[18px] md:text-[34px]">
          {topTitle}
        </h2>
        <div className="max-w-[161px] md:max-w-[200px] md:ml-12">
          <img
            src="/imgs/line-separator.png"
            alt="line"
            width="100%"
            height="15px"
          />
        </div>

        <h2 className="text-start md:text-center text-[16px] md:text-[34px]">
          {bottomTitle}
        </h2>
      </div>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: "24px", md: "54px" }}
        mt="40px"
        mb={{ base: "0px", md: "80px" }}
        w="full"
        maxW="1217px"
        mx="auto"
        textAlign="start"
        alignItems="center"
      >
        <Box order={{ base: 2, md: isImageRight ? 2 : 1 }}>
          <ServiceText
            linkTo={linkTo}
            title={contentTitle}
            text={contentText}
            orderBy={orderBy}
          />
        </Box>

        <Box order={{ base: 1, md: isImageRight ? 1 : 2 }}>
          <Component
            initial={orderBy ? {} : { x: 100, opacity: 0 }}
            whileInView={orderBy ? {} : { x: 0, opacity: 1 }}
            transition={
              orderBy ? {} : { delay: 0.5, type: "spring", stiffness: 20 }
            }
          >
            <Image
              src={`/imgs/${image}`}
              alt={image}
              width={639}
              height={466}
            />
          </Component>
        </Box>
      </Grid>
    </Box>
  );
};

export default ServicesSection;
