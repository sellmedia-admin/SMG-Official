"use client";
import { motion } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AboutSections } from "@/components";
import { SERVICES_HELP } from "@/data";
import { cn } from "@/utils/cn";

const AboutSection = () => (
  <>
    <AboutSections
      title="About Us"
      titleColor="text-[#C82090]"
      icon="pink-star"
      header="We Are Our First Client"
      className="mb-[80px]"
    >
      <Text>
        At SellMedia Group, we champion the fusion of media and technology. As
        pioneers on this transformative journey, we embody our own philosophy,
        consistently pushing boundaries and setting new standards. Our diverse
        and dynamic team, equipped with cutting-edge technologies, crafts
        solutions that redefine the media and marketing landscape. We are driven
        by a relentless pursuit of creativity and innovation, empowering
        enterprises to navigate the digital age with confidence.
      </Text>
    </AboutSections>
    <AboutSections
      title="Our Services"
      titleColor="text-[#00BA72]"
      icon="green-star"
      header="How Can We Help You?"
    >
      <Text>
        SellMedia Group offers a comprehensive suite of marketing services
        designed to deliver results. Our 360-degree marketing approach ensures
        that we address every facet of your marketing needs, from strategic
        planning to execution. Our services include:
      </Text>
    </AboutSections>
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      marginTop={20}
      maxWidth={1300}
      className="mx-auto"
    >
      <img
        src="/imgs/highlight-left.png"
        alt="highlight icon"
        width={60}
        height={65}
      />
      <img
        src="/imgs/highlight-right.png"
        alt="highlight icon"
        width={60}
        height={65}
      />
    </Flex>

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="grid grid-cols-3 gap-[18px] mx-auto max-w-[1200px] -mt-6"
    >
      {SERVICES_HELP.map((achievement) => (
        <div
          key={achievement.title}
          className="rounded-10 bg-white border border-[#B3B3B3] text-center h-[344px] flex flex-col items-center justify-center gap-6 shadow-pale-blue hover:bg-b-lightPink hover:cursor-pointer group"
        >
          <div
            className={cn(
              "w-[80px] h-[80px] rounded-full grid place-items-center group-hover:bg-white",
              achievement.bgColor
            )}
          >
            <img
              src={`icons/${achievement.icon}.svg`}
              alt={achievement.icon}
              width={50}
              height={50}
            />
          </div>
          <div className="text-center mx-auto max-w-[291px]">
            <h2 className="text-2xl leading-8">{achievement.title}</h2>
          </div>
          <Text className="max-w-[339px] text-base leading-[30px]">
            {achievement.text}
          </Text>
        </div>
      ))}
    </motion.div>
  </>
);

export default AboutSection;
