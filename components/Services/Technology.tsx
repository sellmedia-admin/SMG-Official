import React from "react";
import Card from "./Card";
import { MARKETING_TECHNOLOGY } from "@/data";

const Technology = () => {
  const isOdd = MARKETING_TECHNOLOGY.length % 2 !== 0;
  return (
    <>
      {MARKETING_TECHNOLOGY.map((service, index) => (
        <Card
          key={service.icon}
          img={`technology/${service.icon}`}
          title={service.service}
          description={service.description}
          isLast={isOdd && index === MARKETING_TECHNOLOGY.length - 1}
        />
      ))}
    </>
  );
};

export default Technology;
