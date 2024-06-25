"use client";
import {
  AnalyticsTab,
  CommunicationTab,
  Hero,
  TechnologyTab,
} from "@/components";
import { Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

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
  const [heroContent, setHeroContent] = useState({
    mainHeading: "",
    textContent: "",
  });

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
        "We harness the power of technology to create customized experiences that ultimately lead to higher conversion rates and increased sales.",
    },
  };

  useEffect(() => {
    if (params.slug) {
      setHeroContent({
        mainHeading: SERVICES[params.slug].title,
        textContent: SERVICES[params.slug].subTitle,
      });
    }
  }, [params.slug]);

  useEffect(() => {
    setHeroContent({
      mainHeading: SERVICES[activeTab].title,
      textContent: SERVICES[activeTab].subTitle,
    });
  }, [activeTab]);

  function handleTabChange(tab: string) {
    setActiveTab(tab);
  }

  function formatTabName(name: string) {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

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
        mainHeading={heroContent.mainHeading}
        textContent={heroContent.textContent}
      />

      <div className="min-h-screen max-w-[1295px] px-[5%] mx-auto pt-10">
        <div className="w-max mx-auto flex items-center justify-between">
          {topHeaders?.map((tabName) => (
            <Text
              className={`${
                activeTab === tabName
                  ? "text-b-pink md:border-b-2 border-b-darkPink pb-3"
                  : "text-[#7c7c7c]"
              }  font-semibold cursor-pointer text-center py-2 md:m-3 max-w-[122px] md:max-w-max leading-6 text-[14px] md:text-[18px]`}
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

        {/* tabs */}
        <div className="max-w-[1200px] md:px-[5%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-[18px] gap-y-10 mb-20">
          {activeTab === "marketing-communication" && <CommunicationTab />}
          {activeTab === "marketing-analytics" && <AnalyticsTab />}
          {activeTab === "marketing-technology" && <TechnologyTab />}
        </div>
      </div>
    </div>
  );
};

export default Service;
