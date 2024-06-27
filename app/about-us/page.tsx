"use client";
import {
  AboutStepsCard,
  GetStarted,
  Hero,
  ImageBlock,
  LandingPageAchievements,
  MotionDiv,
  StatementSection,
  TextBlock,
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
  footprint,
  footprint2,
} from "@/data";

import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const TeamComponent = ({ TEAM }: any) => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <>
      {TEAM.map((member: any) => (
        <div
          className={`bg-black text-white py-6 px-3 text-center rounded-lg ${
            hoveredMember === member.name
              ? "bg-white border border-[#0076B6]"
              : ""
          }`}
          key={member.name}
          onMouseEnter={() => setHoveredMember(member.name)}
          onMouseLeave={() => setHoveredMember(null)}
        >
          <img
            src={
              hoveredMember === member.name
                ? "/icons/linkedin-main.svg"
                : `/imgs/avatars/${member.img}.png`
            }
            alt={member.name}
            width={60}
            height={60}
            className="mx-auto mb-2"
          />
          <p
            className={`${
              hoveredMember === member.name
                ? "text-[#0076B6] font-semibold"
                : "font-semibold"
            }`}
          >
            {member.name}
          </p>
          <span
            className={`text-[#CCD0D4] text-[12px] ${
              hoveredMember === member.name ? "!text-[#0076B6]" : ""
            }`}
          >
            {member.description}
          </span>
        </div>
      ))}
    </>
  );
};

const AboutUsPage = () => {
  return (
    <div className="bg-red-500 ">
      <Hero
        title="We Are Our First Client"
        titleColor="text-b-pink"
        leftIcon="pink-star"
        mainHeading="Innovating at the Intersection of Media and Technology"
        textContent="Driven by a relentless pursuit of creativity and innovation, we empower enterprises to navigate the digital age with confidence"
      />

      {/* our story */}
      <section className="bg-white pt-5 md:pt-[80px] min-h-screen overflow-x-hidden">
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

        <div className="max-w-[1200px]  mx-auto text-start md:text-center grid md:grid-cols-2 gap-6 py-5 md:py-[80px]">
          {STATEMENTS.map((statement, index) => (
            <StatementSection
              key={index}
              title={statement.title}
              backgroundColor={statement.backgroundColor}
              textContent={statement.textContent}
              leftIcon={statement.leftIcon}
              rightIcon={statement.rightIcon}
            />
          ))}
        </div>
      </section>

      <section className="min-h-screen bg-black text-center sticky top-0 z-10 pb-20 md:pb-10">
        {" "}
        <LandingPageAchievements />
      </section>
      {/* -----  values ---------*/}
      <div className="relative z-20 bg-white overflow-x-hidden">
        <section className="min-h-screen bg-white text-center pt-5 md:pt-[80px] px-5 md:px-0 ">
          <Box maxW={1200} className="mx-auto">
            <h2>Our Core Value</h2>
            <div className="mt-10 mb-10 md:mb-[160px] grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-[18px]">
              {VALUES.map((value, index) => (
                <Box
                  key={value}
                  className={`rounded-10 bg-white border border-[#B3B3B3] text-center flex flex-col gap-6 items-center justify-center py-6 px-4 md:px-0 shadow-pale-blue ${
                    index === VALUES.length - 1
                      ? "col-span-2 md:col-span-1"
                      : ""
                  }`}
                >
                  <div className="w-[30px] h-[30px] md:w-[80px] md:h-[80px]">
                    <img
                      src={`/icons/values/${value.toLowerCase()}.svg`}
                      alt={value}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>

                  <span className="text-[#5D5D5D] md:text-[18px] lg:text-[24px] font-bold">
                    {value}
                  </span>
                </Box>
              ))}
            </div>

            {/* --------------- Approach -----------*/}
            <h2>Our Approach</h2>
            <>
              <AboutStepsCard
                cards={ApproachStep1}
                addDownArrowBetween={true}
              />{" "}
              <AboutStepsCard cards={ApproachStep2} />
            </>
          </Box>
        </section>
        {/* ----- culture ------- */}
        <section className="md:min-h-screen text-center bg-white pt-10 md:pt-[160px] ">
          <h2>Systematic Culture</h2>
          <p>We’re deeply rooted in process</p>

          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={{ md: 20 }}
            maxWidth={1300}
            className="mx-auto mt-5  mb-0 md:-mb-4"
          >
            <div className="w-[22px] h-[24px] md:w-[60px] md:h-[65px]">
              <img
                src="/imgs/highlight-left.png"
                alt="highlight icon"
                width={"100%"}
                height={"100%"}
              />
            </div>

            <div className="w-[22px] h-[24px] md:w-[60px] md:h-[65px]">
              <img
                src="/imgs/highlight-right.png"
                alt="highlight icon"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </Flex>
          {/* --------- */}
          <Box className="flex flex-col gap-[29px] md:pb-[90px]">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 max-w-[1200px] mx-auto gap-6"
            >
              {CULTURE1.map((culture) => (
                <Box
                  key={culture.img}
                  className="rounded-10 bg-white border border-[#B3B3B3] text-center flex flex-col gap-2 md:gap-6 items-center md:justify-center shadow-pale-blue px-4 py-6 md:p-8 lg:p-10"
                >
                  <div className="w-8 h-8 md:h-20 md:w-20">
                    <img
                      src={`/icons/${culture.img}-icon.svg`}
                      alt={culture.img}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <h3 className="text-[#434343] text-base md:text-[24px]">
                    {culture.title}
                  </h3>
                  <p>{culture.description}</p>
                </Box>
              ))}
            </motion.div>
            {/* -------- */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 max-w-[1200px] mx-auto gap-6 "
            >
              {CULTURE2.map((culture) => (
                <Box
                  key={culture.img}
                  className="rounded-10 bg-white border border-[#B3B3B3] text-center flex flex-col gap-2 md:gap-6 items-center md:justify-center shadow-pale-blue px-4 py-6 md:p-8 lg:p-10"
                >
                  <div className="w-8 h-8 md:h-20 md:w-20">
                    <img
                      src={`/icons/${culture.img}-icon.svg`}
                      alt={culture.img}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <h3 className="text-[#434343] text-base md:text-[24px]">
                    {culture.title}
                  </h3>
                  <p>{culture.description}</p>
                </Box>
              ))}
            </motion.div>
          </Box>
        </section>

        {/* -------- footprint ---------- */}
        <section className="px-5 md:px-0 text-center">
          <Box className="min-h-[60vh] grid md:grid-cols-2 place-items-center max-w-[1263px] mx-auto my-5 md:my-[80px]">
            <Box>
              <h2 className="mt-10 mb-6">Footprint & Clientele  </h2>
              <Text className="text-center md:text-left">
                {" "}
                A success story from every industry
              </Text>
              <Image
                src={"/gif/map.gif"}
                alt="brands that trust us"
                height={397}
                width={416}
                className="mt-6 mb-5"
              />

              <Box className="flex gap-2 mb-2 justify-center md:justify-start">
                {footprint.map((p) => (
                  <div className="flex items-center gap-1" key={p.bg}>
                    <div
                      className={`w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-[${p.bg}]`}
                      style={{ backgroundColor: p.bg }}
                    />
                    <span className="text-[10px] md:text-[12px] leading-[18px]">
                      {p.name}
                    </span>
                  </div>
                ))}
              </Box>
              <Box className="flex gap-2">
                {footprint2.map((p) => (
                  <div className="flex items-center gap-1" key={p.bg}>
                    <div
                      className={`w-[10px] h-[10px] md:w-[20px] md:h-[20px] rounded-full bg-[${p.bg}]`}
                      style={{ backgroundColor: p.bg }}
                    />
                    <span className="text-[10px] md:text-[12px] leading-[18px]">
                      {p.name}
                    </span>
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

        {/* team */}
        <section className="text-center">
          <h2>Faces behind the genius</h2>
          <Text className="mt-6 mb-10">
            A seasoned, hand picked for quality executions
          </Text>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1208px]  px-5 md:px-0 mx-auto pb-5 md:pb-[80px]">
            <TeamComponent TEAM={TEAM} />
          </div>
        </section>
        <GetStarted />
      </div>
    </div>
  );
};

export default AboutUsPage;
