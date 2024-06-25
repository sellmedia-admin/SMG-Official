import { SERVICES } from "@/data";
import ServicesSection from "../ServicesSection/ServicesSection";

const ServicesOverview = () => (
  <>
    {SERVICES.map((service, index) => (
      <ServicesSection
        key={service.topTitle}
        index={index}
        image={service.image}
        topTitle={service.topTitle}
        bottomTitle={service.bottomTitle}
        linkTo={service.linkTo}
        contentTitle={service.contentTitle}
        contentText={service.contentText}
        orderBy={service.orderBy}
        // separator={service.separator}
      />
    ))}
  </>
);

export default ServicesOverview;
