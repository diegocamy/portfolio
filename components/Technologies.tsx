import { Flex, Heading, Icon, Text, useMediaQuery } from "@chakra-ui/react";
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
  const [dimension, setDimension] = useState("80px");
  const [headingSize, setHeadingSize] = useState<"md" | "lg">("md");
  const [mx, setMx] = useState(2);

  useEffect(() => {
    if (smallerThan650) {
      setHeadingSize("md");
      setMx(1);
      return setDimension("40px");
    }

    setHeadingSize("lg");
    setMx(2);
    return setDimension("80px");
  }, [smallerThan650]);

  return (
    <Flex
      as="section"
      direction="column"
      justify="center"
      align="center"
      my="15"
    >
      <Heading as="h3" size={headingSize} textAlign="center">
        Here are some of the technologies I like to work with
      </Heading>
      <Flex my="10">
        <Icon as={SiReact} h={dimension} w={dimension} mx={mx} />
        <Icon as={SiJavascript} h={dimension} w={dimension} mx={mx} />
        <Icon as={SiNodeDotJs} h={dimension} w={dimension} mx={mx} />
        <Icon as={SiTypescript} h={dimension} w={dimension} mx={mx} />
        <Icon as={SiHtml5} h={dimension} w={dimension} mx={mx} />
        <Icon as={SiCss3} h={dimension} w={dimension} mx={mx} />
      </Flex>
      <Flex mb="10">
        <Icon as={SiGraphql} h={dimension} w={dimension} mx={mx} />
        <Icon as={SiPostgresql} h={dimension} w={dimension} mx={mx} />
        <Icon as={SiSocketDotIo} h={dimension} w={dimension} mx={mx} />
        <Icon as={SiDocker} h={dimension} w={dimension} mx={mx} />
        <Icon as={SiMongodb} h={dimension} w={dimension} mx={mx} />
        <Icon as={SiStyledComponents} h={dimension} w={dimension} mx={mx} />
      </Flex>
      <Text>Plus I&apos;m always looking forward to learn new stuff</Text>
    </Flex>
  );
}

export default Technologies;
