import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function FullScreenImage({ isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="95vw" maxH="95vh" w="100%" h="100%">
        <ModalCloseButton bgColor="red.500" zIndex="99" />
        <ModalBody>
          <Image
            alt="screenshot"
            src="https://res.cloudinary.com/diegocamy/image/upload/v1631551631/portfolio/sa-radios/SA-Radios2_hlheib.png"
            // blurDataURL={img.blurDataURL}
            // placeholder="blur"
            quality="100"
            objectFit="cover"
            layout="fill"
            loading="lazy"
            className="image"
          />
        </ModalBody>

        <ModalFooter
          bgColor="transparent"
          display="flex"
          justifyContent="space-between"
        >
          <Button colorScheme="blue">Previous</Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FullScreenImage;
