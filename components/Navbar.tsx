import Link from "next/link";
import { Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { scrollIntoView } from "../utils/scrollIntoView";

function Navbar() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      m="auto"
      as="header"
      justify="center"
      position="fixed"
      top="0"
      width="100vw"
      zIndex="2"
      bgColor={colorMode === "light" ? "white" : "#1A202C"}
      borderBottom={
        colorMode === "light" ? "1px solid #f8f8f8" : "1px solid #283b64"
      }
    >
      <Flex maxW="1200px" w="100%" py="2" justify="center">
        <Heading
          fontSize="lg"
          fontWeight="extrabold"
          flexGrow={1}
          cursor="pointer"
          m="auto"
          mx="4"
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Diego Camy
        </Heading>
        <Flex mr="2" align="center">
          <Text
            mx="1"
            cursor="pointer"
            onClick={() => {
              scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            About
          </Text>
          <Text
            mx="1"
            cursor="pointer"
            onClick={() => {
              scrollIntoView("projects");
            }}
          >
            Projects
          </Text>
          <Text
            mx="1"
            cursor="pointer"
            onClick={() => {
              document
                .querySelector("#contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
