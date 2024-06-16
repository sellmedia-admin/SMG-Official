import { cn } from "@/utils/cn";
import { Flex, Text } from "@chakra-ui/react";
interface SectionTitle {
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
}: SectionTitle) => {
  return (
    <Flex gap={4} alignItems={"center"} className={className}>
      <img
        src={`/icons/${leftIcon}.svg`}
        alt={leftIcon}
        width={30}
        height={30}
      />
      <Text
        className={cn(titleColor, textStyle)}
        fontWeight={700}
        fontSize={"16px"}
      >
        {title}
      </Text>
      {rightIcon && (
        <img
          src={`/icons/${rightIcon}.svg`}
          alt={rightIcon}
          width={30}
          height={30}
        />
      )}
    </Flex>
  );
};

export default SectionTitle;
