import { CustomButton } from "@/components";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
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
  );
}
