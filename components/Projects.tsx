import {
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FaGit, FaGithub } from "react-icons/fa";
import useButtonColor from "../hooks/useButtonColor";
import useHovering from "../hooks/useHovering";
import { ProjectObject } from "../pages";
import Project from "./Project";

interface Props {
  projects: ProjectObject[];
}

function Projects({ projects }: Props) {
  const { colorMode } = useColorMode();
  const { hovering, setHovering } = useHovering();
  const { buttonColor, buttonTextColor } = useButtonColor(colorMode, hovering);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      id="projects"
      as="section"
      mt="20"
      mb="10"
    >
      <Heading as="h3" size="lg" mb="10">
        My Projects
      </Heading>
      {projects.map((p, idx) => (
        <Project key={idx} inverted={idx % 2 === 1} project={p} />
      ))}
      <Heading as="h3" size="md" mt="10" mb="5">
        Check out my GitHub to see more projects
      </Heading>
      <Button
        leftIcon={<FaGithub />}
        mb="10"
        fontSize="xl"
        as="a"
        href="https://github.com/diegocamy"
        target="_blank"
        bg={buttonColor}
        color={buttonTextColor}
        _hover={{ bg: buttonColor, color: buttonTextColor }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={() => {
          setHovering(false);
        }}
      >
        diegocamy
      </Button>
    </Flex>
  );
}

export default Projects;
