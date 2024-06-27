import { cn } from "@/utils/cn";
import { Flex, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

interface SectionTitleProps {
  leftIcon: string;
  title: string;
  titleColor: string;
  rightIcon?: string;
  className?: string;
  textStyle?: string;
}

const SectionTitle = ({
  leftIcon,
  rightIcon,
  titleColor,
  title,
  className,
  textStyle,
}: SectionTitleProps) => {
  return (
    <Flex gap={{ base: 1, md: 4 }} alignItems={"center"} className={className}>
      <Box
        width={{ base: "20px", md: "30px" }}
        height={{ base: "20px", md: "30px" }}
      >
        <Image
          src={`/icons/${leftIcon}.svg`}
          alt={`${leftIcon} icon`}
          width={30}
          height={30}
        />
      </Box>
      <Text className={cn(titleColor, textStyle)} fontWeight={700}>
        {title}
      </Text>
      {rightIcon && (
        <Box
          width={{ base: "20px", md: "30px" }}
          height={{ base: "20px", md: "30px" }}
        >
          <Image
            src={`/icons/${rightIcon}.svg`}
            alt={`${rightIcon} icon`}
            width={30}
            height={30}
          />
        </Box>
      )}
    </Flex>
  );
};

// Define default props
SectionTitle.defaultProps = {
  rightIcon: "",
  className: "",
  textStyle: "",
};

export default SectionTitle;
