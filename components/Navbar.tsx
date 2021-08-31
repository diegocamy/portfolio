import { Button, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex m="auto" as="header" justify="center">
      <Flex maxW="1200px" w="100%">
        <Button onClick={toggleColorMode}>
          Color mode is {colorMode === "light" ? "Light" : "Dark"}
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
