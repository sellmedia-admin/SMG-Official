"use client";
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
    viewport={{ once: true }}
  />
);

interface CardSectionProps {
  cards: ApproachCardProps[];
}

const CardSection: React.FC<CardSectionProps> = ({ cards }) => (
  <div className="grid grid-cols-5 mt-10">
    {cards.map((card, index) => (
      <Fragment key={card.stage}>
        <ApproachCard {...card} />
        {index % 2 === 0 && index < cards.length - 1 && (
          <Arrow
            src="/icons/arrow.svg"
            className="mt-[105px] ml-8"
            delay={card.delay + 0.4}
          />
        )}
        {index % 2 === 1 && index < cards.length - 1 && (
          <Arrow
            src="/icons/arrow-down.svg"
            className="ml-8"
            delay={card.delay + 0.4}
          />
        )}
      </Fragment>
    ))}
  </div>
);

export default CardSection;
