import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
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
        className="py-[54px] md:px-[129px] rounded-20"
      >
        <ModalCloseButton className="md:hidden" />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
