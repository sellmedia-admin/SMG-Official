/* eslint-disable react/display-name */
import { cn } from "@/utils/cn";
import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode, forwardRef } from "react";

interface CustomButtonProps extends ButtonProps {
  children?: ReactNode;
  paddingY?: string;
  paddingX?: string;
  leftIcon?: any;

  fontWeight?: number | string;
  rightIcon?: any;
  className?: string;

  color?: string;
  rounded?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
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

      fontWeight = 600,
      rightIcon,
      color = "",
      border = "",
      borderRadius = "20px",
      className,
      height = "48px",

      ...rest
    },
    ref
  ) => {
    return (
      <Button
        type={type}
        borderRadius={borderRadius}
        spinnerPlacement="start"
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        py={paddingY}
        paddingY={paddingY}
        px={paddingX}
        paddingX={paddingX}
        variant={variant}
        onClick={onClick}
        border={border}
        color={color}
        height={height}
        className={cn(
          "text-white leading-[23px] w-[133px] h-[36px]   md:h-full md:!w-[170px] !text-[14px] text-base",
          className
        )}
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
