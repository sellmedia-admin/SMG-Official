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
          className={`bg-black text-white py-6 rounded-lg ${
            hoveredMember === member.name ? "bg-white" : ""
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
            width={88}
            height={88}
            className="mx-auto"
          />
          <p
            className={`${
              hoveredMember === member.name
                ? "text-[#0076B6] font-semibold"
                : ""
            }`}
          >
            {member.name}
          </p>
          <span
            className={`text-[#CCD0D4] text-[12px] ${
              hoveredMember === member.name ? "text-[#0076B6]" : ""
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
    <div className="bg-white overflow-x-hidden">
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

        <div className="max-w-[1200px] px-5 md:px-0 mx-auto text-center grid md:grid-cols-2 gap-6 mt-[80px] pb-[80px]">
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

      <section className="under-section min-h-screen bg-black text-center sticky  top-0 z-10 pb-20 md:pb-10">
        <LandingPageAchievements />
      </section>
      {/* -----  values ---------*/}
      <div className="relative z-20 bg-white">
        <section className="min-h-screen bg-white text-center pt-[80px] px-5 md:px-0">
          <Box maxW={1200} className="mx-auto">
            <h2>Our Core Value</h2>
            <div className="mt-10 mb-[160px]  grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-[18px]">
              {VALUES.map((value) => (
                <Box
                  key={value}
                  className="rounded-10 bg-white border border-[#B3B3B3] text-center flex flex-col gap-6 items-center justify-center py-6 px-4 md:px-0  shadow-pale-blue"
                >
                  <img
                    src={`/icons/values/${value.toLowerCase()}.svg`}
                    alt={value}
                    width={80}
                    height={80}
                  />
                  <span className="text-[#5D5D5D] md:text-[24px] font-bold">
                    {value}
                  </span>
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
        {/* ----- culture ------- */}
        <section className="min-h-screen text-center bg-white pt-[160px]">
          <h2>Systematic Culture</h2>
          <p>We’re deeply rooted in process</p>

          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={20}
            maxWidth={1300}
            className="mx-auto px-5 md:px-0 mb-0 md:-mb-4"
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
              className="grid md:grid-cols-2 max-w-[1200px] mx-auto gap-6 px-5 md:px-0"
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
              className="grid md:grid-cols-2 max-w-[1200px] mx-auto gap-6 px-5 md:px-0"
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

        {/* -------- footprint ---------- */}
        <section className="min-h-screen">
          <Box className="min-h-[60vh] grid md:grid-cols-2 place-items-center max-w-[1263px] mx-auto my-[80px]">
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
                  <div className="flex items-center gap-1" key={p.bg}>
                    <div
                      className={`w-[20px] h-[20px] rounded-full bg-[${p.bg}]`}
                    />
                    <span className="text-[12px] leading-[18px]">{p.name}</span>
                  </div>
                ))}
              </Box>
              <Box className="flex gap-2">
                {footprint2.map((p) => (
                  <div className="flex items-center gap-1" key={p.bg}>
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

        {/* team */}
        <section className="min-h-screen text-center px-5 md:px-0">
          <h2>Faces behind the genius</h2>
          <Text className="mt-6 mb-10">
            A seasoned, hand picked for quality executions
          </Text>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1208px] mx-auto pb-[80px]">
            <TeamComponent TEAM={TEAM} />
          </div>

          <GetStarted />
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
