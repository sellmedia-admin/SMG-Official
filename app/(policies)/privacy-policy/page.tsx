import { Hero, Policies } from "@/components";
import { GROUP_PRIVACY_POLICY } from "@/policies";
import React from "react";

export interface PrivacyPolicySection {
  text?: string;
  subtitle?: string;
  list?: string[];
  textAfterList?: string;
}

const PrivacyPolicy = () => {
  return (
    <div>
      <Hero
        noTitle
        title=""
        titleColor=""
        leftIcon=""
        mainHeading={"SellMedia Group Privacy Policy"}
        textContent={"Updated: May 3, 2024"}
        mainStyle="short-height"
      />

      <div className="max-w-[1248px] mx-auto py-[33px] pb-20 px-[5%]">
        <Policies policy={GROUP_PRIVACY_POLICY} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
