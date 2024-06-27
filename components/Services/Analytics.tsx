import React from "react";
import Card from "./Card";
import { MARKETING_ANALYTICS } from "@/data";

const Analytics = () => {
  const isOdd = MARKETING_ANALYTICS.length % 2 !== 0;
  return (
    <>
      {MARKETING_ANALYTICS.map((service, index) => (
        <Card
          key={service.icon}
          img={`analytics/${service.icon}`}
          title={service.service}
          description={service.description}
          isLast={isOdd && index === MARKETING_ANALYTICS.length - 1}
          identifier="analytics"
        />
      ))}
    </>
  );
};

export default Analytics;
