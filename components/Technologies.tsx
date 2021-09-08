import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";

import {
  SiReact,
  SiStyledComponents,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodeDotJs,
  SiGraphql,
  SiDocker,
  SiSocketDotIo,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

function Technologies() {
  return (
    <Flex
      as="section"
      direction="column"
      justify="center"
      align="center"
      my="20"
    >
      <Heading as="h3" size="lg">
        Here are some of the technologies I like to work with
      </Heading>
      <Flex my="10">
        <Icon as={SiReact} h="80px" w="80px" mx="2" />
        <Icon as={SiJavascript} h="80px" w="80px" mx="2" />
        <Icon as={SiNodeDotJs} h="80px" w="80px" mx="2" />
        <Icon as={SiTypescript} h="80px" w="80px" mx="2" />
        <Icon as={SiHtml5} h="80px" w="80px" mx="2" />
        <Icon as={SiCss3} h="80px" w="80px" mx="2" />
      </Flex>
      <Flex mb="10">
        <Icon as={SiGraphql} h="80px" w="80px" mx="2" />
        <Icon as={SiPostgresql} h="80px" w="80px" mx="2" />
        <Icon as={SiSocketDotIo} h="80px" w="80px" mx="2" />
        <Icon as={SiDocker} h="80px" w="80px" mx="2" />
        <Icon as={SiMongodb} h="80px" w="80px" mx="2" />
        <Icon as={SiStyledComponents} h="80px" w="80px" mx="2" />
      </Flex>
      <Text>Plus I'm always looking forward to learn new stuff</Text>
    </Flex>
  );
}

export default Technologies;
