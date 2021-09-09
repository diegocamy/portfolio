import {
  Box,
  Flex,
  Heading,
  ResponsiveValue,
  Text,
  useMediaQuery,
  Image,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useButtonColor from "../hooks/useButtonColor";
import useHovering from "../hooks/useHovering";

interface Props {
  inverted?: boolean;
}

function Project({ inverted }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 786px)");
  const { colorMode } = useColorMode();
  const { hovering, setHovering } = useHovering();
  const { buttonColor, buttonTextColor } = useButtonColor(colorMode, hovering);
  const [direction, setDirection] =
    useState<ResponsiveValue<"row" | "column-reverse" | "row-reverse">>("row");

  useEffect(() => {
    if (isMobile) return setDirection("column-reverse");

    if (!isMobile && inverted) return setDirection("row-reverse");

    return setDirection("row");
  }, [isMobile, inverted]);

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
    >
      <Box
        w={isMobile ? "95%" : "75%"}
        mx={isMobile ? "1" : "4"}
        my="5"
        textAlign={isMobile ? "center" : "left"}
      >
        <Heading as="h3" size="md" mb="2">
          Project #1
        </Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolor
          beatae totam, veritatis odit ad amet officiis et minima quisquam
          iusto. Minima est impedit natus, maxime, rem dolor nihil optio
        </Text>
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
      <Box mx={isMobile ? "0" : "4"}>
        <Image
          src="https://miro.medium.com/max/2880/1*gGDDAihipvJ1c_tR03h7FA.png"
          width="400px"
          height="200px"
          alt="project_1"
          borderRadius="md"
          objectFit="cover"
          filter={`grayscale(${hovering ? "0" : "1"})`}
          transition="all .2s ease-in-out"
        />
      </Box>
    </Flex>
  );
}

export default Project;
