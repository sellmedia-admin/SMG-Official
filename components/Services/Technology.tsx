import React from "react";
import Card from "./Card";
import { MARKETING_TECHNOLOGY } from "@/data";

const Technology = () => {
  return (
    <>
      {MARKETING_TECHNOLOGY.map((service) => (
        <Card
          key={service.icon}
          img={`technology/${service.icon}`}
          title={service.service}
          description={service.description}
        />
      ))}
    </>
  );
};

export default Technology;
