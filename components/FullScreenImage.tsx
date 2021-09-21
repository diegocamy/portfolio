import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  images: {
    blurDataURL: string;
    src: string;
    height: number;
    width: number;
    type?: string;
  }[];
  currIdx: number;
  setCurrIdx: React.Dispatch<React.SetStateAction<number>>;
}

function FullScreenImage({
  isOpen,
  onClose,
  images,
  currIdx,
  setCurrIdx,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(images[currIdx]);

  const handleKeyPress = useCallback(
    ({ key }: KeyboardEvent) => {
      if (key === "ArrowRight") {
        currIdx < images.length - 1 && setCurrIdx(currIdx + 1);
      } else if (key === "ArrowLeft") {
        currIdx > 0 && setCurrIdx(currIdx - 1);
      }
    },
    [setCurrIdx, currIdx, images.length]
  );

  useEffect(() => {
    setSelectedImage(images[currIdx]);
  }, [currIdx, images]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress]);

  const incrementIdx = () => setCurrIdx(currIdx + 1);
  const decrementIdx = () => setCurrIdx(currIdx - 1);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="85vw" maxH="80vh" width="100%" height="100%">
        <ModalCloseButton
          bgColor="red.500"
          color="white"
          size="lg"
          _hover={{ bg: "red.700" }}
          zIndex="99"
          border="2px solid white"
        />
        <ModalBody position="relative" w="100%" h="100%">
          <Image
            alt="screenshot"
            src={selectedImage.src}
            blurDataURL={selectedImage.blurDataURL}
            placeholder="blur"
            quality="100"
            objectFit="contain"
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
          <Button
            colorScheme="messenger"
            disabled={currIdx === 0}
            onClick={decrementIdx}
          >
            Previous
          </Button>
          <Button
            colorScheme="messenger"
            mr={3}
            onClick={incrementIdx}
            disabled={currIdx === images.length - 1}
          >
            Next
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FullScreenImage;
