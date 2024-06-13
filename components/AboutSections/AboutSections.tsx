import { cn } from "@/utils/cn";
import { Box, Flex, Text } from "@chakra-ui/react";

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
      className={cn("mt-[80px] w-full max-w-[1200px] px-4 mx-auto ", className)}
    >
      <Flex gap={8} justifyContent={"center"}>
        <img src={`/icons/${icon}.svg`} alt={icon} width={30} height={30} />
        <Text color={titleColor}>{title}</Text>
      </Flex>
      <h2 className="mt-[40px] mb-6">{header}</h2>
      {children}
    </Box>
  );
};

export default AboutSections;
