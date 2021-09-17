import { Button } from "@chakra-ui/button";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Dispatch, SetStateAction, useEffect } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

interface Props {
  setVisibleSection: Dispatch<SetStateAction<"about" | "projects" | "contact">>;
}

function Contact({ setVisibleSection }: Props) {
  const [isMobile] = useMediaQuery("(max-width: 786px)");
  const { ref, inView } = useInView({ threshold: 0.4 });

  useEffect(() => {
    setVisibleSection("contact");
  }, [inView]);

  return (
    <Flex direction="column" align="center" my="40" id="contact" ref={ref}>
      <Heading my="10" fontSize={isMobile ? "4xl" : "7xl"}>
        Let's get in touch!
      </Heading>
      <Flex
        wrap="wrap"
        justify="center"
        align="center"
        direction={isMobile ? "column" : "row"}
      >
        <Button
          leftIcon={<FaEnvelope />}
          fontSize="2xl"
          m={isMobile ? "2" : "5"}
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
          m={isMobile ? "2" : "5"}
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
