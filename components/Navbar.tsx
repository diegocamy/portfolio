import Link from "next/link";
import { Flex, Heading, Icon, Text, useColorMode } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      m="auto"
      as="header"
      justify="center"
      borderBottom={
        colorMode === "light" ? "1px solid #f8f8f8" : "1px solid #283b64"
      }
    >
      <Flex maxW="1200px" w="100%" py="2" justify="center">
        <Heading
          fontSize="lg"
          fontWeight="extrabold"
          flexGrow={1}
          m="auto"
          mx="4"
        >
          <Link href="/">Diego Camy</Link>
        </Heading>
        <Flex mr="2" align="center">
          <Text mx="1" cursor="pointer">
            About Me
          </Text>
          <Text mx="1" cursor="pointer">
            Projects
          </Text>
          <Text mx="1" cursor="pointer">
            Contact
          </Text>
          <Icon
            as={FaLinkedin}
            mx="1"
            w="7"
            h="7"
            cursor="pointer"
            onClick={() =>
              window.open("https://linkedin.com/in/diegocamy", "_blank")
            }
          />
          <Icon
            as={FaGithub}
            mx="1"
            w="7"
            h="7"
            cursor="pointer"
            onClick={() =>
              window.open("https://github.com/diegocamy", "_blank")
            }
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
