import { ProjectForm, SectionTitle } from "@/components";
import { Box } from "@chakra-ui/react";
import React from "react";

const Services = () => {
  return (
    <div className="px-5 md:px-0">
      <Box className=" md:ml-[120px] pt-[80px] pb-10 space-y-6">
        <SectionTitle
          title="Want to work with us?"
          leftIcon="pink-star"
          titleColor="text-b-pink"
        />

        <h1>Start a Project</h1>
      </Box>
      <ProjectForm />
    </div>
  );
};

export default Services;
