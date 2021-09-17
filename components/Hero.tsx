import {
  Box,
  Flex,
  Text,
  Heading,
  useMediaQuery,
  ResponsiveValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import me from "../public/me.png";
import { scrollIntoView } from "../utils/scrollIntoView";

interface Props {
  setVisibleSection: Dispatch<SetStateAction<"about" | "projects" | "contact">>;
}

function Hero({ setVisibleSection }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 786px)");
  const [number, setNumber] = useState(undefined);
  const [direction, setDirection] =
    useState<ResponsiveValue<"row" | "column">>("row");
  const { ref, inView } = useInView();

  useEffect(() => {
    setNumber(Math.ceil(Math.random() * 10000));
  }, []);

  useEffect(() => {
    if (isMobile) return setDirection("column");

    return setDirection("row");
  }, [isMobile]);

  useEffect(() => {
    if (inView) return setVisibleSection("about");
  }, [inView]);

  return (
    <Flex
      as="section"
      mx="auto"
      my="40"
      direction={direction}
      justify="center"
      align="center"
      id="about"
      ref={ref}
    >
      <Box mx="2">
        <Image
          alt="my picture"
          src={me}
          width="270px"
          height="350px"
          objectFit="cover"
          quality="100"
        />
      </Box>
      <Box maxW="550px" mx="2">
        <Heading fontSize="5xl">Hi there!</Heading>
        <Text my="4" fontSize="lg">
          My name is Diego Camy. Welcome to my website. I&apos;m a self-taught
          web developer from Rivera, Uruguay. To see my projects, which have
          been viewed over{" "}
          <Text as="span" fontWeight="bold" textDecor="underline">
            {number}
          </Text>{" "}
          times{" "}
          <Text fontSize="xx-small" as="span">
            (by me)
          </Text>
          {", "}
          <Text as="span" color="linkedin.600">
            <Text
              as="span"
              fontWeight="bold"
              cursor="pointer"
              onClick={() => {
                scrollIntoView("projects");
              }}
            >
              click here!
            </Text>{" "}
          </Text>
          Or you can scroll, which is slower and boring.{" "}
        </Text>
      </Box>
    </Flex>
  );
}

export default Hero;
