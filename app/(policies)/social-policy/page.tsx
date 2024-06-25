import { Hero, Policies } from "@/components";
import { GROUP_SOCIAL_MEDIA_POLICY } from "@/policies";
import React from "react";

const SocialPolicy = () => {
  return (
    <div>
      <Hero
        noTitle
        title=""
        titleColor=""
        leftIcon=""
        mainHeading={"SellMedia Group Social Media Policy"}
        textContent={"Updated: May 3, 2024"}
        mainStyle="short-height"
      />

      <div className="max-w-[1248px] mx-auto py-[33px] px-[5%] pb-20">
        <p className="mb-4 text-[#460B32] font-[600]">
          Welcome to SellMedia Group's Terms and Conditions.
        </p>
        <p className="mb-4 text-[#460B32] font-[600]">Introduction:</p>
        <Policies policy={GROUP_SOCIAL_MEDIA_POLICY} />
      </div>
    </div>
  );
};

export default SocialPolicy;
