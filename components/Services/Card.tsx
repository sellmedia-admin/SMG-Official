import { Box, useDisclosure, VStack } from "@chakra-ui/react";
import CustomButton from "../Button/Button";
import { ContactModal, Modal } from "..";

const borderColorMap = {
  communication: "#005132",
  analytics: "#460B32",
  technology: "#250749",
};

const Card = ({
  img,
  title,
  description,
  isLast,
  identifier,
}: {
  img: string;
  title: string;
  description: string;
  isLast: boolean;
  identifier: keyof typeof borderColorMap;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderColor = borderColorMap[identifier] || "transparent";

  return (
    <>
      <Box
        key={img}
        className={`md:min-h-[392px] rounded-10 text-center flex flex-col gap-6 items-center py-6 px-3 md:py-10 md:px-[24.5px] shadow-pale-blue border border-[#b3b3b3] ${
          isLast ? "col-span-2" : ""
        }`}
      >
        <div
          className="h-8 w-8 md:h-20 md:w-20"
          style={{ border: `2px solid ${borderColor}`, borderRadius: "100%" }}
        >
          <img
            src={`/icons/services/${img}.svg`}
            alt={title}
            width={"100%"}
            height={"100%"}
          />
        </div>

        <VStack spacing={4} align="center">
          <h3 className="text-[#434343] max-w-[291px] text-[14px] leading-[22px] md:text-[24px] md:leading-8">
            {title}
          </h3>
          <p className="text-xs leading-[18px] md:text-[16px] md:leading-6 text-[#5D5D5D]">
            {description}
          </p>
        </VStack>
        <CustomButton
          onClick={onOpen}
          className="bg-transparent text-b-ash rounded-20 border border-solid !border-b-ash"
        >
          Talk to sales
        </CustomButton>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ContactModal />
      </Modal>
    </>
  );
};

export default Card;
