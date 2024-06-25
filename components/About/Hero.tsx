import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SectionTitle from "../SectionTitles/SectionTitle";

type AboutBoxProps = {
  title: string;
  titleColor: string;
  leftIcon: string;
  mainHeading: string;
  textContent: string;
  noTitle?: boolean;
};

const AboutBox: React.FC<AboutBoxProps> = ({
  title,
  titleColor,
  leftIcon,
  mainHeading,
  textContent,
  noTitle = false,
}) => {
  return (
    <Box className="min-h-about bg-about-us-bg bg-no-repeat bg-center bg-cover md:text-center pt-10 md:pt-[54px] pb-10 px-5">
      {noTitle ? (
        ""
      ) : (
        <SectionTitle
          title={title}
          titleColor={titleColor}
          leftIcon={leftIcon}
          className="w-max md:mx-auto"
        />
      )}

      <h1 className="mt-10 mb-6 max-w-[1200px] md:mx-auto">{mainHeading}</h1>
      <Text className="max-w-[946px] md:mx-auto">{textContent}</Text>
    </Box>
  );
};

export default AboutBox;
