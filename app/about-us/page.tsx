"use client";
import {
  AboutStepsCard,
  GetStarted,
  Hero,
  LandingPageAchievements,
  SectionTitle,
} from "@/components";
import {
  ApproachStep1,
  ApproachStep2,
  CULTURE1,
  CULTURE2,
  STATEMENTS,
  STORY_CONTENTS,
  TEAM,
  VALUES,
} from "@/data";

import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

type StatementProps = {
  title: string;
  backgroundColor: string;
  textContent: string;
};

const StatementSection: React.FC<StatementProps> = ({
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

const MotionDiv: React.FC<{ children: ReactNode; initialX: number }> = ({
  children,
  initialX,
}) => (
  <motion.div
    initial={{ x: initialX, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="flex gap-[23px] items-center"
  >
    {children}
  </motion.div>
);

const TextBlock: React.FC<{ title?: string; content: string }> = ({
  title,
  content,
}) => (
  <div>
    {title && <h2 className="mb-[24px]">{title}</h2>}
    <p>{content}</p>
  </div>
);

const ImageBlock: React.FC<{
  src1: string;
  src2: string;
  applyMarginAuto?: boolean;
}> = ({ src1, src2, applyMarginAuto }) => (
  <div className="w-full max-w-[500px]">
    <img
      src={src1}
      width={60}
      height={65}
      alt="highlight"
      className={applyMarginAuto ? "ml-auto" : ""}
    />
    <img src={src2} width={486} height={286} alt="smg" />
  </div>
);

const AboutUsPage = () => {
  const footprint = [
    { bg: "#F7B500", name: "OOH" },
    { bg: "#B620E0", name: "EVENTS" },
    { bg: "#32C5FF", name: "RESEARCH" },
  ];
  const footprint2 = [
    { bg: "#FF3030", name: "PRODUCTION" },
    { bg: "#0091FF", name: "TECHNOLOGY" },
    { bg: "#6236FF", name: "WORKSHOP & TRADING" },
  ];
  return (
    <div className="bg-white">
      <Hero
        title="We Are Our First Client"
        titleColor="text-b-pink"
        leftIcon="pink-star"
        mainHeading="Innovating at the Intersection of Media and Technology"
        textContent="Driven by a relentless pursuit of creativity and innovation, we empower enterprises to navigate the digital age with confidence"
      />

      <section className="bg-white pt-[80px] min-h-screen">
        <div className="grid max-w-[1200px] mx-auto text-left gap-8">
          {STORY_CONTENTS.map((content, index) => (
            <MotionDiv key={index} initialX={content.initialX}>
              {content.initialX > 0 ? (
                <>
                  <TextBlock title={content.title} content={content.text} />
                  <ImageBlock
                    src1={content.highlightImg}
                    src2={content.mainImg}
                    applyMarginAuto={true}
                  />
                </>
              ) : (
                <>
                  <ImageBlock
                    src1={content.highlightImg}
                    src2={content.mainImg}
                  />
                  <TextBlock content={content.text} />
                </>
              )}
            </MotionDiv>
          ))}
        </div>

        <div className="max-w-[1200px] mx-auto text-center grid grid-cols-2 gap-6 mt-[80px]">
          {STATEMENTS.map((statement, index) => (
            <StatementSection
              key={index}
              title={statement.title}
              backgroundColor={statement.backgroundColor}
              textContent={statement.textContent}
            />
          ))}
        </div>
      </section>

      <section className="under-section min-h-screen bg-black text-center sticky  top-0 z-10">
        <LandingPageAchievements />
      </section>
      {/* -----  values ---------*/}
      <div className="relative z-20 bg-white">
        <section className="min-h-screen bg-white text-center pt-[80px]">
          <Box maxW={1200} className="mx-auto">
            <h2>Our Core Value</h2>
            <div className="mt-10 mb-[160px] flex justify-between">
              {VALUES.map((value) => (
                <Box
                  key={value}
                  className="rounded-10 bg-white border border-[#B3B3B3] text-center flex flex-col gap-6 items-center justify-center py-6 w-[224px]  shadow-pale-blue"
                >
                  <img
                    src={`/icons/values/${value.toLowerCase()}.svg`}
                    alt={value}
                    width={80}
                    height={80}
                  />
                  <h3 className="text-[#5D5D5D]">{value}</h3>
                </Box>
              ))}
            </div>

            {/* --------------- Approach -----------*/}
            <h2>Our Approach</h2>
            <>
              <AboutStepsCard cards={ApproachStep1} />
              <AboutStepsCard cards={ApproachStep2} />
            </>
          </Box>
        </section>
        {/* ----- */}
        <section className="min-h-screen text-center bg-white pt-[160px]">
          <h2>Systematic Culture</h2>
          <p>We’re deeply rooted in process</p>

          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={20}
            marginBottom={-8}
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
          {/* --------- */}
          <Box className="flex flex-col gap-[29px] pb-[90px]">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 max-w-[1200px] mx-auto gap-6 "
            >
              {CULTURE1.map((culture) => (
                <Box
                  key={culture.img}
                  className="rounded-10 bg-white border border-[#B3B3B3] text-center flex flex-col gap-6 items-center justify-center py-6  shadow-pale-blue p-10"
                >
                  <img
                    src={`/icons/${culture.img}-icon.svg`}
                    alt={culture.img}
                    width={80}
                    height={80}
                  />
                  <h3 className="text-[#434343] ">{culture.title}</h3>
                  <p>{culture.description}</p>
                </Box>
              ))}
            </motion.div>
            {/* -------- */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 max-w-[1200px] mx-auto gap-6 "
            >
              {CULTURE2.map((culture) => (
                <Box
                  key={culture.img}
                  className="rounded-10 bg-white border border-[#B3B3B3] text-center flex flex-col gap-6 items-center justify-center py-6  shadow-pale-blue p-10"
                >
                  <img
                    src={`/icons/${culture.img}-icon.svg`}
                    alt={culture.img}
                    width={80}
                    height={80}
                  />
                  <h3 className="text-[#434343] ">{culture.title}</h3>
                  <p>{culture.description}</p>
                </Box>
              ))}
            </motion.div>
          </Box>
        </section>

        <section className="min-h-screen">
          <Box className="min-h-[60vh] grid grid-cols-2 place-items-center max-w-[1263px] mx-auto my-[80px]">
            <Box>
              <h2 className="mt-10 mb-6">Footprint & Clientele  </h2>
              <Text>A success story from every industry</Text>
              <Image
                src={"/gif/map.gif"}
                alt="brands that trust us"
                height={397}
                width={416}
                className="mt-6"
              />

              <Box className="flex gap-2 mb-2">
                {footprint.map((p) => (
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-[20px] h-[20px] rounded-full bg-[${p.bg}]`}
                    />
                    <span className="text-[12px] leading-[18px]">{p.name}</span>
                  </div>
                ))}
              </Box>
              <Box className="flex gap-2">
                {footprint2.map((p) => (
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-[20px] h-[20px] rounded-full bg-[${p.bg}]`}
                    />
                    <span className="text-[12px] leading-[18px]">{p.name}</span>
                  </div>
                ))}
              </Box>
            </Box>

            <Image
              src={"/imgs/brands.png"}
              alt="brands that trust us"
              height={627}
              width={452}
            />
          </Box>
        </section>

        <section className="min-h-screen text-center">
          <h2>Faces behind the genius</h2>
          <Text className="mt-6 mb-10">
            A seasoned, hand picked for quality executions
          </Text>
          <div className="grid grid-cols-4 gap-6 max-w-[1208px] mx-auto pb-[80px]">
            {TEAM.map((member) => (
              <div className="bg-black text-white py-6 rounded-lg">
                <img
                  src={`/imgs/avatars/${member.img}.png`}
                  alt={member.name}
                  width={88}
                  height={88}
                  className="mx-auto"
                />

                <p>{member.name}</p>
                <span className="text-[#CCD0D4] text-[12px]">
                  {member.name}
                </span>
              </div>
            ))}
          </div>

          <GetStarted />
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
