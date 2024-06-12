/* eslint-disable react/display-name */
import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode, forwardRef } from "react";

interface CustomButtonProps extends ButtonProps {
  children?: ReactNode;
  paddingY?: string;
  paddingX?: string;
  leftIcon?: any;
  fontSize?: string;
  fontWeight?: number | string;
  rightIcon?: any;
  className?: string;
  width?: string;
  color?: string;
  rounded?: string;
  height?: string;
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      children,
      type = "button",
      variant = "outline",
      onClick,
      paddingY,
      paddingX,
      leftIcon,
      rounded,
      fontSize = "16px",
      fontWeight = 600,
      rightIcon,
      className,
      height = "48px",
      width = "170px",
      ...rest
    },
    ref
  ) => {
    return (
      <Button
        type={type}
        w={width}
        borderRadius={rounded}
        spinnerPlacement="start"
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        py={paddingY}
        paddingY={paddingY}
        px={paddingX}
        paddingX={paddingX}
        variant={variant}
        onClick={onClick}
        fontSize={fontSize}
        height={height}
        className={cn(" text-white  leading-[23px] h-full", className)}
        _hover={{ opacity: "0.9" }}
        // _disabled={{
        //   cursor: "not-allowed",
        //   opacity: "0.4",
        // }}
        fontWeight={fontWeight}
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

export default CustomButton;
