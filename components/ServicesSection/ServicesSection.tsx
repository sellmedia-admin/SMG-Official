import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CustomButton from "../Button/Button";
import Image from "next/image";
import Link from "next/link";

interface SectionServices {
  topTitle: string;
  bottomTitle: string;
  image: string;
  separator?: string;
  linkTo: string;
  contentTitle: string;
  contentText: string;
  orderBy?: string;
}

const ServiceText = ({ title, text, linkTo }: { [x: string]: string }) => {
  return (
    <Box className="max-w-[523px]">
      <h3 className="leading-[46px]">{title}</h3>
      <Text className="leading-9 my-6">{text}</Text>
      <Link href={linkTo}>
        <CustomButton
          className="text-b-pink !justify-start"
          rightIcon={<img src="/icons/arrows-long-right.svg" />}
        >
          Learn more
        </CustomButton>
      </Link>
    </Box>
  );
};

const ServicesSection = ({
  topTitle,
  bottomTitle,
  image,
  separator,
  linkTo,
  contentTitle,
  contentText,
  orderBy,
}: SectionServices) => {
  return (
    <Box className="text-center mt-[80px]">
      <Box className="mx-auto w-max">
        <Text className="font-bold text-[37px]">{topTitle}</Text>
        <img
          src="/imgs/line-separator.png"
          alt="line"
          width={"200px"}
          height={"15px"}
          className={separator}
        />
        <Text className="font-bold text-[37px]">{bottomTitle}</Text>
      </Box>

      <>
        <Box className="w-full max-w-[1217px] mx-auto grid place-items-center grid-cols-2 text-start gap-[54px]  mt-[40px] mb-[80px]">
          <ServiceText
            linkTo={linkTo}
            title={contentTitle}
            text={contentText}
          />
          <Box className={orderBy}>
            <Image
              src={`/imgs/${image}`}
              alt={image}
              width={639}
              height={466}
            />
          </Box>
        </Box>
      </>
    </Box>
  );
};

export default ServicesSection;
