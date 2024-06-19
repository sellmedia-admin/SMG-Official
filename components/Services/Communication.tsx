import { MARKETING_COMMUNICATION } from "@/data";
import Card from "./Card";

const Communication = () => {
  return (
    <>
      {MARKETING_COMMUNICATION.map((service) => (
        <Card
          key={service.icon}
          img={`communications/${service.icon}`}
          title={service.service}
          description={service.description}
        />
      ))}
    </>
  );
};

export default Communication;
