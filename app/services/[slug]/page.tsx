"use client";
import { Hero } from "@/components";
import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
interface ServiceType {
  [key: string]: {
    title: string;
    subTitle: string;
  };
}

const Service = ({ params }: { params: { slug: string } }) => {
  const topHeaders = [
    "marketing-communication",
    "marketing-analytics",
    "marketing-technology",
  ];
  const [activeTab, setActiveTab] = useState(params.slug);

  function handleTabChange(tab: string) {
    setActiveTab(tab);
  }

  function formatTabName(name: string) {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const SERVICES: ServiceType = {
    "marketing-communication": {
      title: "Marketing Communications",
      subTitle:
        "Craft compelling marketing communications that captivate and engage consumers, while simultaneously gathering invaluable data and cultivating high-quality leads.",
    },
    "marketing-analytics": {
      title: "Marketing Analytics",
      subTitle:
        "Unlock the power of marketing analytics with our comprehensive approach which involves systematically collecting, measuring, and analyzing marketing data.",
    },
    "marketing-technology": {
      title: "Marketing Technology",
      subTitle:
        "We harness the power of technology to create customized experiences that ultimately lead to  higher conversion rates and increased sales.",
    },
  };

  if (!params.slug) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <Hero
        noTitle
        title=""
        titleColor=""
        leftIcon=""
        mainHeading={SERVICES[params.slug].title}
        textContent={SERVICES[params.slug].subTitle}
      />

      <div className="min-h-screen max-w-[1295px] mx-auto pt-10">
        <div className="w-max mx-auto">
          {topHeaders?.map((tabName) => (
            <Text
              className={`${
                activeTab === tabName
                  ? "text-b-pink bg-b-green-2 border-b-2 border-b-darkPink pb-3"
                  : "text-[#7c7c7c]"
              }  font-medium cursor-pointer py-2 m-3 max-w-max inline`}
              key={tabName}
              onClick={() => handleTabChange(tabName)}
            >
              {formatTabName(tabName)}
            </Text>
          ))}
        </div>

        {/* ------ */}
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={20}
          marginBottom={-8}
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
      </div>
    </div>
  );
};

export default Service;
