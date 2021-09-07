import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      align="center"
      mr="0"
      flexGrow={0}
      position="absolute"
      top="100%"
      bottom="25px"
      right="25px"
      fontSize="2xl"
    >
      <Icon
        as={FaSun}
        h="5"
        w="5"
        color={colorMode === "light" ? "orange.300" : "gray.50"}
      />
      <Switch onChange={toggleColorMode} mx="2" />
      <Icon
        as={FaMoon}
        h="5"
        w="5"
        color={colorMode === "light" ? "yellow.300" : "gray.50"}
      />
    </Flex>
  );
}

export default ThemeSwitch;
