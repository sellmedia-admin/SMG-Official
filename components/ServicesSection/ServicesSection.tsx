"use client";
import { Box, Text } from "@chakra-ui/react";
import CustomButton from "../Button/Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface SectionServices {
  index: number;
  topTitle: string;
  bottomTitle: string;
  image: string;
  separator?: string;
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
      initial={orderBy ? {} : { x: 100, opacity: 0 }}
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
  separator,
  linkTo,
  contentTitle,
  contentText,
  orderBy,
}: SectionServices) => {
  const Component = orderBy ? "div" : motion.div;
  const isImageRight = index === 1;
  console.log(index);

  return (
    <Box className="text-center mt-[80px] px-[20px] md:px-0">
      <Box className="mx-auto max-w-max">
        <Text className="font-bold text-[37px]">{topTitle}</Text>

        <img
          src="/imgs/line-separator.png"
          alt="line"
          width={"200px"}
          height={"15px"}
          style={{ marginLeft: separator }}
        />

        <Text className="font-bold text-[37px]">{bottomTitle}</Text>
      </Box>

      <Box className="w-full max-w-[1217px] mx-auto grid place-items-center md:grid-cols-2 text-start gap-[54px] mt-[40px] mb-[80px]">
        <Box className={`order-2 md:order-${isImageRight ? 2 : 1}`}>
          <ServiceText
            linkTo={linkTo}
            title={contentTitle}
            text={contentText}
            orderBy={orderBy}
          />
        </Box>

        <Box className={`order-1  md:order-${isImageRight ? 1 : 2}`}>
          <Component
            initial={orderBy ? {} : { x: -100, opacity: 0 }}
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
      </Box>
    </Box>
  );
};

export default ServicesSection;
