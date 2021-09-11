import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import { ProjectObject } from "../pages";
import Project from "./Project";

interface Props {
  projects: ProjectObject[];
}

function Projects({ projects }: Props) {
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
      {projects.map((p, idx) => (
        <Project key={idx} inverted={idx % 2 === 1} project={p} />
      ))}
    </Flex>
  );
}

export default Projects;
