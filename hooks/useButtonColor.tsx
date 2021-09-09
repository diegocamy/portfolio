import { ColorMode } from "@chakra-ui/color-mode";
import { useEffect, useState } from "react";

function useButtonColor(colorMode: ColorMode, hovering: boolean) {
  const [buttonColor, setButtonColor] = useState("black");
  const [buttonTextColor, setButtonTextColor] = useState("black");

  useEffect(() => {
    if (colorMode === "light" && hovering) {
      setButtonTextColor("black");
      setButtonColor("gray.300");
      return;
    }

    if (colorMode === "dark" && hovering) {
      setButtonColor("teal.800");
      setButtonTextColor("white");
      return;
    }

    if (colorMode === "dark") {
      setButtonColor("teal.300");
      setButtonTextColor("black");
    }

    if (colorMode === "light") {
      setButtonColor("black");
      setButtonTextColor("white");
    }
  }, [colorMode, hovering]);

  return { buttonColor, buttonTextColor };
}

export default useButtonColor;
