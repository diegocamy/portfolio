import { Button } from "@chakra-ui/button";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

interface Props {
  setVisibleSection: Dispatch<SetStateAction<"about" | "projects" | "contact">>;
}

function Contact({ setVisibleSection }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 786px)");
  const { ref, inView } = useInView({ threshold: 0.4 });
  const [fontSize, setFontSize] = useState("7xl");
  const [direction, setDirection] = useState<"row" | "column">("row");
  const [margin, setMargin] = useState("5");

  useEffect(() => {
    setVisibleSection("contact");
  }, [inView, setVisibleSection]);

  useEffect(() => {
    if (isMobile) {
      setFontSize("4xl");
      setDirection("column");
      setMargin("2");
      return;
    }

    setFontSize("7xl");
    setDirection("row");
    setMargin("5");
  }, [isMobile]);

  return (
    <Flex direction="column" align="center" my="40" id="contact" ref={ref}>
      <Heading my="10" fontSize={fontSize}>
        Let&apos;s get in touch!
      </Heading>
      <Flex wrap="wrap" justify="center" align="center" direction={direction}>
        <Button
          leftIcon={<FaEnvelope />}
          fontSize="2xl"
          m={margin}
          size="lg"
          as="a"
          href="mailto:diegocamyy@gmail.com"
          colorScheme="red"
        >
          Send me an email
        </Button>
        <Text fontWeight="bold" fontSize="2xl" display="block" mx="2">
          OR
        </Text>
        <Button
          leftIcon={<FaLinkedin />}
          fontSize="2xl"
          m={margin}
          size="lg"
          as="a"
          href="https://linkedin.com/in/diegocamy"
          target="_blank"
          colorScheme="linkedin"
        >
          Find me on LinkedIn
        </Button>
      </Flex>
    </Flex>
  );
}

export default Contact;
