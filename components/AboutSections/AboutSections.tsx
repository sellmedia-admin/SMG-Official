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
        "mt-[80px] w-full max-w-[1200px] px-4 mx-auto text-center",
        className
      )}
    >
      <Box className="w-max mx-auto">
        <SectionTitle title={title} titleColor={titleColor} leftIcon={icon} />
      </Box>

      <h2 className="mt-[40px] mb-6">{header}</h2>
      {children}
    </Box>
  );
};

export default AboutSections;
