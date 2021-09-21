import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const color = localStorage.getItem("chakra-ui-color-mode");

    if (color) {
      return color === "light" ? setIsDark(false) : setIsDark(true);
    }

    return setIsDark(false);
  }, []);

  return (
    <Flex
      align="center"
      mr="0"
      flexGrow={0}
      position="fixed"
      bottom="25px"
      right="25px"
      fontSize="2xl"
      bg={colorMode === "light" ? "white" : "blue.900"}
      px="5"
      py="2"
      borderRadius="25px"
      boxShadow="dark-lg"
    >
      <Icon as={FaSun} h="5" w="5" />
      <Switch
        onChange={() => {
          toggleColorMode();
          setIsDark(!isDark);
        }}
        isChecked={isDark}
        mx="2"
      />
      <Icon as={FaMoon} h="5" w="5" />
    </Flex>
  );
}

export default ThemeSwitch;
