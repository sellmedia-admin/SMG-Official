import React from "react";
import Card from "./Card";
import { MARKETING_ANALYTICS } from "@/data";

const Analytics = () => {
  return (
    <>
      {MARKETING_ANALYTICS.map((service) => (
        <Card
          key={service.icon}
          img={`analytics/${service.icon}`}
          title={service.service}
          description={service.description}
        />
      ))}
    </>
  );
};

export default Analytics;
