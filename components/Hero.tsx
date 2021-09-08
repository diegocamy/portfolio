import {
  Box,
  Flex,
  Text,
  Heading,
  useMediaQuery,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import profilepic from "../public/me.jpg";

function Hero() {
  const [isMobile] = useMediaQuery("(max-width: 786px)");
  const [number, setNumber] = useState(undefined);

  useEffect(() => {
    setNumber(Math.ceil(Math.random() * 100000));
  }, []);
  return (
    <Flex as="section" mx="auto" my="20" justify="center" align="center">
      <Box maxW="550px" mx="2">
        <Heading fontSize="5xl">Hi there!</Heading>
        <Text my="4">
          My name is Diego Camy. Welcome to my website. I'm a self-taught web
          developer from Rivera, Uruguay. To see my work, which has been viewed
          over{" "}
          <Tooltip label="By me" fontSize="md" hasArrow aria-label="A label">
            <Text as="span" fontWeight="bold" textDecor="underline">
              {number}
            </Text>
          </Tooltip>{" "}
          times,{" "}
          <Text as="span" color="linkedin.600">
            <Link href="#projects">click here!</Link>{" "}
          </Text>
          Or you can scroll, which is slower and boring.{" "}
        </Text>
      </Box>
      <Box>
        <Image
          src={profilepic}
          width="270px"
          height="350px"
          objectFit="cover"
          quality="100"
        />
      </Box>
    </Flex>
  );
}

export default Hero;
