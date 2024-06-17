import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../SectionTitles/SectionTitle";

type AboutBoxProps = {
  title: string;
  titleColor: string;
  leftIcon: string;
  mainHeading: string;
  textContent: string;
};

const AboutBox: React.FC<AboutBoxProps> = ({
  title,
  titleColor,
  leftIcon,
  mainHeading,
  textContent,
}) => {
  return (
    <Box className="min-h-about bg-about-us-bg bg-no-repeat bg-center bg-cover text-center pt-[54px]">
      <SectionTitle
        title={title}
        titleColor={titleColor}
        leftIcon={leftIcon}
        className="w-max mx-auto"
      />

      <h1 className="mt-10 mb-6 max-w-[1200px] mx-auto">{mainHeading}</h1>
      <Text className="max-w-[946px] mx-auto">{textContent}</Text>
    </Box>
  );
};

export default AboutBox;