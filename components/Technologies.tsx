import {
  Flex,
  Heading,
  Icon,
  Text,
  useMediaQuery,
  ThemingProps,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
  const [smallerThan650] = useMediaQuery("(max-width: 650px)");
  const [smallerThan450] = useMediaQuery("(max-width: 450px)");
  const [dimension, setDimension] = useState("80px");
  const [headingSize, setHeadingSize] = useState<"md" | "lg">("md");

  useEffect(() => {
    if (smallerThan650) {
      setHeadingSize("md");
      return setDimension("45px");
    }

    setHeadingSize("lg");
    return setDimension("80px");
  }, [smallerThan650]);

  useEffect(() => {
    if (smallerThan450) {
      return setDimension("35px");
    }

    return setDimension("45px");
  }, [smallerThan450]);

  return (
    <Flex
      as="section"
      direction="column"
      justify="center"
      align="center"
      my="20"
    >
      <Heading as="h3" size={headingSize} textAlign="center">
        Here are some of the technologies I like to work with
      </Heading>
      <Flex my="10">
        <Icon as={SiReact} h={dimension} w={dimension} mx="2" />
        <Icon as={SiJavascript} h={dimension} w={dimension} mx="2" />
        <Icon as={SiNodeDotJs} h={dimension} w={dimension} mx="2" />
        <Icon as={SiTypescript} h={dimension} w={dimension} mx="2" />
        <Icon as={SiHtml5} h={dimension} w={dimension} mx="2" />
        <Icon as={SiCss3} h={dimension} w={dimension} mx="2" />
      </Flex>
      <Flex mb="10">
        <Icon as={SiGraphql} h={dimension} w={dimension} mx="2" />
        <Icon as={SiPostgresql} h={dimension} w={dimension} mx="2" />
        <Icon as={SiSocketDotIo} h={dimension} w={dimension} mx="2" />
        <Icon as={SiDocker} h={dimension} w={dimension} mx="2" />
        <Icon as={SiMongodb} h={dimension} w={dimension} mx="2" />
        <Icon as={SiStyledComponents} h={dimension} w={dimension} mx="2" />
      </Flex>
      <Text>Plus I'm always looking forward to learn new stuff</Text>
    </Flex>
  );
}

export default Technologies;
