import { MARKETING_COMMUNICATION } from "@/data";
import Card from "./Card";

const Communication = () => {
  const isOdd = MARKETING_COMMUNICATION.length % 2 !== 0;
  return (
    <>
      {MARKETING_COMMUNICATION.map((service, index) => (
        <Card
          key={service.icon}
          img={`communications/${service.icon}`}
          title={service.service}
          description={service.description}
          isLast={isOdd && index === MARKETING_COMMUNICATION.length - 1}
        />
      ))}
    </>
  );
};

export default Communication;
