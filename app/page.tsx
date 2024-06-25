"use client";
import {
  ContactModal,
  CustomButton,
  GetStarted,
  LandingPageAbout,
  LandingPageAchievements,
  LandingPageServices,
  Modal,
  SectionTitle,
} from "@/components";

import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box overflowX={"hidden"}>
      <main className="min-h-home bg-mobile-bg md:bg-home-bg bg-no-repeat bg-center bg-cover  flex items-center justify-between md:pt-20">
        <div className="max-w-[900px] -mt-20 md:mt-0  md:py-40 px-5 md:ml-[100px]">
          <h1>
            Innovating at the <br /> Intersection of Media <br /> and
            Technology  
          </h1>

          <div className="block md:hidden max-w-[49px] ml-auto">
            <img
              src="/imgs/hero-star.png"
              alt="star"
              width={"100%"}
              height={49}
              className="-mt-12"
            />
          </div>

          <Text className="my-6">
            Accelerate Your Growth with SellMedia Group: Where Data-Driven
            Strategies <br /> Meet Creative Innovation, click below to get
            started with us
          </Text>
          <Box position={"relative"}>
            <Flex alignItems={"center"} className="gap-2 md:gap-6">
              <div className="bg-custom-gradient hover:bg-darkCustom-gradient p-[1px] rounded-20">
                <Link href={"/start-project"}>
                  <CustomButton className="bg-custom-gradient hover:bg-darkCustom-gradient border-1 border-bd-grey-1 rounded-20 text-red-200">
                    Start a project
                  </CustomButton>
                </Link>
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
            <div className="hidden md:block -mt-12 max-w-max">
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

        <div className="hidden md:block mr-[95px]">
          <img
            src="/imgs/hero-star.png"
            alt="star"
            width={185}
            height={185}
            className="-mt-12"
          />
        </div>
      </main>

      {/* ------------ */}
      <section className=" w-full min-h-screen">
        <LandingPageAbout />
      </section>

      {/* TODO: */}
      <section className=" w-full min-h-screen">
        <LandingPageServices />
      </section>

      <section className="min-h-screen text-center bg-b-black pb-10">
        <LandingPageAchievements />
      </section>

      <section>
        <Box className="min-h-[60vh] grid md:grid-cols-2 place-items-center max-w-[1200px] mx-auto my-[80px]  md:px-0">
          <Box>
            <SectionTitle
              title="Clientele"
              leftIcon="pink-star"
              titleColor="text-b-pink"
            />
            <h2 className="mt-10 mb-6">Brands That Trust Us  </h2>
            <Text>
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
        </Box>
      </section>
      <GetStarted />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ContactModal />
      </Modal>
    </Box>
  );
}
