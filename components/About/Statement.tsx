"use client";
import { Text } from "@chakra-ui/react";
import SectionTitle from "../SectionTitles/SectionTitle";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type StatementProps = {
  title: string;
  backgroundColor: string;
  textContent: string;
  leftIcon: string;
  rightIcon: string;
};

export const StatementSection: React.FC<StatementProps> = ({
  title,
  backgroundColor,
  textContent,
  leftIcon,
  rightIcon,
}) => {
  return (
    <div className={cn("rounded-15 py-6 px-4 bg-pryPurple", backgroundColor)}>
      <SectionTitle
        title={title}
        titleColor="text-b-black"
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        className="w-max md:mx-auto"
        textStyle="text-[18px] md:text-[28px]"
      />

      <Text className="mt-[26px]">{textContent}</Text>
    </div>
  );
};

export const MotionDiv: React.FC<{ children: ReactNode; initialX: number }> = ({
  children,
  initialX,
}) => (
  <motion.div
    initial={{ x: initialX, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col md:flex-row gap-[23px] items-center"
  >
    {children}
  </motion.div>
);

export const TextBlock: React.FC<{ title?: string; content: string }> = ({
  title,
  content,
}) => (
  <div className="order-1 md:order-none  w-full max-w-[800px]">
    {title && <h2 className="mb-[24px]">{title}</h2>}
    <p>{content}</p>
  </div>
);

export const ImageBlock: React.FC<{
  src1: string;
  src2: string;
  applyMarginAuto?: boolean;
}> = ({ src1, src2, applyMarginAuto }) => (
  <div className="w-full md:max-w-[486px] order-2 md:order-none">
    <div
      className={`w-[22px] h-[24px] md:w-[60px] md:h-[65px] ${
        applyMarginAuto ? "ml-auto" : ""
      }`}
    >
      <img src={src1} width={"100%"} height={"100%"} alt="highlight" />
    </div>
    <img src={src2} width={"100%"} height={286} alt="smg" />
  </div>
);
