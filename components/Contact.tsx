import { Button } from "@chakra-ui/button";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <Flex direction="column" align="center" my="20" id="contact">
      <Heading my="10" fontSize="7xl">
        Let's get in touch!
      </Heading>
      <Flex wrap="wrap" justify="center" align="center">
        <Button
          leftIcon={<FaEnvelope />}
          fontSize="2xl"
          m="5"
          size="lg"
          as="a"
          href="mailto:diegocamyy@gmail.com"
          colorScheme="red"
        >
          Send me an email
        </Button>
        <Text fontWeight="bold" fontSize="2xl" display="block" mx="2">
          or
        </Text>
        <Button
          leftIcon={<FaLinkedin />}
          fontSize="2xl"
          m="5"
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
