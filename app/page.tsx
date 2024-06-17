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
    <>
      <main className="min-h-home bg-hero-bg bg-no-repeat bg-center bg-cover  grid grid-cols-2 place-items-center">
        <div className="max-w-[750px] ml-[100px]">
          <h1>Innovating at the Intersection of Media and Technology  </h1>

          <Text className=" my-6">
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
        <LandingPageAbout />
      </section>

      <section className=" w-full min-h-screen">
        <LandingPageServices />
      </section>

      <section className="min-h-screen text-center bg-b-black">
        <LandingPageAchievements />
      </section>

      <section className="min-h-screen">
        <Box className="min-h-[60vh] grid grid-cols-2 place-items-center max-w-[1263px] mx-auto my-[80px]">
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

        <GetStarted />
      </section>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ContactModal />
      </Modal>
    </>
  );
}
