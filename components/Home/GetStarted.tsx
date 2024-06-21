import { Box, Flex, Link, Text, useDisclosure } from "@chakra-ui/react";

import CustomButton from "../Button/Button";
import { ContactModal, Modal } from "..";

const GetStarted = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box className="bg-b-light-green h-full  py-10 px-5 md:py-[80px] md:px-[120px] text-start md:text-center">
      <h2>Get Started  </h2>
      <Text className="mt-6 mb-10">
        Ready to embark on your own transformative journey with SellMedia Group?
        Take the first step today.
      </Text>
      <>
        <Flex alignItems={"center"} gap={8} className="max-w-max md:mx-auto">
          <div className="bg-custom-gradient p-[1px] rounded-20">
            <Link href={"/start-project"}>
              <CustomButton className="bg-custom-gradient border-1 border-bd-grey-1 rounded-20 text-red-200">
                Start a project
              </CustomButton>
            </Link>
          </div>
          <Link
            href={"#"}
            className=" p-[1px] rounded-20 border border-bd-grey-1"
          >
            <CustomButton className="text-b-ash" onClick={onOpen}>
              Contact Us
            </CustomButton>
          </Link>
        </Flex>
      </>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ContactModal />
      </Modal>
    </Box>
  );
};

export default GetStarted;
