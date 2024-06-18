import { Hero } from "@/components";
import { SERVICES_OFFERED } from "@/data";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div>
      <Hero
        title="Hello there"
        titleColor="text-b-pink"
        leftIcon="pink-star"
        mainHeading="How can we serve you"
        textContent="From crafting impactful, multi-channel campaigns that amplify your brand's voice and engage your target audience to transforming complex data into actionable insights to track performance, understand customer behavior, and measure ROI, SMG aims at helping you refine your brand strategies for better business outcomes."
      />

      <div className="flex  gap-6 max-w-[1200px] mx-auto my-[80px]">
        {SERVICES_OFFERED.map((service) => (
          <Box
            key={service.icon}
            className="rounded-10  text-center flex flex-col gap-6 items-center justify-center p-10  shadow-pale-blue "
          >
            <img
              src={`${service.icon}`}
              alt={service.service}
              width={80}
              height={80}
            />
            <h3 className="text-[#434343] max-w-[291px]">{service.service}</h3>

            <Link href={service.link} className="text-b-pink font-[600]">
              Learn more
            </Link>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Services;
