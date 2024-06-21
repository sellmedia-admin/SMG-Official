"use client";
import { Text } from "@chakra-ui/react";
import SectionTitle from "../SectionTitles/SectionTitle";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type StatementProps = {
  title: string;
  backgroundColor: string;
  textContent: string;
};

export const StatementSection: React.FC<StatementProps> = ({
  title,
  backgroundColor,
  textContent,
}) => {
  return (
    <div className={`rounded-15 ${backgroundColor} py-6 px-4`}>
      <SectionTitle
        title={title}
        titleColor="text-b-black"
        leftIcon="pink-star"
        rightIcon="pink-star"
        className="w-max mx-auto"
        textStyle="!text-[28px]"
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
  <div className="order-1 md:order-none px-5 md:px-0">
    {title && <h2 className="mb-[24px]">{title}</h2>}
    <p>{content}</p>
  </div>
);

export const ImageBlock: React.FC<{
  src1: string;
  src2: string;
  applyMarginAuto?: boolean;
}> = ({ src1, src2, applyMarginAuto }) => (
  <div className="w-full px-5 md:px-0 md:max-w-[600px] order-2 md:order-none">
    <img
      src={src1}
      width={60}
      height={65}
      alt="highlight"
      className={applyMarginAuto ? "ml-auto" : ""}
    />
    <img src={src2} width={600} height={286} alt="smg" />
  </div>
);
