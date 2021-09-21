import {
  Button,
  Flex,
  Heading,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import useButtonColor from "../hooks/useButtonColor";
import useHovering from "../hooks/useHovering";
import { ProjectObject } from "../pages";
import Project from "./Project";
import { useInView } from "react-intersection-observer";

interface Props {
  projects: ProjectObject[];
  setVisibleSection: Dispatch<SetStateAction<"about" | "projects" | "contact">>;
}

function Projects({ projects, setVisibleSection }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 786px)");
  const { colorMode } = useColorMode();
  const { hovering, setHovering } = useHovering();
  const { buttonColor, buttonTextColor } = useButtonColor(colorMode, hovering);
  const { ref, inView } = useInView({ threshold: isMobile ? 0.2 : 0.4 });

  useEffect(() => {
    setVisibleSection("projects");
  }, [inView, setVisibleSection]);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      id="projects"
      as="section"
      my="40"
      ref={ref}
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
