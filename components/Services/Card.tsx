import { Box, useDisclosure, VStack } from "@chakra-ui/react";
import CustomButton from "../Button/Button";
import { ContactModal, Modal } from "..";

const Card = ({ img, title, description }: { [x: string]: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        key={img}
        className="md:min-h-[528px] rounded-10 text-center flex flex-col gap-6 items-center py-6 px-3  md:py-10 md:px-[24.5px] shadow-pale-blue border border-[#b3b3b3]"
      >
        <img
          src={`/icons/services/${img}.svg`}
          alt={title}
          width={80}
          height={80}
        />

        <VStack spacing={4} align="center">
          <h3 className="text-[#434343] max-w-[291px] text-sm  md:text-[24px]">
            {title}
          </h3>
          <p className="text-xs md:text-[16px] text-[#5D5D5D]">{description}</p>
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
