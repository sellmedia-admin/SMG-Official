import { AboutSections, CustomButton } from "@/components";
import { cn } from "@/utils/cn";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-home bg-hero-bg bg-no-repeat bg-center bg-cover  grid grid-cols-2 place-items-center">
        <div className="max-w-[750px] ml-[100px]">
          <h1 className="text-6xl leading-[101px] font-bold">
            Innovating at the Intersection of Media and Technology  
          </h1>

          <Text className="text-[18px] leading-9 my-6">
            Accelerate Your Growth with SellMedia Group: Where Data-Driven
            Strategies Meet Creative Innovation, click below to get started with
            us
          </Text>
          <Flex alignItems={"center"} gap={8}>
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
        </div>

        <div>
          <img src="/imgs/hero-star.png" alt="star" width={185} height={185} />
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
      </section>

      <section className="text-center w-full min-h-screen"></section>
    </>
  );
}
