import { Box, Flex, Text, Heading, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import me from "../public/me.png";

function Hero() {
  const [isMobile] = useMediaQuery("(max-width: 786px)");
  const [number, setNumber] = useState(undefined);

  useEffect(() => {
    setNumber(Math.ceil(Math.random() * 10000));
  }, []);
  return (
    <Flex
      as="section"
      mx="auto"
      my="20"
      direction={isMobile ? "column" : "row"}
      justify="center"
      align="center"
    >
      <Box mx="2">
        <Image
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
          My name is Diego Camy. Welcome to my website. I'm a self-taught web
          developer from Rivera, Uruguay. To see my projects, which have been
          viewed over{" "}
          <Text as="span" fontWeight="bold" textDecor="underline">
            {number}
          </Text>{" "}
          times{" "}
          <Text fontSize="xx-small" as="span">
            (by me)
          </Text>
          {", "}
          <Text as="span" color="linkedin.600">
            <Link href="#projects">click here!</Link>{" "}
          </Text>
          Or you can scroll, which is slower and boring.{" "}
        </Text>
      </Box>
    </Flex>
  );
}

export default Hero;
