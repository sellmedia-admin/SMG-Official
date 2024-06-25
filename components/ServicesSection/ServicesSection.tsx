"use client";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import CustomButton from "../Button/Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

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
      <h3 className="leading-[46px]">{title}</h3>
      <Text className="my-6">{text}</Text>
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
    <Box textAlign="center" mt="80px" px={{ base: "20px", md: "0" }}>
      <Box mx="auto" maxW="max">
        <Heading fontWeight="bold">{topTitle}</Heading>
        <div className="max-w-[200px] ml-12">
          <img
            src="/imgs/line-separator.png"
            alt="line"
            width="100%"
            height="15px"
          />
        </div>

        <Heading fontWeight="bold">{bottomTitle}</Heading>
      </Box>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap="54px"
        mt="40px"
        mb="80px"
        w="full"
        maxW="1217px"
        mx="auto"
        textAlign="start"
        alignItems="center"
      >
        <Box order={{ base: 1, md: isImageRight ? 2 : 1 }}>
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
