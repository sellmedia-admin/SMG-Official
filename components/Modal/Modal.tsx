import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

const CustomModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: any;
  children: any;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      closeOnOverlayClick={true}
    >
      <ModalOverlay />
      <ModalContent
        maxW={744}
        borderRadius={20}
        className="py-[54px] px-[129px] rounded-20"
      >
        {/* <ModalHeader>CustomModal</ModalHeader>
        <ModalCloseButton /> */}
        <ModalBody>{children}</ModalBody>
        {/* <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
