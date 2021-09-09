import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import Project from "./Project";

function Projects() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      id="projects"
      as="section"
      my="20"
    >
      <Heading as="h3" size="lg" mb="10">
        My Projects
      </Heading>
      <Project />
      <Project inverted />
      <Project />
      <Project inverted />
    </Flex>
  );
}

export default Projects;
