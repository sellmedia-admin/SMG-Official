import { Hero, Policies } from "@/components";
import { GROUP_TERMS_AND_CONDITIONS } from "@/policies";
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
        mainHeading={"SellMedia Group Terms and Conditions"}
        textContent={"Updated: May 3, 2024"}
      />

      <div className="max-w-[1248px] mx-auto py-[33px] px-[5%] pb-20">
        <Policies policy={GROUP_TERMS_AND_CONDITIONS} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
