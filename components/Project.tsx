import {
  Box,
  Flex,
  Heading,
  ResponsiveValue,
  Text,
  useMediaQuery,
  Button,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useButtonColor from "../hooks/useButtonColor";
import useHovering from "../hooks/useHovering";
import { ProjectObject } from "../pages";
import ProjectDrawer from "./ProjectDrawer";

interface Props {
  project: ProjectObject;
  inverted?: boolean;
}

function Project({ inverted, project }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 786px)");
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const { hovering, setHovering } = useHovering();
  const { buttonColor, buttonTextColor } = useButtonColor(colorMode, hovering);
  const [direction, setDirection] =
    useState<ResponsiveValue<"row" | "column-reverse" | "row-reverse">>("row");
  const [textAlign, setTextAlign] = useState<"center" | "left">("left");
  const [width, setWidth] = useState("75%");
  const [boxMargin, setBoxMargin] = useState("1");

  useEffect(() => {
    if (isMobile) return setDirection("column-reverse");

    if (!isMobile && inverted) return setDirection("row-reverse");

    return setDirection("row");
  }, [isMobile, inverted]);

  useEffect(() => {
    if (isMobile) {
      setWidth("95%");
      setTextAlign("center");
      setBoxMargin("1");
      return;
    }

    setTextAlign("left");
    setWidth("75%");
    setBoxMargin("4");
  }, [isMobile]);

  return (
    <Flex
      as="article"
      align="center"
      direction={direction}
      my="5"
      maxW="800px"
      w="100%"
      cursor="pointer"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={() => {
        setHovering(false);
        onOpen();
      }}
    >
      <ProjectDrawer isOpen={isOpen} onClose={onClose} project={project} />
      <Box w={width} mx={boxMargin} my="5" textAlign={textAlign}>
        <Heading as="h3" size="md" mb="2">
          {project.title}
        </Heading>
        <Text>{project.intro}</Text>
        <Button
          borderRadius="md"
          bg={buttonColor}
          color={buttonTextColor}
          px="8"
          mx="auto"
          my="2"
          _hover={{ bg: buttonColor, color: buttonTextColor }}
        >
          View
        </Button>
      </Box>
      <Box
        mx={boxMargin}
        bgColor="red"
        w="100%"
        maxW="380px"
        h="200px"
        position="relative"
        borderRadius="md"
        filter={`grayscale(${hovering ? "0" : "1"})`}
        transition="all .2s ease-in-out"
      >
        <Image
          src={project.images[0].src}
          alt={project.title}
          blurDataURL={project.images[0].blurDataURL}
          placeholder="blur"
          layout="fill"
          quality="100"
          objectFit="cover"
          className="image"
        />
      </Box>
    </Flex>
  );
}

export default Project;
