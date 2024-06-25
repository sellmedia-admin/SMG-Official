"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { Fragment, forwardRef } from "react";

interface ApproachCardProps {
  stage: string;
  title: string;
  description: string;
  className?: string;
  delay: number;
}

const ApproachCard = forwardRef<HTMLDivElement, ApproachCardProps>(
  ({ stage, title, description, className }, ref) => {
    return (
      <div ref={ref} className={cn("text-center w-full", className)}>
        <p className="bg-black rounded-lg py-3 px-6 text-white mb-6 text-[16px] w-max mx-auto">
          {stage}
        </p>
        <h3>{title}</h3>
        <p className="text-[16px] text-[#6b6c7e] mt-2">{description}</p>
      </div>
    );
  }
);

const Arrow: React.FC<{ src: string; className: string; delay: number }> = ({
  src,
  className,
  delay,
}) => (
  <motion.img
    src={src}
    alt="arrow"
    width={121}
    height={19}
    className={className}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay }}
  />
);

const DownArrow: React.FC<{
  src: string;
  className: string;
  delay: number;
}> = ({ src, className, delay }) => (
  <motion.img
    src={src}
    alt="down-arrow"
    width={20}
    height={50}
    className={className}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay }}
  />
);

interface CardSectionProps {
  cards: ApproachCardProps[];
  addDownArrowBetween?: boolean;
}

const CardSection: React.FC<CardSectionProps> = ({
  cards,
  addDownArrowBetween,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-5 mt-10 gap-y-6 md:gap-y-0 px-5 md:px-0 overflow-x-hidden">
    {cards.map((card, index) => (
      <Fragment key={card.stage}>
        <ApproachCard {...card} />
        {index < cards.length - 1 && (
          <>
            <div className="hidden md:block">
              {index % 2 === 0 ? (
                <Arrow
                  src="/icons/arrow.svg"
                  className="mt-[105px] ml-8"
                  delay={card.delay + 0.4}
                />
              ) : (
                <Arrow
                  src="/icons/arrow-down.svg"
                  className="ml-8"
                  delay={card.delay + 0.4}
                />
              )}
            </div>
            <div className="md:hidden">
              <DownArrow
                src="/icons/down-arrow.svg"
                className="mx-auto"
                delay={card.delay + 0.4}
              />
            </div>
          </>
        )}
        {addDownArrowBetween && index === cards.length - 1 && (
          <div className="md:hidden">
            <DownArrow
              src="/icons/down-arrow.svg"
              className="mx-auto"
              delay={0.4}
            />
          </div>
        )}
      </Fragment>
    ))}
  </div>
);

export default CardSection;
