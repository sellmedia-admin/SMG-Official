import { cn } from "@/utils/cn";
import { Box, Flex, Text } from "@chakra-ui/react";
import SectionTitle from "../SectionTitles/SectionTitle";

const AboutSections = ({
  icon,
  title,
  titleColor,
  children,
  header,
  className,
}: {
  children: React.ReactNode;
  icon: string;
  title: string;
  header: string;
  titleColor: string;
  className?: string;
}) => {
  return (
    <Box
      className={cn(
        "mt-10 md:mt-[80px] w-full max-w-[1200px] md:px-4 mx-auto text-center",
        className
      )}
    >
      <Box className="w-max md:mx-auto">
        <SectionTitle title={title} titleColor={titleColor} leftIcon={icon} />
      </Box>

      <h2 className="mt-6 md:mt-10 mb-4 md:mb-6 text-start md:text-center">
        {header}
      </h2>
      {children}
    </Box>
  );
};

export default AboutSections;
