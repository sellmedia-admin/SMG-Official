import { Flex, Text } from "@chakra-ui/react";
interface SectionTitle {
  leftIcon: string;
  title: string;
  titleColor: string;
  rightIcon?: string;
}

const SectionTitle = ({
  leftIcon,
  rightIcon,
  titleColor,
  title,
}: SectionTitle) => {
  return (
    <Flex gap={4} alignItems={"center"}>
      <img
        src={`/icons/${leftIcon}.svg`}
        alt={leftIcon}
        width={30}
        height={30}
      />
      <Text className={titleColor} fontWeight={700} fontSize={"16px"}>
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
