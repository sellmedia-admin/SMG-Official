"use client";
import {
  AboutSections,
  CustomButton,
  Modal,
  ServicesSection,
} from "@/components";
import { ACHIEVEMENTS, SERVICES, SERVICES_HELP } from "@/data";
import { cn } from "@/utils/cn";

import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <main className="min-h-home bg-hero-bg bg-no-repeat bg-center bg-cover  grid grid-cols-2 place-items-center">
        <div className="max-w-[750px] ml-[100px]">
          <h1 className="text-6xl leading-[101px] font-bold">
            Innovating at the Intersection of Media and Technology  
          </h1>

          <Text className="leading-9 my-6">
            Accelerate Your Growth with SellMedia Group: Where Data-Driven
            Strategies Meet Creative Innovation, click below to get started with
            us
          </Text>
          <Box position={"relative"}>
            <Flex alignItems={"center"} gap={8}>
              <div className="bg-custom-gradient p-[1px] rounded-20">
                <CustomButton className="bg-custom-gradient border-1 border-bd-grey-1 rounded-20 text-red-200">
                  Start a project
                </CustomButton>
              </div>
              <Link
                href={"#"}
                className=" p-[1px] rounded-20 border border-bd-grey-1"
              >
                <CustomButton
                  className="text-b-ash rounded-20 "
                  onClick={onOpen}
                >
                  Contact Us
                </CustomButton>
              </Link>
            </Flex>
            <div className="">
              <img
                src="/gif/arrow.gif"
                alt="arrows"
                width={224}
                height={224}
                className="rotate-45"
              />
            </div>
          </Box>
        </div>

        <div>
          <img
            src="/imgs/hero-star.png"
            alt="star"
            width={185}
            height={185}
            className="-mt-16"
          />
        </div>
      </main>

      {/* ------------ */}
      <section className="text-center w-full min-h-screen">
        <AboutSections
          title="About Us"
          titleColor="#C82090"
          icon="about-icon"
          header="We Are Our First Client  "
          className="mb-[80px]"
        >
          <Text>
            At SellMedia Group, we champion the fusion of media and technology.
            As pioneers on this transformative journey, we embody our own
            philosophy, consistently pushing boundaries and setting new
            standards. Our diverse and dynamic team, equipped with cutting-edge
            technologies, crafts solutions that redefine the media and marketing
            landscape. We are driven by a relentless pursuit of creativity and
            innovation, empowering enterprises to navigate the digital age with
            confidence.
          </Text>
        </AboutSections>
        <AboutSections
          title="Our Services"
          titleColor="#00BA72"
          icon="services-icon"
          header="How Can We Help You?    "
        >
          <Text>
            SellMedia Group offers a comprehensive suite of marketing services
            designed to deliver results. Our 360-degree marketing approach
            ensures that we address every facet of your marketing needs, from
            strategic planning to execution. Our services include:
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

        <Box className="grid grid-cols-3 gap-[18px] mx-auto max-w-[1200px]">
          {SERVICES_HELP.map((achievement) => (
            <Box
              key={achievement.title}
              className="rounded-10 bg-white border-1 border-[#B3B3B3]  text-center h-[344px] flex flex-col items-center justify-center gap-6 shadow-pale-blue"
            >
              <div
                className={cn(
                  "w-[80px] h-[80px] rounded-full grid place-items-center",
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
            </Box>
          ))}
        </Box>
      </section>

      <section className=" w-full min-h-screen">
        {SERVICES.map((service) => (
          <ServicesSection
            key={service.topTitle}
            image={service.image}
            topTitle={service.topTitle}
            bottomTitle={service.bottomTitle}
            linkTo={service.linkTo}
            contentTitle={service.contentTitle}
            contentText={service.contentText}
            orderBy={service.orderBy}
            separator={service.separator}
          />
        ))}
      </section>

      <section className="min-h-screen text-center bg-b-black">
        <Box className="pt-[80px]">
          <Flex gap={8} alignItems={"center"} justifyContent={"center"}>
            <img
              src={`/icons/achievements-star.svg`}
              alt={"achievements-star"}
              width={30}
              height={30}
            />
            <Text color={"white"}>Achievements</Text>
          </Flex>

          <h2 className="mt-[40px] mb-6 text-white text-[36px] leading-[57px]">
            Our Stories in Numbers  
          </h2>
        </Box>
        {/*  -------------------- */}
        <Box className="flex justify-between w-full max-w-[1299px] mx-auto">
          <img
            src="/imgs/highlight-left-white.png"
            alt="highlight icon"
            width={60}
            height={65}
          />
          <img
            src="/imgs/highlight-right-white.png"
            alt="highlight icon"
            width={60}
            height={65}
          />
        </Box>
        <Box className="max-w-[1205px] mx-auto grid grid-cols-3 gap-[18px] -mt-5">
          {ACHIEVEMENTS.map((achievement) => (
            <Box
              key={achievement.title}
              className="rounded-10 border-2 border-white text-white text-center h-[223px] flex flex-col items-center justify-center gap-6 "
            >
              <div className="text-center mx-auto max-w-[259px]">
                <h2>{achievement.title}</h2>
              </div>
              <Text className="max-w-[339px]">{achievement.text}</Text>
            </Box>
          ))}
        </Box>
      </section>

      <section className="min-h-screen">
        <Box className="min-h-[60vh] grid grid-cols-2 place-items-center max-w-[1263px] mx-auto my-[80px]">
          <Box>
            <Flex gap={8} alignItems={"center"}>
              <img
                src={`/icons/about-icon.svg`}
                alt={"clientele-star"}
                width={30}
                height={30}
              />
              <Text className="text-b-pink">Clientele</Text>
            </Flex>

            <h2 className="mt-10 mb-6">Brands That Trust Us  </h2>
            <Text className="leading-9">
              We are proud to partner with some of the most respected brands in
              the industry. Our clients trust us to deliver innovative solutions
              and drive their success. Notable brands include
            </Text>
          </Box>

          <Image
            src={"/imgs/brands.png"}
            alt="brands that trust us"
            height={416}
            width={591}
          />

          {/* -------- */}
        </Box>

        {/* ----- get started ---- */}
        <Box className="bg-b-light-green h-full min-h-[40vh] py-[80px] px-[120px] text-center">
          <h2>Get Started  </h2>
          <Text className="mt-6 mb-10">
            Ready to embark on your own transformative journey with SellMedia
            Group? Take the first step today.
          </Text>
          <>
            <Flex alignItems={"center"} gap={8} className=" w-max mx-auto">
              <div className="bg-custom-gradient p-[1px] rounded-20">
                <CustomButton className="bg-custom-gradient border-1 border-bd-grey-1 rounded-20 text-red-200">
                  Start a project
                </CustomButton>
              </div>
              <Link
                href={"/"}
                className=" p-[1px] rounded-20 border border-bd-grey-1"
              >
                <CustomButton className="text-b-ash">Contact Us</CustomButton>
              </Link>
            </Flex>
          </>
        </Box>
      </section>

      <Modal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
